import React, { Dispatch, useState } from "react";
import "./style/main.css";
import DEFAULT_STYLE from "../../assets/image/default-style.png";
import SKYVIEW_STYLE from "../../assets/image/skyview-style.png";
import HYBRID_STYLE from "../../assets/image/hybrid-style.png";

interface MapStyleSelectProps {
    optionName: string;
    setMapType: Dispatch<React.SetStateAction<string>>;
}

const MapStyleSelect: React.FC<MapStyleSelectProps> = ({ optionName, setMapType }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionName);
    const mapStyles = [
        { name: "지도", id: "roadmap", img: DEFAULT_STYLE }, // Google Maps의 roadmap에 대응
        { name: "스카이뷰", id: "satellite", img: SKYVIEW_STYLE }, // satellite에 대응
        { name: "하이브리드", id: "hybrid", img: HYBRID_STYLE }, // hybrid에 대응
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: { name: string; id: string }) => {
        setSelectedOption(option.name);
        setMapType(option.id); // Google Maps API에서 사용하는 mapTypeId 값으로 설정
        setIsOpen(false);
    };

    return (
        <div className="map-style-select-box">
            <button
                type="button"
                className={`map-style-select-label ${selectedOption !== optionName ? "active" : ""}`}
                onClick={toggleDropdown}
            >
                <p>{selectedOption}</p>
            </button>
            {isOpen && (
                <div className="style-list">
                    {mapStyles.map((style, index) => (
                        <div
                            key={index}
                            className={`style-info ${selectedOption === style.name ? "active" : ""}`}
                            onClick={() => handleOptionClick(style)}
                        >
                            <img src={style.img} alt={style.name} />
                            <p>{style.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MapStyleSelect;
