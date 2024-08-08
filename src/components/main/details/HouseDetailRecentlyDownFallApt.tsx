import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRecentlyDownFallAptStyle } from "../style/main-item.style";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";

const HouseDetailRecentlyDownFallApt: React.FC = () => {
    const [ recentlyDownFailAptList, setRecentlyDownFailAptList ] = useState<{
        name: string,
        size: string,
        date1: string,
        date2: string,
        price1: string,
        price2: string,
        priceInfo: string
    }[]>([
        {
          name: "강남구 삼성동 삼성동센트럴아파트 416세대",
          size: "64평 84.52m",
          date1: "24.04.24",
          date2: "24.04.24",
          price1: "27억/12층",
          price2: "32억/24층",
          priceInfo: "최고가 대비 5억 하락 (15%)",
        }
    ]);

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
    }[]>([]);
    const [ recentlyTransaction, setRecentlyTransaction ] = useState<number>(0);
    const [ calculatedDate, setCalculatedDate ] = useState<Date>(new Date());
    const [ aptRentType, setAptRentType ] = useState<string>("");

    useEffect(() => {
        // getLocation();
        // getRecentlyDownFailAptList();
    }, []);

    useEffect(() => {
        // getSubLocation();
    }, [selectLocation]);

    useEffect(() => {
        calculateDate(recentlyTransaction);
    }, [recentlyTransaction]);

    const calculateDate = (daysAgo: number) => {
        const today = new Date();
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - daysAgo);

        setCalculatedDate(pastDate);
    };

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

    const getRecentlyDownFailAptList = async () => {
        const response = await AptApi.getDeclineAptList(
            0, selectLocation, selectSubLocation, houseHoldsNumber, pastTopPrice, review, aptRentType, calculatedDate
        );

        console.log(response);
        setRecentlyDownFailAptList(response);
    }

    return (
        <HouseDetailRecentlyDownFallAptStyle>
            <div className="header">
                <div className="top">
                    <h4>최근 하락 아파트</h4>
                </div>
            </div>
            <div className="select">
                <Select optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <Select optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                <Select optionName="읍/면/동" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="select">
                <Select optionName="세대수" optionList={houseHoldsNumberList} setSelectItem={setHouseHoldsNumber} />
                <Select optionName="과거 최고가" optionList={pastTopPriceList} setSelectItem={setPastTopPrice} />
                <Select optionName="전체 평점" optionList={reviewList} setSelectItem={setReview} />
            </div>
            <div className="space-radios">
                <div className="radio-list">
                    <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("TRADING")} /> 매매</div>
                    <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("JEONSE")} /> 전세</div>
                    <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("MONTHLY")} /> 월세</div>
                </div>
                <div className="transaction">
                   <Select optionName="최근 1주일거래" optionList={recentlyTransactionList} setSelectItem={setRecentlyTransaction} />
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
                                        <TableCell sx={{ textAlign: "center" }} rowSpan={4} className="table-cell">{recentlyDownFailApt.name} 416세대</TableCell>
                                        <TableCell sx={{ textAlign: "center" }} rowSpan={4} className="table-cell">{recentlyDownFailApt.size}</TableCell>
                                    </TableRow>
                                    <TableRow className="table-row">
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt.date1}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt.price1}</TableCell>
                                    </TableRow>
                                    <TableRow className="table-row">
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt.date2}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }} className="table-cell">{recentlyDownFailApt.price2}</TableCell>
                                    </TableRow>
                                    <TableCell sx={{ textAlign: "center" }} colSpan={2} className="table-cell">{recentlyDownFailApt.priceInfo}</TableCell>
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