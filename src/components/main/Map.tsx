import "./style/main.css";
import { useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import MapFilterSelect from "../common/MapFilterSelect";
import MapStyleSelect from "./MapStyleSelect";

const Maps = () => {
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
                <div className="map-system">
                    <button className="map-level" onClick={() => handleLevel("decrease")}>+</button>
                    <button className="map-level" onClick={() => handleLevel("increase")}>-</button>

                    <div className="filter">
                        <MapFilterSelect optionName="인프라" optionList={["교통", "교육", "주거환경", "편의시설"]} />
                        <MapStyleSelect optionName="지도" setMapType={setMapType} />
                        <MapFilterSelect optionName="필터" optionList={["평형", "가격", "입주년차", "세대수", "주차공간", "전세가율", "갭가격"]} />
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

