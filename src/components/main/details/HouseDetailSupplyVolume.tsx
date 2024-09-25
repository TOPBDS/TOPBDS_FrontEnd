import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailSupplyVolumeStyle } from "../style/main-item.style";
import { ReactComponent as HouseSearchIcon } from "../../../assets/icon/search.svg";
import { ReactComponent as SelectLocation } from "../../../assets/icon/select-location.svg";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";
import { CustomSlider } from "../style/main.style";
import SelectString from "../../common/SelectString";

interface HouseDetailSupplyVolumeProps {
    locationList: string[];
}

interface AptSupplyVolumeDTO {
    aptSvId: number;
    aptName: string;
    aptNumber: number;
    moveDate: string;
    locationName: string;
    subLocationName: string;
}

interface AptSupplyVolumeChartDTO {
    year: string;
    averageSupply: number;
}

const HouseDetailSupplyVolume: React.FC<HouseDetailSupplyVolumeProps> = ({
    locationList
}) => {
    const [ supplyVolumeList, setSupplyVolumeList ] = useState<AptSupplyVolumeDTO[]>([]);
    const [ chartData, setChartData ] = useState<AptSupplyVolumeChartDTO[]>([]);

    const [rangeValue, setRangeValue] = useState(0);

    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<string>("");
    const [ selectSubLocation, setSelectSubLocation ] = useState<string>("");

    const getSubLocation = async () => {
        const response = await LocationApi.getSggUpComSupply2(selectLocation);
        setSubLocationList(response);
    }

    useEffect(() => {
        if (selectLocation) {
            getSubLocation();
        }
    }, [selectLocation]);

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

    const getCurrentMonth = (): string => {
        const date = new Date();
        const month = date.getMonth() + 1; // getMonth() returns 0-based month, so add 1
        return month < 10 ? `0${month}` : `${month}`;
    };

    const [ viewType, setViewType ] = useState<string>("");
    const [ selectLocationList, setSelectLocationList ] = useState<string[]>([]);

    useEffect(() => {
        getSupplyVolumeList();
    }, [selectLocationList, viewType]);
 
    const getSupplyVolumeList = async () => {
        const response = await AptApi.getSupplyVolumeList(1, selectLocationList, viewType);

        setSupplyVolumeList(response?.data?.data?.data);
        setChartData(response?.data?.data?.chartData);
    }

    const addLocation = () => {
        let newLocation = "";

        if (selectLocation) {
            newLocation += selectLocation;

            if (selectSubLocation) {
                newLocation += " " + selectSubLocation;

                setSelectLocationList((prev) => {
                    if (prev.includes(newLocation)) {
                        alert("이미 선택된 지역입니다.");
                        return prev;
                    } else {
                        return [...prev, newLocation];
                    }
                });
            } else {
                alert("시군구를 선택해주세요.");
            }
        } else {
            alert("도시를 선택해주세요.");
        }
    }

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

    return (
        <HouseDetailSupplyVolumeStyle>
            <div className="header">
                <div className="top">
                    <h4>공급 물량</h4>
                    <span>출처 : 분양물량조사</span>
                </div>
            </div>
            {/* <div className="search">
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="지역명" />
                    <HouseSearchIcon className="search-icon"/>
                </div>
            </div> */}
            <div className="select">
                <SelectString optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <SelectString optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="radios">
                <div className="radio-box"><input type="radio" name="view-type" className="radio" onClick={() => setViewType("monthly")} /> 월간</div>
                <div className="radio-box"><input type="radio" name="view-type" className="radio" onClick={() => setViewType("quarterly")} /> 분기</div>
                <div className="radio-box"><input type="radio" name="view-type" className="radio" onClick={() => setViewType("yearly")} /> 년간</div>
            </div>
            <div className="locations">
                {
                    selectLocationList && selectLocationList.map((select: string) => (
                        <div className="select-location">
                            <SelectLocation className="icon" />
                            <p>{select}</p> 
                        </div>
                    ))
                }
                <div className="location-box">
                    <button type="button" className="add-location button-lg" onClick={addLocation}>대체지역 추가</button>
                    <button type="button" className="delete-location button-lg btn-outline" onClick={() => setSelectLocationList([])}>전체 삭제</button>
                </div>
            </div>
            <div className="chart-container">
                {/* <span className="sub-comment">24년 ~ 28년 사이 입주하는 아파트는 진한 색입니다.</span> */}
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                        <YAxis tickLine={true} />
                        <Bar dataKey="averageSupply" barSize={10} fill="#03C6CE" />
                    </BarChart>        
                </ResponsiveContainer>
            </div>
            <div className="range">
                <h3>{formatDate(rangeValue)} ~ 2024년 {getCurrentMonth()}월</h3>
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
                    <span>24년</span>
                </div>
            </div>
            {/* <div className="small-maps">
                지도
            </div> */}
            <div className="tables">
                <TableContainer component={Paper} className="table-container">
                    <Table size="small" stickyHeader className="table">
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head"> 
                            <TableRow className="table-row">
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">위치</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">단지명</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">입주년월</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">총세대</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {supplyVolumeList && supplyVolumeList.map((supplyVolume, index) => 
                                <TableRow key={index} className="table-row">
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume?.locationName}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume?.aptName}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume?.moveDate}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume?.aptNumber}세대</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </HouseDetailSupplyVolumeStyle>
    )
}

export default HouseDetailSupplyVolume;