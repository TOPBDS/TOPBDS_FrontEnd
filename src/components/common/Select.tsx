import React, { Dispatch, SetStateAction, useState } from 'react';
import './style/select.css';
import { ReactComponent as DropDownIcon } from "../../assets/icon/drop-down.svg";

interface SelectProps {
    optionName: string;
    optionList: {id: number, name: string}[];
    setSelectItem: Dispatch<SetStateAction<number>> | null;
    setSelectOption: Dispatch<SetStateAction<string>> | null;
}

const Select: React.FC<SelectProps> = ({ 
    optionName,
    optionList,
    setSelectItem,
    setSelectOption = null
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(optionName);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option?.name);
        if (setSelectItem != null) {
            setSelectItem(option?.id);
        }
        if (setSelectOption != null) {
            setSelectOption(option?.name);
        }
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
                            {option?.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
