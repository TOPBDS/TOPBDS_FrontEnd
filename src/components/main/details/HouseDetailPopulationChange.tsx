import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailPopulationChangeStyle } from "../style/main-item.style";
import { ReactComponent as HouseSearchIcon } from "../../../assets/icon/search.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const HouseDetailPopulationChange: React.FC = () => {
    const [ populationList, setPopulationList ] = useState<{
        location: string,
        two: number,
        one: number,
        now: number,
    }[]>([{
        location: "대구",
        two: 543212,
        one: 543212,
        now: 543212
    }]);

    const chartData = [
        {name: '2013', number: 55},
        {name: '2015', number: 56.3},
        {name: '2017', number: 56.1},
        {name: '2019', number: 56.5},
        {name: '2021', number: 55.7},
        {name: '2023', number: 56.2},
    ];

    return (
        <HouseDetailPopulationChangeStyle>
            <div className="header">
                <div className="top">
                    <h4>인구수 변화</h4>
                    <span>출처 : 통계청</span>
                </div>
                <span>전국 지역별 (시도, 시군구, 읍면동) 인구현황</span>
            </div>
            <div className="search">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="지역명" />
                    <HouseSearchIcon className="search-icon"/>
                </div>
            </div>
            <div className="radios">
                <div className="radio-box"><input type="radio" className="radio" /> 월간</div>
                <div className="radio-box"><input type="radio" className="radio" /> 분기</div>
                <div className="radio-box"><input type="radio" className="radio" /> 년간</div>
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
            <div className="tables">
                <TableContainer component={Paper} className="table-container">
                    <Table size="small" stickyHeader className="table">
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head"> 
                            <TableRow className="table-row">
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">지역</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">2년전 2022.04</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">1년전 2023.04</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">2024년 4월</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {populationList && populationList.map((population) => 
                                <TableRow className="table-row">
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.location}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.two}명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.one}명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.now}명</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </HouseDetailPopulationChangeStyle>
    )
}

export default HouseDetailPopulationChange;