import { Slider } from "@mui/material";
import AptApi from "../../core/apis/apt/Apt.api";
import "./style/main.css";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomSlider } from "./style/main.style";

interface MapFilterProps {
    lat: number,
    lng: number,
    setAptList: Dispatch<SetStateAction<{
        aptId: number,
        location: string,
        subLocation: string,
        aptName: string,
        aptExplain: string,
        aptType: string,
        aptRentType: string,
        aptPrice: string,
        aptLike: number,
        aptImage: string,
        aptAddress: string,
        aptLatitude: number,
        aptLongitude: number,
        squareFootage: string,
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

    const [aptRentType, setAptRentType] = useState("ALL");
    const onClickAptRentType = (type: string) => {
        setAptRentType(type);
    }

    const [aptType, setAptType] = useState("ALL");
    const onClickAptType = (type: string) => {
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

    const [sizeRangeValue, setSizeRangeValue] = useState([10, 80]);
    const handleSizeChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setSizeRangeValue([Math.min(newValue[0], sizeRangeValue[1] - 10), sizeRangeValue[1]]);
        } else {
            setSizeRangeValue([sizeRangeValue[0], Math.max(newValue[1], sizeRangeValue[0] + 10)]);
        }
    };

    const [priceRangeValue, setPriceRangeValue] = useState([2, 40]);
    const handlePriceChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setPriceRangeValue([Math.min(newValue[0], priceRangeValue[1] - 10), priceRangeValue[1]]);
        } else {
            setPriceRangeValue([priceRangeValue[0], Math.max(newValue[1], priceRangeValue[0] + 10)]);
        }
    };

    const [numberRangeValue, setNumberRangeValue] = useState([100, 5000]);
    const handleNumberChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setNumberRangeValue([Math.min(newValue[0], numberRangeValue[1] - 10), numberRangeValue[1]]);
        } else {
            setNumberRangeValue([numberRangeValue[0], Math.max(newValue[1], numberRangeValue[0] + 10)]);
        }
    };

    const [yearRangeValue, setYearRangeValue] = useState([3, 25]);
    const handleYearChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setYearRangeValue([Math.min(newValue[0], yearRangeValue[1] - 10), yearRangeValue[1]]);
        } else {
            setYearRangeValue([yearRangeValue[0], Math.max(newValue[1], yearRangeValue[0] + 10)]);
        }
    };

    const [floorAreaRatioRangeValue, setFloorAreaRatioRangeValue] = useState([100, 700]);
    const handleFloorAreaRatioChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setFloorAreaRatioRangeValue([Math.min(newValue[0], floorAreaRatioRangeValue[1] - 10), floorAreaRatioRangeValue[1]]);
        } else {
            setFloorAreaRatioRangeValue([floorAreaRatioRangeValue[0], Math.max(newValue[1], floorAreaRatioRangeValue[0] + 10)]);
        }
    };

    const [buildingToLandRatioRangeValue, setBuildingToLandRatioRangeValue] = useState([10, 50]);
    const handleBuildingToLandRatioChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setBuildingToLandRatioRangeValue([Math.min(newValue[0], buildingToLandRatioRangeValue[1] - 10), buildingToLandRatioRangeValue[1]]);
        } else {
            setBuildingToLandRatioRangeValue([buildingToLandRatioRangeValue[0], Math.max(newValue[1], buildingToLandRatioRangeValue[0] + 10)]);
        }
    };
    
    const [jeonsePriceRatioRangeValue, setJeonsePriceRatioRangeValue] = useState([50, 300]);
    const handleJeonsePriceRatioChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setJeonsePriceRatioRangeValue([Math.min(newValue[0], jeonsePriceRatioRangeValue[1] - 10), jeonsePriceRatioRangeValue[1]]);
        } else {
            setJeonsePriceRatioRangeValue([jeonsePriceRatioRangeValue[0], Math.max(newValue[1], jeonsePriceRatioRangeValue[0] + 10)]);
        }
    };

    const [gapPriceRangeValue, setGapPriceRangeValue] = useState([1000, 30000]);
    const handleGapPriceChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setGapPriceRangeValue([Math.min(newValue[0], gapPriceRangeValue[1] - 10), gapPriceRangeValue[1]]);
        } else {
            setGapPriceRangeValue([gapPriceRangeValue[0], Math.max(newValue[1], gapPriceRangeValue[0] + 10)]);
        }
    };

    const [rentalBusinessRatioRangeValue, setRentalBusinessRatioRangeValue] = useState([10, 50]);
    const handleRentalBusinessRatioChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setRentalBusinessRatioRangeValue([Math.min(newValue[0], rentalBusinessRatioRangeValue[1] - 10), rentalBusinessRatioRangeValue[1]]);
        } else {
            setRentalBusinessRatioRangeValue([rentalBusinessRatioRangeValue[0], Math.max(newValue[1], rentalBusinessRatioRangeValue[0] + 10)]);
        }
    };

    const [monthlyPriceRatioRangeValue, setMonthlyPriceRatioRangeValue] = useState([3, 7]);
    const handleMonthlyPriceRatioChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setMonthlyPriceRatioRangeValue([Math.min(newValue[0], monthlyPriceRatioRangeValue[1] - 10), monthlyPriceRatioRangeValue[1]]);
        } else {
            setMonthlyPriceRatioRangeValue([monthlyPriceRatioRangeValue[0], Math.max(newValue[1], monthlyPriceRatioRangeValue[0] + 10)]);
        }
    };

    const getMapFilter = async () => {
        const response = await AptApi.getMapAptList(
            lat, 
            lng, 
            aptType, 
            aptRentType, 
            sizeRangeValue[0],
            sizeRangeValue[1],
            priceRangeValue[0],
            priceRangeValue[1],
            floorAreaRatioRangeValue[0],
            floorAreaRatioRangeValue[1], 
            buildingToLandRatioRangeValue[0],
            buildingToLandRatioRangeValue[1],
            jeonsePriceRatioRangeValue[0],
            jeonsePriceRatioRangeValue[1],
            gapPriceRangeValue[0],
            gapPriceRangeValue[1],
            rentalBusinessRatioRangeValue[0],
            rentalBusinessRatioRangeValue[1],
            monthlyPriceRatioRangeValue[0],
            monthlyPriceRatioRangeValue[1]
        );
        setAptList(response);
    }

    useEffect(() => {
        // getMapFilter();
    }, [])

    return (
        <div className="side-map-fillter-select-box">
            <button type="button" className={`side-map-fillter-select-label`} onClick={toggleDropdown}>
                <p>{selectedOption}</p>
            </button>
            {isOpen && (
                <div className="side-map-fillter-option-list">
                    <div className="apt-chip-filter">
                        <p>거래 유형</p>
                        <div className="chips">
                            <span className={aptRentType === "ALL" ? "active" : ""} onClick={() => onClickAptRentType("ALL")}>전체</span>
                            <span className={aptRentType === "TRADING" ? "active" : ""} onClick={() => onClickAptRentType("TRADING")}>매매</span>
                            <span className={aptRentType === "JEONSE" ? "active" : ""} onClick={() => onClickAptRentType("JEONSE")}>전월세</span>
                        </div>
                    </div>
                    <div className="apt-chip-filter">
                        <p>유형</p>
                        <div className="chips">
                            <span className={aptType === "ALL" ? "active" : ""} onClick={() => onClickAptType("ALL")}>전체</span>
                            <span className={aptType === "APARTMENT" ? "active" : ""} onClick={() => onClickAptType("APARTMENT")}>아파트</span>
                            <span className={aptType === "EFFICIENCY_APARTMENT" ? "active" : ""} onClick={() => onClickAptType("EFFICIENCY_APARTMENT")}>오피스텔</span>
                            <span className={aptType === "SHOPPING_MALL" ? "active" : ""} onClick={() => onClickAptType("SHOPPING_MALL")}>상가</span>
                            <span className={aptType === "BUILDING" ? "active" : ""} onClick={() => onClickAptType("BUILDING")}>건물</span>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>평형</p>
                        <div className="range">
                            <CustomSlider
                                min={10}
                                max={80}
                                value={sizeRangeValue}
                                onChange={handleSizeChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={2}
                                max={40}
                                value={priceRangeValue}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={100}
                                max={5000}
                                value={numberRangeValue}
                                onChange={handleNumberChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={3}
                                max={25}
                                value={yearRangeValue}
                                onChange={handleYearChange}
                                valueLabelDisplay="auto"
                                disableSwap
                            />
                            <div className="range-labels">
                                <span>3년</span>
                                <span>25년</span>
                            </div>
                        </div>
                    </div>
                    <div className="apt-range-filter">
                        <p>용적률</p>
                        <div className="range">
                            <CustomSlider
                                min={100}
                                max={700}
                                value={floorAreaRatioRangeValue}
                                onChange={handleFloorAreaRatioChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={10}
                                max={50}
                                value={buildingToLandRatioRangeValue}
                                onChange={handleBuildingToLandRatioChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={50}
                                max={300}
                                value={jeonsePriceRatioRangeValue}
                                onChange={handleJeonsePriceRatioChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={1000}
                                max={30000}
                                value={gapPriceRangeValue}
                                onChange={handleGapPriceChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={10}
                                max={50}
                                value={rentalBusinessRatioRangeValue}
                                onChange={handleRentalBusinessRatioChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                            <CustomSlider
                                min={3}
                                max={7}
                                value={monthlyPriceRatioRangeValue}
                                onChange={handleMonthlyPriceRatioChange}
                                valueLabelDisplay="auto"
                                disableSwap
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
                </div>
            )}
        </div>
    )
}

export default MapFilter;