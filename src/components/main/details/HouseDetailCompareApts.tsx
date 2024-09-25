import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailCompareAptsStyle } from "../style/main-item.style";
import { ReactComponent as SelectLocation } from "../../../assets/icon/select-location.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import LocationApi from "../../../core/apis/location/Location.api";
import SelectString from "../../common/SelectString";
import AptApi from "../../../core/apis/apt/Apt.api";
import { CustomSlider } from "../style/main.style";

interface HouseDetailCompareAptsProps {
    locationList: string[];
}

interface ChartDTO {
    year: string;
    averagePrice: number;
}

const HouseDetailCompareApts: React.FC<HouseDetailCompareAptsProps> = ({
    locationList
}) => {
    const [ chartData, setChartData] = useState<ChartDTO[]>([]);

    const [rangeValue, setRangeValue] = useState(0);

    const handleRangeChange = (event: any) => {
        setRangeValue(event.target.value);
    };

    const getCurrentMonth = (): string => {
        const date = new Date();
        const month = date.getMonth() + 1; // getMonth() returns 0-based month, so add 1
        return month < 10 ? `0${month}` : `${month}`;
    };

    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ dongList, setDongList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<string>("");
    const [ selectSubLocation, setSelectSubLocation ] = useState<string>("");
    const [ selectDong, setSelectDong ] = useState<string>(""); 
    const [ selectLocationList, setSelectLocationList ] = useState<string[]>([]);

    const getSubLocation = async () => {
        const response = await LocationApi.getSggReal2(selectLocation);
        setSubLocationList(response);
    }

    const getDong = async () => {
        const response = await LocationApi.getDongReal(selectLocation + " " + selectSubLocation);
        setDongList(response);
    }

    useEffect(() => {
        if (selectLocation) {
            getSubLocation();
            if (selectSubLocation) {
                getDong();
            }
        }
    }, [selectLocation, selectSubLocation]);

    const [yearRangeValue, setYearRangeValue] = useState(["1999-12-01", "2024-12-01"]);
    
    useEffect(() => {
        getAptCompare();
    }, [selectLocationList, yearRangeValue]);

    const getAptCompare = async () => {
        const response = await AptApi.getCompareList(1, selectLocationList, yearRangeValue[0], yearRangeValue[1]);

        setChartData(response?.data?.data?.data?.yearlyPrices);
    }

    const [ aptList, setAptList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ selectApt, setSelectApt ] = useState<number>(0); 
    const [ nameList, setNameList ] = useState<{
        id: number,
        name: string
    }[]>([]); 
    const [ selectName, setSelectName ] = useState<number>(0); 
    const [ aptRentType, setAptRentType ] = useState<string>("");


    const handleYearChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
    
        const getFormattedDate = (value: number) => {
            // 슬라이더 값인 연도를 받아서 12월로 고정한 yyyy-mm-dd 형식으로 반환
            const year = value;
            const month = "12"; // 12월 고정
            return `${year}-${month}-01`; // yyyy-mm-dd 형식으로 반환
        };
    
        if (activeThumb === 0) {
            // 슬라이더의 첫 번째 thumb 변경
            const startDate = getFormattedDate(newValue[0]);
            setYearRangeValue([startDate, yearRangeValue[1]]);
        } else {
            // 슬라이더의 두 번째 thumb 변경
            const endDate = getFormattedDate(newValue[1]);
            setYearRangeValue([yearRangeValue[0], endDate]);
        }
    };
    

    // 년월일 형식으로 변환하는 함수
    const formatDate = (value: string) => {
        const [year, month] = value.split("-");
        return `${year}년 ${month}월`;
    };

    const addLocation = () => {
        let newLocation = "";

        if (selectLocation) {
            newLocation += selectLocation;

            if (selectSubLocation) {
                newLocation += " " + selectSubLocation;

                if (selectDong) {
                    newLocation += " " + selectDong;
                    setSelectLocationList((prev) => {
                        if (prev.includes(newLocation)) {
                            alert("이미 선택된 지역입니다.");
                            return prev;
                        } else {
                            return [...prev, newLocation];
                        }
                    });
                } else {
                    alert("동을 선택해주세요.");
                }
            } else {
                alert("시군구를 선택해주세요.");
            }
        } else {
            alert("도시를 선택해주세요.");
        }
    }

    return (
        <HouseDetailCompareAptsStyle>
            <div className="header">
                <div className="top">
                    <h4>여러 아파트 비교</h4>
                </div>
            </div>
            <div className="select">
                <SelectString optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <SelectString optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                <SelectString optionName="읍/면/동" optionList={dongList} setSelectItem={setSelectDong} />
            </div>
            {/* <div className="select">
                <Select optionName="아파트" optionList={aptList} setSelectItem={setSelectApt} setSelectOption={null}  />
                <Select optionName="이름" optionList={nameList} setSelectItem={setSelectName} setSelectOption={null} />
                <Select optionName="동" optionList={dongList} setSelectItem={setSelectDong} setSelectOption={null} />
            </div> */}
            <div className="locations">
                {
                    selectLocationList && selectLocationList.map((selectLocation) => (
                        <div className="select-location">
                            <SelectLocation className="icon" />
                            <p>{selectLocation}</p>
                        </div>
                    ))
                }
                {/* <div className="select-location">
                    <SelectLocation className="icon" />
                    <p>반포자이 (32평)</p>
                </div> */}
                <div className="location-box">
                    <button type="button" className="add-location button-lg" onClick={() => addLocation()}>대체지역 추가</button>
                    <button type="button" className="delete-location button-lg btn-outline" onClick={() => setSelectLocationList([])}>전체 삭제</button>
                </div>
            </div>
            {/* <div className="radios">
                <input type="radio" name="apt-rent-type" className="radio" onClick={() => setAptRentType("TRADING")} /> 매매
                <input type="radio" name="apt-rent-type" className="radio" onClick={() => setAptRentType("JEONSE")} /> 전세
                <input type="radio" name="apt-rent-type" className="radio" onClick={() => setAptRentType("MONTHLY")} /> 월세
            </div> */}
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                        <YAxis tickLine={true} />
                        <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                    </BarChart>        
                </ResponsiveContainer>
            </div>
            <div className="range">
                <h3>{formatDate(yearRangeValue[0])} ~ {formatDate(yearRangeValue[1])}</h3>
                <CustomSlider
                    min={1999}
                    max={2024}
                    value={[parseInt(yearRangeValue[0].split('-')[0]), parseInt(yearRangeValue[1].split('-')[0])]}
                    onChange={handleYearChange}
                    valueLabelDisplay="auto"
                    disableSwap
                />
                <div className="range-labels">
                    <span>99년</span>
                    <span>06년</span>
                    <span>12년</span>
                    <span>18년</span>
                    <span>23년</span>
                </div>
            </div>
        </HouseDetailCompareAptsStyle>
    )
}

export default HouseDetailCompareApts;