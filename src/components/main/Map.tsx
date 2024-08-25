import "./style/main.css";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import MapFilterSelect from "../common/MapFilterSelect";
import MapStyleSelect from "./MapStyleSelect";
import { ReactComponent as PlusIcon } from "../../assets/icon/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icon/minus.svg";
import MapFilter from "./MapFilter";
import { useNavigate } from "react-router-dom";

interface MapsProps {
    setLat: Dispatch<React.SetStateAction<number>> | null,
    setLng: Dispatch<React.SetStateAction<number>> | null
}

const Maps: React.FC<MapsProps> = ({ setLat, setLng }) => {
    const navigate = useNavigate();
    const defaultLevel = 3;
    const [ level, setLevel ] = useState<number>(defaultLevel);
    const [ hide, setHide ] = useState<boolean>(false);
    const [ mapType, setMapType ] = useState<number>(1);
    const [ location, setLocation ] = useState<{
        lat: number,
        lng: number
    }>({
        lat: 123,
        lng: 123
    });
    const [ aptList, setAptList ] = useState<{
        aptId: number,
        location: string,
        subLocation: string,
        aptName: string,
        aptExplain: string,
        aptType: string,
        aptRentType: string,
        aptPrice: string,
        aptLike: number,
        aptImage: string,
        aptAddress: string,
        aptLatitude: number,
        aptLongitude: number,
        squareFootage: string,
    }[]>([]);

    const mapRef = useRef<kakao.maps.Map>(null);

    const handleLevel = (type: "increase" | "decrease") => {
        const map = mapRef.current
        if (!map) return

        if (type === "increase") {
            map.setLevel(map.getLevel() + 1)
            setLevel(map.getLevel())
        } else if (type === "decrease") {
            map.setLevel(map.getLevel() - 1)
            setLevel(map.getLevel())
        }
    }

    useEffect(() => {
        getCenter();
    }, [])

    const getCenter = () => {
        window.navigator.geolocation.getCurrentPosition((data) => {
            const map = mapRef.current
            if (!map) return;

            const latlng = new kakao.maps.LatLng(data.coords.latitude, data.coords.longitude);
            map.setCenter(latlng);

            if (setLat !== null && setLng !== null) {
                setLat(data.coords.latitude);
                setLng(data.coords.longitude);
            }
            
            setLocation({
                lat: data.coords.latitude,
                lng: data.coords.longitude
            });
        });
    }

    return (
        <>
            <Map
                className="map"
                center={location}
                mapTypeId={mapType}
                level={defaultLevel}
                zoomable={true}
                ref={mapRef}
            >
                <div className="overlay-container">
                    {
                        aptList && aptList.map((data) => (
                            <CustomOverlayMap position={{ lat: data?.aptLatitude, lng: data?.aptLongitude}}>
                                <div className='overlay' onClick={() => navigate("/item/" + data?.aptId)}>
                                    <p className="square-footage">{data?.squareFootage}</p>
                                    <p className="apt-price">{data?.aptPrice}</p>
                                </div>
                            </CustomOverlayMap>
                        ))
                    }
                    <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
                        <div className='overlay active'>
                            <p className="square-footage">31평</p>
                            <p className="apt-price">16.8억</p>
                        </div>
                    </CustomOverlayMap>
                </div>
                <div className="map-system">
                    <button className="map-level" onClick={() => handleLevel("decrease")}><PlusIcon /></button>
                    <button className="map-level" onClick={() => handleLevel("increase")}><MinusIcon /></button>

                    <div className="filter">
                        <MapFilterSelect optionName="인프라" optionList={["교통", "교육", "주거환경", "편의시설"]} />
                        <MapStyleSelect optionName="지도" setMapType={setMapType} />
                        <MapFilter lat={location.lat} lng={location.lng} setAptList={setAptList} />
                        <MapFilterSelect optionName="주변" optionList={["광역버스", "초등학교", "중학교", "고등학교", "어린이집", "유치원"]} />
                        <button type="button" className={`hide-button ${hide ? "active" : ""}`} onClick={() => setHide(!hide)}>숨김</button>
                        <MapFilterSelect optionName="정책" optionList={["규제", "노후계획"]} />
                    </div>
                </div>
            </Map>
        </>
    )
}

export default Maps;

