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

const HouseDetailSupplyVolume: React.FC = () => {
    const [ supplyVolumeList, setSupplyVolumeList ] = useState<{
        location: string,
        name: string,
        date: string,
        total: number,
    }[]>([{
        location: "대구광역시 서구",
        name: "마포푸르지오 아파트",
        date: "2023년 10월",
        total: 1000
    }]);

    const [ chartData, setChartData ] = useState<{
        name: string,
        number: number
    }[]>(
        [
            {name: '1999/12', number: 1500},
            {name: '2000/1', number: 1200},
            {name: '2000/2', number: 300}
        ]
    );

    const [rangeValue, setRangeValue] = useState(0);

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
        // getSubLocation();
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

    const handleRangeChange = (event: any) => {
        setRangeValue(event.target.value);
    };

    const getCurrentMonth = (): string => {
        const date = new Date();
        const month = date.getMonth() + 1; // getMonth() returns 0-based month, so add 1
        return month < 10 ? `0${month}` : `${month}`;
    };

    useEffect(() => {
        getLocation();
        getSupplyVolumeList();
    }, []);

    const [ viewType, setViewType ] = useState<string>("");
    const [ seletLocationList, setSelectLocationList ] = useState<number[]>([]);
    const [ seletSubLocationList, setSelectSubLocationList ] = useState<number[]>([]);
 
    const getSupplyVolumeList = async () => {
        const response = await AptApi.getSupplyVolumeList(0, seletLocationList, seletSubLocationList, viewType, new Date());

        console.log(response);
        setSupplyVolumeList(response.data);
        setChartData(response.chartData);
    }

    const addlocation = () => {
        if (selectLocation) {
            setSelectLocationList((prevAptList) => [...prevAptList, selectLocation]);
            if (selectSubLocation) {
                setSelectSubLocationList((prevAptList) => [...prevAptList, selectSubLocation]);
            }
        } else {
            alert("도시를 먼저 선택해주세요.");
        }
    }

    const deleteLocation = () => {
        setSelectLocationList([]);
        setSelectSubLocationList([]);
    }

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
                <Select optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <Select optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="radios">
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setViewType("MONTHLY")} /> 월간</div>
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setViewType("QUARTER")} /> 분기</div>
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setViewType("YEARLY")} /> 년간</div>
            </div>
            <div className="locations">
            <div className="select-location">
                    <SelectLocation className="icon" />
                    <p>대구</p>
                </div>
                <div className="location-box">
                    <button type="button" className="add-location button-lg" onClick={addlocation}>대체지역 추가</button>
                    <button type="button" className="delete-location button-lg btn-outline" onClick={deleteLocation}>전체 삭제</button>
                </div>
            </div>
            <div className="chart-container">
                <span className="sub-comment">24년 ~ 28년 사이 입주하는 아파트는 진한 색입니다.</span>
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
                    <span>24년</span>
                </div>
            </div>
            <div className="small-maps">
                지도
            </div>
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
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume.location}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume.name}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume.date}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} className="table-cell">{supplyVolume.total}세대</TableCell>
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