import React, { useState } from 'react';
import './style/select.css';
import { ReactComponent as DropDownIcon } from "../../assets/icon/drop-down.svg";

interface SelectProps {
    optionName: string;
    optionList: string[];
}

const Select: React.FC<SelectProps> = ({ 
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
        <div className="select-box">
            <button type="button" className="select-label" onClick={toggleDropdown}>
                <p>{selectedOption}</p>
                <DropDownIcon className='icon' />
            </button>
            {isOpen && (
                <ul className="option-list">
                    {optionList && optionList.map((option: any, index: number) => (
                        <li key={index} className="select-option" onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
