import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import MapFilterSelect from "../common/MapFilterSelect";
import MapStyleSelect from "./MapStyleSelect";

const Maps = () => {
    const [ level, setLevel ] = useState<number>(3);
    const [ hide, setHide ] = useState<boolean>(false);
    const [ mapType, setMapType ] = useState<number>(1);

    const setPlusLevel = () => {
        if (level > 3) {
            setLevel(level - 1)
        }
    }

    const setMinusLevel = () => {
        if (level < 12) {
            setLevel(level + 1)
        }
    }

    return (
        <>
            <Map
                className="map"
                center={{ lat: 33.450701, lng: 126.570667 }}
                level={level}
                mapTypeId={mapType}
            >
                <div className="map-system">
                    <button className="map-level" onClick={() => setPlusLevel()}>+</button>
                    <button className="map-level" onClick={() => setMinusLevel()}>-</button>

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