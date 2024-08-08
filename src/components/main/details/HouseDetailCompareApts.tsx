import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailCompareAptsStyle } from "../style/main-item.style";
import { ReactComponent as SelectLocation } from "../../../assets/icon/select-location.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Select from "../../common/Select";
import LocationApi from "../../../core/apis/location/Location.api";

const HouseDetailCompareApts: React.FC = () => {
    const chartData = [
        {name: '2006', number: 0},
        {name: '2008', number: 0},
        {name: '2011', number: 0},
        {name: '2013', number: 0},
        {name: '2015', number: 0},
        {name: '2018', number: 0},
        {name: '2021', number: 0},
        {name: '2024', number: 0},
    ];

    const [rangeValue, setRangeValue] = useState(0);

    // Function to format the date based on the range value
    const formatDate = (value: any) => {
        const startYear = 1999;
        const startMonth = 12;

        const yearsPassed = Math.floor(value / 12);
        const monthsPassed = value % 12;

        let currentYear = startYear + yearsPassed;
        let currentMonth = startMonth + monthsPassed;

        if (currentMonth > 12) {
        currentYear += Math.floor((currentMonth - 1) / 12);
        currentMonth = currentMonth % 12 || 12;
        }

        return `${currentYear}년 ${currentMonth}월`;
    };

    const handleRangeChange = (event: any) => {
        setRangeValue(event.target.value);
    };

    const getCurrentMonth = (): string => {
        const date = new Date();
        const month = date.getMonth() + 1; // getMonth() returns 0-based month, so add 1
        return month < 10 ? `0${month}` : `${month}`;
    };

    const [ locationList, setLocationList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ subLocationList, setSubLocationList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<number>(0);
    const [ selectSubLocation, setSelectSubLocation ] = useState<number>(0);

    const getLocation = async () => {
        const response = await LocationApi.getLocaitonList();
        console.log(response);
        setLocationList(response);
    }

    const getSubLocation = async () => {
        const response = await LocationApi.getSubLocationList(selectLocation);
        console.log(response);
        setSubLocationList(response);
    }

    useEffect(() => {
        getSubLocation();
    }, [selectLocation]);

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
    const [ dongList, setDongList ] = useState<{
        id: number,
        name: string
    }[]>([]); 
    const [ selectDong, setSelectDong ] = useState<number>(0); 
    const [ aptRentType, setAptRentType ] = useState<string>("");

    return (
        <HouseDetailCompareAptsStyle>
            <div className="header">
                <div className="top">
                    <h4>여러 아파트 비교</h4>
                </div>
            </div>
            <div className="select">
                <Select optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <Select optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                <Select optionName="읍/면/동" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="select">
                <Select optionName="아파트" optionList={aptList} setSelectItem={setSelectApt}  />
                <Select optionName="이름" optionList={nameList} setSelectItem={setSelectName} />
                <Select optionName="동" optionList={dongList} setSelectItem={setSelectDong} />
            </div>
            <div className="locations">
                <div className="select-location">
                    <SelectLocation className="icon" />
                    <p>반포자이 (32평)</p>
                </div>
                <div className="location-box">
                    <button type="button" className="add-location button-lg">대체지역 추가</button>
                    <button type="button" className="delete-location button-lg btn-outline">전체 삭제</button>
                </div>
            </div>
            <div className="radios">
                <input type="radio" className="radio" onClick={() => setAptRentType("TRADING")} /> 매매
                <input type="radio" className="radio" onClick={() => setAptRentType("JEONSE")} /> 전세
                <input type="radio" className="radio" onClick={() => setAptRentType("MONTHLY")} /> 월세
            </div>
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
                <h3>{formatDate(rangeValue)} ~ 2024년 {getCurrentMonth()}월</h3>
                <input
                    type="range"
                    className="range-date"
                    min="0"
                    max="292"
                    value={rangeValue}
                    onChange={handleRangeChange}
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