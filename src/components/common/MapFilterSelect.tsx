import React, { useState } from "react";
import "./style/select.css";

interface MapFilterSelect {
    optionName: string;
    optionList: string[];
}

const MapFilterSelect: React.FC<MapFilterSelect> = ({ 
    optionName,
    optionList 
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionName);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="map-fillter-select-box">
            <button type="button" className="map-fillter-select-label" onClick={toggleDropdown}>
                <p>{selectedOption}</p>
            </button>
            {isOpen && (
                <ul className="map-fillter-option-list">
                    {optionList && optionList.map((option: any, index: number) => (
                        <li key={index} className={`map-fillter-select-option ${selectedOption == option ? "active" : ""}`} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MapFilterSelect;