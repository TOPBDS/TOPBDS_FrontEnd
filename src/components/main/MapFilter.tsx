import AptApi from "../../core/apis/apt/Apt.api";
import "./style/main.css";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface MapFilterProps {
    lat: number,
    lng: number,
    setAptList: Dispatch<SetStateAction<{
        latitude: number,
        longitude: number
    }[]>>
}

const MapFilter: React.FC<MapFilterProps> = ({ lat, lng, setAptList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("필터");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const [aptRentType, setAptRentType] = useState(1);
    const onClickAptRentType = (type: number) => {
        setAptRentType(type);
    }

    const [aptType, setAptType] = useState(1);
    const onClickAptType = (type: number) => {
        setAptType(type);
    }

    const [parking, setParking] = useState(1);
    const onClickParking = (type: number) => {
        setParking(type);
    }

    const [frontDoor, setFrontDoor] = useState(0);
    const onClickFrontDoor = (type: number) => {
        setFrontDoor(type);
    }

    const [heating, setHeating] = useState(0);
    const onClickHeating = (type: number) => {
        setHeating(type);
    }

    const [sizeRangeValue, setSizeRangeValue] = useState(0);
    const handleSizeRangeChange = (event: any) => {
        setSizeRangeValue(event.target.value);
    };

    const [priceRangeValue, setPriceRangeValue] = useState(0);
    const handlePriceRangeChange = (event: any) => {
        setPriceRangeValue(event.target.value);
    };

    const [numberRangeValue, setNumberRangeValue] = useState(0);
    const handleNumberRangeChange = (event: any) => {
        setNumberRangeValue(event.target.value);
    };

    const [yearRangeValue, setYearRangeValue] = useState(0);
    const handleYearRangeChange = (event: any) => {
        setYearRangeValue(event.target.value);
    };

    const [floorAreaRatioRangeValue, setFloorAreaRatioRangeValue] = useState(0);
    const handleFloorAreaRatioChange = (event: any) => {
        setFloorAreaRatioRangeValue(event.target.value);
    };

    const [buildingToLandRatioRangeValue, setBuildingToLandRatioRangeValue] = useState(0);
    const handleBuildingToLandRatioChange = (event: any) => {
        setBuildingToLandRatioRangeValue(event.target.value);
    };
    
    const [jeonsePriceRatioRangeValue, setJeonsePriceRatioRangeValue] = useState(0);
    const handleJeonsePriceRatioRangeValue = (event: any) => {
        setJeonsePriceRatioRangeValue(event.target.value);
    };

    const [gapPriceRangeValue, setGapPriceRangeValue] = useState(0);
    const handleGapPriceRangeValue = (event: any) => {
        setGapPriceRangeValue(event.target.value);
    };

    const [rentalBusinessRatioRangeValue, setRentalBusinessRatioRangeValue] = useState(0);
    const handleRentalBusinessRatioRangeValue = (event: any) => {
        setRentalBusinessRatioRangeValue(event.target.value);
    };

    const [monthlyPriceRatioRangeValue, setMonthlyPriceRatioRangeValue] = useState(0);
    const handleMonthlyPriceRatioRangeValue = (event: any) => {
        setMonthlyPriceRatioRangeValue(event.target.value);
    };

    const getMapFilter = async () => {
        const response = await AptApi.getMapAptList(lat, lng, aptType, aptRentType, sizeRangeValue, priceRangeValue, );
        setAptList(response);
    }

    useEffect(() => {
        getMapFilter();
    }, [])

    return (
        <div className="side-map-fillter-select-box">
            <button type="button" className={`side-map-fillter-select-label`} onClick={toggleDropdown}>
                <p>{selectedOption}</p>
            </button>
            {isOpen && (
                <ul className="side-map-fillter-option-list">
                    <div className="apt-chip-filter">
                        <p>거래 유형</p>
                        <div className="chips">
                            <span className={aptRentType === 1 ? "active" : ""} onClick={() => onClickAptRentType(1)}>전체</span>
                            <span className={aptRentType === 2 ? "active" : ""} onClick={() => onClickAptRentType(2)}>매매</span>
                            <span className={aptRentType === 3 ? "active" : ""} onClick={() => onClickAptRentType(3)}>전월세</span>
                        </div>
                    </div>
                    <div className="apt-chip-filter">
                        <p>유형</p>
                        <div className="chips">
                            <span className={aptType === 1 ? "active" : ""} onClick={() => onClickAptType(1)}>전체</span>
                            <span className={aptType === 2 ? "active" : ""} onClick={() => onClickAptType(2)}>아파트</span>
                            <span className={aptType === 3 ? "active" : ""} onClick={() => onClickAptType(3)}>오피스텔</span>
                            <span className={aptType === 4 ? "active" : ""} onClick={() => onClickAptType(4)}>상가</span>
                            <span className={aptType === 5 ? "active" : ""} onClick={() => onClickAptType(5)}>건물</span>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>평형</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="10"
                                max="80"
                                value={sizeRangeValue}
                                onChange={handleSizeRangeChange}
                            />
                            <div className="range-labels">
                                <span>10평</span>
                                <span>80평</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>가격</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="2"
                                max="40"
                                value={priceRangeValue}
                                onChange={handlePriceRangeChange}
                            />
                            <div className="range-labels">
                                <span>2억</span>
                                <span>40억</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>세대수</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="100"
                                max="5000"
                                value={numberRangeValue}
                                onChange={handleNumberRangeChange}
                            />
                            <div className="range-labels">
                                <span>100세대</span>
                                <span>5000세대</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>입주년차</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="3"
                                max="25"
                                value={yearRangeValue}
                                onChange={handleYearRangeChange}
                            />
                            <div className="range-labels">
                                <span>2억</span>
                                <span>40억</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>용적률</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="100"
                                max="700"
                                value={floorAreaRatioRangeValue}
                                onChange={handleFloorAreaRatioChange}
                            />
                            <div className="range-labels">
                                <span>100%</span>
                                <span>700%</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>건폐율</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="10"
                                max="50"
                                value={buildingToLandRatioRangeValue}
                                onChange={handleBuildingToLandRatioChange}
                            />
                            <div className="range-labels">
                                <span>10%</span>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>전세가율</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="50"
                                max="300"
                                value={jeonsePriceRatioRangeValue}
                                onChange={handleJeonsePriceRatioRangeValue}
                            />
                            <div className="range-labels">
                                <span>50%</span>
                                <span>300%</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>갭가격</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="1"
                                max="30"
                                value={gapPriceRangeValue}
                                onChange={handleGapPriceRangeValue}
                            />
                            <div className="range-labels">
                                <span>1천</span>
                                <span>3억</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>임대사업율</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="10"
                                max="50"
                                value={rentalBusinessRatioRangeValue}
                                onChange={handleRentalBusinessRatioRangeValue}
                            />
                            <div className="range-labels">
                                <span>10%</span>
                                <span>50%</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>월세수익률</p>
                        <div className="range">
                            <input
                                type="range"
                                className="range-input"
                                min="3"
                                max="7"
                                value={monthlyPriceRatioRangeValue}
                                onChange={handleMonthlyPriceRatioRangeValue}
                            />
                            <div className="range-labels">
                                <span>3%</span>
                                <span>7%</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-chip-filter">
                        <p>주차공간</p>
                        <div className="chips">
                            <span className={parking === 1 ? "active" : ""} onClick={() => onClickParking(1)}>전체</span>
                            <span className={parking === 2 ? "active" : ""} onClick={() => onClickParking(2)}>1대이상</span>
                            <span className={parking === 3 ? "active" : ""} onClick={() => onClickParking(3)}>1.5대이상</span>
                        </div>
                    </div>
                    <div className="apt-chip-filter">
                        <p>현관구조</p>
                        <div className="chips">
                            <span className={frontDoor === 1 ? "active" : ""} onClick={() => onClickFrontDoor(1)}>계단식</span>
                            <span className={frontDoor === 2 ? "active" : ""} onClick={() => onClickFrontDoor(2)}>복도식</span>
                            <span className={frontDoor === 3 ? "active" : ""} onClick={() => onClickFrontDoor(3)}>복합식</span>
                        </div>
                    </div>
                    <div className="apt-chip-filter">
                        <p>난방방식</p>
                        <div className="chips">
                            <span className={heating === 1 ? "active" : ""} onClick={() => onClickHeating(1)}>지역난방</span>
                            <span className={heating === 2 ? "active" : ""} onClick={() => onClickHeating(2)}>개별난방</span>
                            <span className={heating === 3 ? "active" : ""} onClick={() => onClickHeating(3)}>중앙난방</span>
                        </div>
                    </div>
                </ul>
            )}
        </div>
    )
}

export default MapFilter;