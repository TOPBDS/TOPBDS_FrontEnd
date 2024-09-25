import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRecentlyDownFallAptStyle } from "../style/main-item.style";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";
import SelectString from "../../common/SelectString";

interface DeclineAptDTO {
    aptDid: number;
    location: string;
    subLocation: string;
    deAptName: string;
    deAptArea: number;
    deAptSquareFootage: number;
    deAptContractDate: string;
    deAptContractPrice: number;
    deAptFloor: number;
    deAptRentType: string;
}

interface HouseDetailRecentlyDownFallAptProps {
    locationList: string[];
}

const HouseDetailRecentlyDownFallApt: React.FC<HouseDetailRecentlyDownFallAptProps> = ({
    locationList
}) => {
    const [ recentlyDownFailAptList, setRecentlyDownFailAptList ] = useState<DeclineAptDTO[]>([]);

    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ dongList, setDongList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<string>("");
    const [ selectSubLocation, setSelectSubLocation ] = useState<string>("");
    const [ selectDong, setSelectDong ] = useState<string>("");

    const [ houseHoldsNumberList, setHouseHoldsNumberList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ houseHoldsNumber, setHouseHoldsNumber ] = useState<number>(0);
    const [ pastTopPriceList, setPastTopPriceList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ pastTopPrice, setPastTopPrice ] = useState<number>(0);
    const [ reviewList, setReviewList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ review, setReview ] = useState<number>(0);
    const [ recentlyTransactionList, setRecentlyTransactionList ] = useState<{
        id: number,
        name: string
    }[]>([
        {
            id: 7,
            name: "최근 1주일 거래"
        },
        {
            id: 14,
            name: "최근 2주일 거래"
        },
        {
            id: 31,
            name: "최근 1달 거래"
        },
        {
            id: 365,
            name: "최근 1년 거래"
        }
    ]);
    const [ recentlyTransaction, setRecentlyTransaction ] = useState<number>(0);
    const [ calculatedDate, setCalculatedDate ] = useState<Date>(new Date());
    const [ aptRentType, setAptRentType ] = useState<string>("");

    useEffect(() => {
        getRecentlyDownFailAptList();
    }, [selectLocation, selectSubLocation, selectDong, recentlyTransaction]);

    useEffect(() => {
        if (selectLocation) {
            getSubLocation();
            if (selectSubLocation) {
                getDong();
            }
        }
    }, [selectLocation, selectSubLocation]);

    useEffect(() => {
        calculateDate(recentlyTransaction);
    }, [recentlyTransaction]);

    const calculateDate = (daysAgo: number) => {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - daysAgo);

        setCalculatedDate(pastDate);
    };

    const getSubLocation = async () => {
        const response = await LocationApi.getSggReal2(selectLocation);
        setSubLocationList(response);
    }

    const getDong = async () => {
        const response = await LocationApi.getDongReal(selectLocation + " " + selectSubLocation);
        setDongList(response);
    }

    function formatDateToYMD(date: Date): string {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2 digits
        const day = String(date.getDate()).padStart(2, '0'); // Ensure 2 digits
    
        return `${year}-${month}-${day}`;
    }

    const getRecentlyDownFailAptList = async () => {
        const response = await AptApi.getDeclineAptList(1, selectLocation + " " + selectSubLocation, selectDong, formatDateToYMD(calculatedDate), formatDateToYMD(new Date()));

        setRecentlyDownFailAptList(response?.data?.data?.data);
    }

    return (
        <HouseDetailRecentlyDownFallAptStyle>
            <div className="header">
                <div className="top">
                    <h4>최근 하락 아파트</h4>
                </div>
            </div>
            <div className="select">
                <SelectString optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <SelectString optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                <SelectString optionName="읍/면/동" optionList={dongList} setSelectItem={setSelectDong} />
            </div>
            {/* <div className="select">
                <Select optionName="세대수" optionList={houseHoldsNumberList} setSelectItem={setHouseHoldsNumber} setSelectOption={null} />
                <Select optionName="과거 최고가" optionList={pastTopPriceList} setSelectItem={setPastTopPrice} setSelectOption={null} />
                <Select optionName="전체 평점" optionList={reviewList} setSelectItem={setReview} setSelectOption={null} />
            </div> */}
            <div className="space-radios">
                {/* <div className="radio-list">
                    <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("TRADING")} /> 매매</div>
                    <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("JEONSE")} /> 전세</div>
                    <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("MONTHLY")} /> 월세</div>
                </div> */}
                <div className="transaction">
                   <Select optionName="최근 1주일 거래" optionList={recentlyTransactionList} setSelectItem={setRecentlyTransaction} setSelectOption={null} />
                </div>
            </div>
            <div className="tables">
                <TableContainer component={Paper} className="table-container">
                    <Table size="small" stickyHeader className="table">
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                            <TableRow className="table-row">
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">단지명</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">면적</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">계약일</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">체결 가격</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="table-body">
                            {recentlyDownFailAptList && recentlyDownFailAptList.map((recentlyDownFailApt, index) => (
                                <React.Fragment key={index}>
                                    <TableRow className="table-row">
                                        <TableCell sx={{ textAlign: "center" }} rowSpan={4} className="table-cell">{recentlyDownFailApt?.deAptName}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }} rowSpan={4} className="table-cell">{recentlyDownFailApt?.deAptSquareFootage}평</TableCell>
                                    </TableRow>
                                    <TableRow className="table-row">
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt?.deAptContractDate}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt?.deAptContractPrice}</TableCell>
                                    </TableRow>
                                    {/* <TableRow className="table-row">
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt.date2}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt.price2}</TableCell>
                                    </TableRow> */}
                                    {/* <TableCell sx={{ textAlign: "center" }} colSpan={2} className="table-cell">{recentlyDownFailApt.priceInfo}</TableCell> */}
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </HouseDetailRecentlyDownFallAptStyle>
    )
}

export default HouseDetailRecentlyDownFallApt;