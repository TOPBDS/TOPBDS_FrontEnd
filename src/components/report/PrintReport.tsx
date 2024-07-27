import "./style/printReport.css";
import { PrintReportContainer } from "./style/printReport.style";
import { ReactComponent as SLOGO } from "../../assets/icon/s-logo.svg";
import { ReactComponent as DropDownIcon } from "../../assets/icon/drop-down.svg";
import { useState } from "react";

const PrintReport = () => {
    const [aptIsOpen, setAptIsOpen] = useState(false);
    const [squareIsOpen, setSquareIsOpen] = useState(false);
    const [aptSelectedOption, setAptSelectedOption] = useState("아파트");
    const [squareSelectedOption, setSquareSelectedOption] = useState("아파트");
    const [aptOptionList, setAptOptionList] = useState<[]>([]);
    const [squareOptionList, setSquareOptionList] = useState<[]>([]);
    const [rangeValue, setRangeValue] = useState<number>();

    const toggleAptDropdown = () => {
        setAptIsOpen(!aptIsOpen);
    };

    const toggleSquareDropdown = () => {
        setSquareIsOpen(!squareIsOpen);
    };

    const handleAptOptionClick = (option: any) => {
        setAptSelectedOption(option);
        setAptIsOpen(false);
    };

    const handleSquareOptionClick = (option: any) => {
        setSquareSelectedOption(option);
        setSquareIsOpen(false);
    };

    const handleRangeChange = (event: any) => {
        setRangeValue(event.target.value);
    };

    return (
        <PrintReportContainer>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="report-title">아파트 데이터 분석 보고서</h1>
                    <SLOGO className="report-logo" />
                </div>
                <div className="report-filter">
                    <p>검색 조건</p>
                    <div className="select-box">
                        <button type="button" className="select-label" onClick={toggleAptDropdown}>
                            <p>{aptSelectedOption}</p>
                            <DropDownIcon className='icon' />
                        </button>
                        {aptIsOpen && (
                            <ul className="option-list">
                                {aptOptionList && aptOptionList.map((option: any, index: number) => (
                                    <li key={index} className="select-option" onClick={() => handleAptOptionClick(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="select-box">
                        <button type="button" className="select-label" onClick={toggleSquareDropdown}>
                            <p>{squareSelectedOption}</p>
                            <DropDownIcon className='icon' />
                        </button>
                        {squareIsOpen && (
                            <ul className="option-list">
                                {squareOptionList && squareOptionList.map((option: any, index: number) => (
                                    <li key={index} className="select-option" onClick={() => handleSquareOptionClick(option)}>
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div> 
                    <div className="report-year">
                        <p>연도</p>
                        <input
                            type="range"
                            className="range-date"
                            min="2012"
                            max="2024"
                            value={rangeValue}
                            onChange={handleRangeChange}
                        />
                    </div>
                </div>
                <div className="report-info">
                        
                </div>
            </div>
        </PrintReportContainer>
    )
}

export default PrintReport;