import React, { Dispatch, useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import MapFilterSelect from "../common/MapFilterSelect";
import MapStyleSelect from "./MapStyleSelect";
import MapFilter from "./MapFilter";
import { ReactComponent as PlusIcon } from "../../assets/icon/plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icon/minus.svg";

interface MapsProps {
    setLat: Dispatch<React.SetStateAction<number>> | null;
    setLng: Dispatch<React.SetStateAction<number>> | null;
}

interface AptDTO {
    aptId: number;
    location: string;
    subLocation: string;
    aptName: string;
    aptPrice: string;
    aptAddress: string;
    aptLatitude: number;
    aptLongitude: number;
    squareFootage: string;
    floor: string;
}

const MapGoogle: React.FC<MapsProps> = ({ setLat, setLng }) => {
    const navigate = useNavigate();
    const defaultLevel = 15;
    const [level, setLevel] = useState<number>(defaultLevel);
    const [hide, setHide] = useState<boolean>(false);
    const [mapType, setMapType] = useState<string>("roadmap"); // mapType의 기본값을 roadmap으로 설정
    const [location, setLocation] = useState<{
        lat: number;
        lng: number;
    }>({
        lat: 123,
        lng: 123,
    });
    const [aptList, setAptList] = useState<AptDTO[]>([]);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error(error);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity,
                }
            );
        } else {
            alert("GPS를 지원하지 않습니다. 설정을 확인하세요.");
        }
    };

    const handleLevel = (type: "increase" | "decrease") => {
        if (type === "increase" && level > 8) {
            setLevel(level - 1); // 최대 Level이 40
        } else if (type === "decrease" && level < 20) {
            setLevel(level + 1); // 최소 Level이 10
        }
    };    
    
    const containerStyle = {
        width: "100%",
        height: "100vh",
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyDsi-u7N9I4RHy1eMx3zfBRJTtrepPKMdk">
            <GoogleMap
                mapContainerStyle={containerStyle}
                options={{ disableDefaultUI: true, mapTypeId: mapType }} // mapTypeId를 사용하여 지도 타입을 변경
                center={location}
                zoom={level}
            >
                <div className="map-system">
                    <button className="map-level" onClick={() => handleLevel("decrease")}>
                        <PlusIcon />
                    </button>
                    <button className="map-level" onClick={() => handleLevel("increase")}>
                        <MinusIcon />
                    </button>

                    <div className="filter">
                        <MapFilterSelect optionName="인프라" optionList={["교통", "교육", "주거환경", "편의시설"]} />
                        <MapStyleSelect optionName="지도" setMapType={setMapType} /> {/* setMapType 전달 */}
                        <MapFilter lat={location.lat} lng={location.lng} setAptList={setAptList} />
                        <button type="button" className={`hide-button ${hide ? "active" : ""}`} onClick={() => setHide(!hide)}>
                            숨김
                        </button>
                    </div>
                </div>
            </GoogleMap>
        </LoadScript>
    );
};

export default MapGoogle;
