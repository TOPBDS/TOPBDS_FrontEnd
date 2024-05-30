import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailRecentlyDownFallAptStyle } from "../style/main-item.style";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

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

    return (
        <HouseDetailRecentlyDownFallAptStyle>
            <div className="header">
                <div className="top">
                    <h4>최근 하락 아파트</h4>
                </div>
            </div>
            <div className="select">
                <select className="country">
                    <option defaultChecked>대구</option>
                    <option value="daegu">대구</option>
                    <option value="seoul">서울</option>
                    <option value="busan">부산</option>
                </select>
                <select className="sub-country">
                    <option defaultChecked>시군구</option>
                    <option value="donggu">동구</option>
                    <option value="seogu">서구</option>
                    <option value="namgu">남구</option>
                </select>
                <select className="sub-country2">
                    <option defaultChecked>읍/면/동</option>
                    <option value="ansim1">안심1동</option>
                    <option value="ansim2">안심2동</option>
                    <option value="ansim34">안심3,4동</option>
                </select>
            </div>
            <div className="select">
                <select className="number">
                    <option defaultChecked>세대수</option>
                    <option value="100">100+세대</option>
                    <option value="1000">1000+세대</option>
                    <option value="10000">10000+세대</option>
                </select>
                <select className="max-price">
                    <option defaultChecked>과거 최고가</option>
                    <option value="1">1억 이상</option>
                    <option value="2">5000만월 이상</option>
                    <option value="3">1000만월 이상</option>
                </select>
                <select className="all-review">
                    <option defaultChecked>전체 평점</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
            <div className="radios">
                <div className="radio-box"><input type="radio" className="radio" /> 매매</div>
                <div className="radio-box"><input type="radio" className="radio" /> 전세</div>
                <div className="radio-box"><input type="radio" className="radio" /> 월세</div>
                <select className="transaction">
                    <option defaultChecked>최근 1주일거래</option>
                    <option value="5">최근 1달거래</option>
                    <option value="4">최근 1년거래</option>
                </select>
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