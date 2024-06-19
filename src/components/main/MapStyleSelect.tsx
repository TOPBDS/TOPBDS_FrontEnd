import React, { Dispatch, useState } from "react";
import "./style/main.css";
import DEFAULT_STYLE from "../../assets/image/default-style.png";
import SKYVIEW_STYLE from "../../assets/image/skyview-style.png";
import HYBRID_STYLE from "../../assets/image/hybrid-style.png";

interface MapStyleSelect {
    optionName: string;
    setMapType: Dispatch<React.SetStateAction<number>>
}

const MapStyleSelect: React.FC<MapStyleSelect> = ({ 
    optionName,
    setMapType
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionName);
    const mapStyle = ["지도", "스카이뷰", "하이브리드"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setMapType(option == "지도" ? 1 : option == "스카이뷰" ? 2 : 3);
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
                            <img src={map == "지도" ? DEFAULT_STYLE : map == "스카이뷰" ? SKYVIEW_STYLE : HYBRID_STYLE} />
                            <p>{map}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MapStyleSelect;