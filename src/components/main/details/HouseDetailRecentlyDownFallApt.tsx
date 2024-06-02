import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailRecentlyDownFallAptStyle } from "../style/main-item.style";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Select from "../../common/Select";

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
                <Select optionName="도시" optionList={["대구", "서울", "부산"]} />
                <Select optionName="시군구" optionList={["동구", "서구", "남구"]} />
                <Select optionName="읍/면/동" optionList={["안심1동", "안심2동", "안심3,4동"]} />
            </div>
            <div className="select">
                <Select optionName="세대수" optionList={["100+세대", "1000+세대", "10000+세대"]} />
                <Select optionName="과거 최고가" optionList={["1억 이상", "5000만월 이상", "1000만월 이상"]} />
                <Select optionName="전체 평점" optionList={["5", "4", "3", "2", "1"]} />
            </div>
            <div className="space-radios">
                <div className="radio-list">
                    <div className="radio-box"><input type="radio" className="radio" /> 매매</div>
                    <div className="radio-box"><input type="radio" className="radio" /> 전세</div>
                    <div className="radio-box"><input type="radio" className="radio" /> 월세</div>
                </div>
                <div className="transaction">
                   <Select optionName="최근 1주일거래" optionList={["최근 1달거래", "최근 1년거래"]} />
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