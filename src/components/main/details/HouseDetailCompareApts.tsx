import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailCompareAptsStyle } from "../style/main-item.style";
import { ReactComponent as SelectLocation } from "../../../assets/icon/select-location.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Select from "../../common/Select";

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

    return (
        <HouseDetailCompareAptsStyle>
            <div className="header">
                <div className="top">
                    <h4>여러 아파트 비교</h4>
                </div>
            </div>
            <div className="select">
                <Select optionName="도시" optionList={["대구", "서울", "부산"]} />
                <Select optionName="시군구" optionList={["동구", "서구", "남구"]} />
                <Select optionName="읍/면/동" optionList={["안심1동", "안심2동", "안심3,4동"]} />
            </div>
            <div className="select">
                <Select optionName="아파트" optionList={["강남 반포자이", "롯데캐슬"]} />
                <Select optionName="이름" optionList={["이름", "이름", "이름"]} />
                <Select optionName="동" optionList={["5", "4", "3", "2", "1"]} />
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
                <input type="radio" className="radio" /> 매매
                <input type="radio" className="radio" /> 전세
                <input type="radio" className="radio" /> 월세
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