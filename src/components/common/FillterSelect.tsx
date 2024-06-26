import React, { useState } from "react";
import "./style/select.css";
import { ReactComponent as FillterDropDownIcon } from "../../assets/icon/fillter-drop-down.svg";

interface FillterSelectProps {
    optionName: string;
    optionList: string[];
}

const FilterSelect: React.FC<FillterSelectProps> = ({ 
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
        <div className="fillter-select-box">
            <button type="button" className="fillter-select-label" onClick={toggleDropdown}>
                <p>{selectedOption}</p>
                <FillterDropDownIcon className='icon' />
            </button>
            {isOpen && (
                <ul className="fillter-option-list">
                    {optionList && optionList.map((option: any, index: number) => (
                        <li key={index} className="fillter-select-option" onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default FilterSelect;