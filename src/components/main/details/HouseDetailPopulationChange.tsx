import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailPopulationChangeStyle } from "../style/main-item.style";
import { ReactComponent as HouseSearchIcon } from "../../../assets/icon/search.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";

interface HouseDetailPopulationChangeProps {
    locationList: string[];
} 

const HouseDetailPopulationChange: React.FC<HouseDetailPopulationChangeProps> = ({
    locationList
}) => {
    const [ populationList, setPopulationList ] = useState<{
        location: string,
        pcDate: string,
        pcNumber: number
    }[]>([]);

    const [ chartData, setChartData ] = useState<{
        period: string,
        peopleNumber: number
    }[]>([]);

    const [ viewType, setViewType ] = useState<string>("monthly");
    
    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<number>(0);
    const [ selectSubLocation, setSelectSubLocation ] = useState<number>(0);
    
    const getSubLocation = async () => {
        const response = await LocationApi.getSubLocationList(selectLocation);
        setSubLocationList(response);
    }
    
    useEffect(() => {
        getPopulationChangeList();
    }, [viewType]);

    useEffect(() => {
        // getSubLocation();
    }, [selectLocation]);

    const getPopulationChangeList = async () => {
        const response = await AptApi.getPeopleChangeList(1, viewType);

        setPopulationList(response?.data?.data?.tableResponse);
        setChartData(response?.data?.data?.chartResponse)
    }

    return (
        <HouseDetailPopulationChangeStyle>
            <div className="header">
                <div className="top">
                    <h4>인구수 변화</h4>
                    <span>출처 : 통계청</span>
                </div>
                <span>전국 지역별 (시도, 시군구, 읍면동) 인구현황</span>
            </div>
            {/* <div className="search">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="지역명" />
                    <HouseSearchIcon className="search-icon"/>
                </div>
            </div> */}
            <div className="radios">
                <div className="radio-box"><input type="radio" name="view-type" className="radio" onChange={() => setViewType("monthly")} defaultChecked={viewType === "monthly"} /> 월간</div>
                <div className="radio-box"><input type="radio" name="view-type" className="radio" onChange={() => setViewType("quarterly")} defaultChecked={viewType === "quarterly"} /> 분기</div>
                <div className="radio-box"><input type="radio" name="view-type" className="radio" onChange={() => setViewType("yearly")} defaultChecked={viewType === "yearly"} /> 년간</div>
            </div>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="period" tickLine={true} padding={{ left: 20, right: 20 }} />
                        <YAxis tickLine={true} />
                        <Bar dataKey="peopleNumber" barSize={10} fill="#03C6CE" />
                    </BarChart>        
                </ResponsiveContainer>
            </div>
            <div className="tables">
                <TableContainer component={Paper} className="table-container">
                    <Table size="small" stickyHeader className="table">
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head"> 
                            <TableRow className="table-row">
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">지역</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">날짜</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">인구수</TableCell>
                                {/* <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">2024년 4월</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {populationList && populationList.map((population, index) => 
                                <TableRow key={index} className="table-row">
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.location}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.pcDate}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.pcNumber}명</TableCell>
                                    {/* <TableCell sx={{ textAlign: "center" }} className="table-cell">{population.pcNumber}명</TableCell> */}
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