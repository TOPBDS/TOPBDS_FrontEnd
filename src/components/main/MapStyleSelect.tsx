import React, { useState } from "react";
import "./style/main.css";
import DEFAULT_STYLE from "../../assets/image/default-style.png";
import SATELLITE_STYLE from "../../assets/image/satellite-style.png";
import POINT_STYLE from "../../assets/image/point-style.png";
import ROAD_STYLE from "../../assets/image/road-style.png";

interface MapStyleSelect {
    optionName: string;
}

const MapStyleSelect: React.FC<MapStyleSelect> = ({ 
    optionName
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionName);
    const mapStyle = ["지도", "위성", "지적", "로드뷰"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="map-style-select-box">
            <button type="button" className="map-style-select-label" onClick={toggleDropdown}>
                <p>{selectedOption}</p>
            </button>
            {isOpen && (
                <div className="style-list">
                    {mapStyle && mapStyle.map((map: any, index: number) => (
                        <div key={index} className={`style-info ${selectedOption == map ? "active" : ""}`} onClick={() => handleOptionClick(map)}>
                            <img src={map == "지도" ? DEFAULT_STYLE : map == "위성" ? SATELLITE_STYLE : map == "지적" ? POINT_STYLE : ROAD_STYLE} />
                            <p>{map}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MapStyleSelect;