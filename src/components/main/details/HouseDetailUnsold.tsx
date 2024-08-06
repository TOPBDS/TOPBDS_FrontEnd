import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailUnsoldStyle } from "../style/main-item.style";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";

const HouseDetailUnsold: React.FC = () => {
    const [ unsoldList, setUnsoldList ] = useState<{
        location: string,
        date: string,
        unsold: number,
    }[]>([{
        location: "대구",
        date: "2023.03",
        unsold: 1123
    }]);

    const chartData = [
        {name: '1999/12', number: 1500},
        {name: '2000/1', number: 1200},
        {name: '2000/2', number: 300},
        {name: '2000/3', number: 3000},
        {name: '2000/4', number: 2030},
        {name: '2000/5', number: 2500},
        {name: '2000/6', number: 1300},
        {name: '2000/7', number: 1200},
        {name: '2000/8', number: 3300},
        {name: '2000/9', number: 4400},
        {name: '2000/10', number: 1500},
        {name: '2000/11', number: 2600},
        {name: '2000/12', number: 4700},
        {name: '2001/1', number: 2030},
        {name: '2001/2', number: 1900},
        {name: '2001/3', number: 1300},
        {name: '2001/4', number: 1100},
        {name: '2001/5', number: 1300},
        {name: '2001/6', number: 1300},
        {name: '2001/7', number: 1400},
        {name: '2001/8', number: 1100},
        {name: '2001/9', number: 200},
        {name: '2001/10', number: 700},
        {name: '2001/11', number: 1400},
        {name: '2001/12', number: 900},
        {name: '2002/1', number: 1200},
        {name: '2002/2', number: 100},
        {name: '2002/3', number: 2200},
        {name: '2002/4', number: 3300},
        {name: '2002/5', number: 1400},
        {name: '2002/6', number: 1500},
        {name: '2002/7', number: 2600},
        {name: '2002/8', number: 700},
        {name: '2002/9', number: 800},
        {name: '2002/10', number: 1900},
        {name: '2002/11', number: 1300},
        {name: '2002/12', number: 3200},
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

    useEffect(() => {
        getUnsoldList();
    }, []);

    const getUnsoldList = async () => {
        const response = await AptApi.getUnsoldAptList(0, 0, 0, new Date(), new Date());

        console.log(response);
    }

    return (
        <HouseDetailUnsoldStyle>
            <div className="header">
                <div className="top">
                    <h4>미분양</h4>
                    <span>출처 : 국토부</span>
                </div>
                <span>분양을 했으나 분양되지 않은 주택 수를 시기별로 확인해보세요.</span>
            </div>
            <div className="select">
                <Select optionName="도시" optionList={["대구", "서울", "부산"]} />
                <Select optionName="시군구" optionList={["동구", "서구", "남구"]} />
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
            <div className="tables">
                <TableContainer component={Paper} className="table-container">
                    <Table size="small" stickyHeader className="table">
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head"> 
                            <TableRow className="table-row">
                                <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">위치</TableCell>
                                <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">해당년월</TableCell>
                                <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">미분양 수(호)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {unsoldList && unsoldList.map((row, index) => 
                                <TableRow key={index} className="table-row">
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{row.location}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{row.date}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{row.unsold}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </HouseDetailUnsoldStyle>
    )
}

export default HouseDetailUnsold;