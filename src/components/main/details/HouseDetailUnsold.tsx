import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailUnsoldStyle } from "../style/main-item.style";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";
import { CustomSlider } from "../style/main.style";
import SelectString from "../../common/SelectString";

interface UnsoldData {
    id: number;
    sgg: string;
    year: string;
    unsoldCnt: number;
}

interface UnsoldChartData {
    year: string;
    unsoldCnt: number;
}

interface HouseDetailUnsoldProps {
    locationList: string[],
} 

const HouseDetailUnsold: React.FC<HouseDetailUnsoldProps> = ({
    locationList
}) => {
    const [ unsoldList, setUnsoldList ] = useState<UnsoldData[]>([]);
    const [ unsoldChartList, setUnsoldChartList ] = useState<UnsoldChartData[]>();
    
    const [yearRangeValue, setYearRangeValue] = useState([1999, 2024]);
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

    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<string>("");
    const [ selectSubLocation, setSelectSubLocation ] = useState<string>("");

    useEffect(() => {
        if (selectLocation) {
            getSubLocation();
        }
    }, [selectLocation]);

    useEffect(() => {
        getUnsoldList();
    }, [selectLocation, yearRangeValue]);

    const getSubLocation = async () => {
        const response = await LocationApi.getUnsoldSgg2(selectLocation);
        setSubLocationList(response);
    }

    const getUnsoldList = async () => {
        const response = await AptApi.getUnsoldAptList(1, selectLocation, yearRangeValue[0], yearRangeValue[1]);

        setUnsoldList(response?.data?.data?.data);
        setUnsoldChartList(response?.data?.data?.chartData);
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
                <SelectString optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <SelectString optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={unsoldChartList}>
                        <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                        <YAxis tickLine={true} />
                        <Bar dataKey="unsoldCnt" barSize={10} fill="#03C6CE" />
                    </BarChart>        
                </ResponsiveContainer>
            </div>
            <div className="range">
                <h3>{yearRangeValue[0]}년 ~ {yearRangeValue[1]}년</h3>
                <CustomSlider
                    min={1999}
                    max={2024}
                    value={yearRangeValue}
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
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{row?.sgg}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{row?.year}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{row?.unsoldCnt}</TableCell>
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