import "./style/printReport.css";
import { PrintReportContainer } from "./style/printReport.style";
import { ReactComponent as SLOGO } from "../../assets/icon/s-logo.svg";
import { ReactComponent as DropDownIcon } from "../../assets/icon/drop-down.svg";
import React, { useEffect, useState } from "react";
import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Bar, BarChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
import AptApi from "../../core/apis/apt/Apt.api";
import { CustomSlider } from "../main/style/main.style";

interface PrintReportProps {
    menu: number;
}

interface ActualTransactionPriceDTO {
    aptName: string;
    contractDate: string;
    squareFootage: string;
    transactionAmount: string;
    floor: number;
    constructionYear: number;
}

interface AptVolumeDTO {
    year: string;
    transactionPrice: number;
    transactionVolume: number;
}

interface MaxAptDTO {
    aptName: string;
    maxPrice: string;
}

interface MaxAptVolumeDTO {
    aptName: string;
    maxVolume: number;
}

interface DongActualTransactionPriceDTO {
    dong: string;
    averagePrice: number;
}

interface AptFloorDTO {
    floor: number;
    transactionVolume: number;
}

interface AptYearDTO {
    year: string;
    transactionVolume: number;
}

interface AptSquareFootageDTO {
    squareFootage: string;
    transactionVolume: number;
}

interface AptEstimatedMoveInVolumeResponse {
    sigungu: string;
    year: number;
    month: number;
    houseName: string;
    houseCnt: string;
}

interface AptLargeComplexResponse {
    aptName: string;
    numHouse: number;
}

interface AptSeoulEstimatedMoveInVolumeResponse {
    name: string;
    houseCnt: number;
}

interface AptUnsoldResponse {
    year: number;
    unsoldCnt: number;
}

interface AptPopulationChangeResponse {
    year: number;
    cnt: number;
}

interface AptMonthPopulationChangeResponse {
    sgg: string;
    dong: string;
    v202401: string;
    v202402: string;
    v202403: string;
}

interface AptGapRateChangeResponse {
    apt: string; // 아파트
    area: string; // 평수
    realPrice: string; // 매매가 (현)
    gapReal: string; // 갭 (현)
    gapDiffReal: string; // 변화액 (미)
    gapPctReal: string; // 변화율 (미)
}

interface AptGapPredictionResponse {
    year: string; // 년도
    gapReal: number; // 실제 갭
    gapDl: number; // 딥러닝 예측 갭
    gapMl: number; // 머신러닝 예측 갭
}

interface AptGapRateChangePredictionResponse {
    year: string; // 년도
    gapPctReal: number; // 실제 갭 변화율
    gapPctDl: number; // 딥러닝 예측 갭 변화율
    gapPctMl: number; // 머신러닝 예측 갭 변화율
}

interface AptTradingResponse {
    apt: string; // 아파트
    area: string; // 평수
    realPrice: string; // 매매가 (현)
}

interface AptTradingTransitionResponse {
    year: string; // 년도
    realPrice: number; // 매매가
    realPriceDl: number; // 예측 딥러닝 매매가
    realPriceMl: number; // 예측 머신러닝 매매가
}

interface AptJeonseResponse {
    apt: string; // 아파트
    area: string; // 평수
    realBjPrice: string; // 전세가 (현)
}

interface AptJeonseTransitionResponse {
    year: string; // 년도
    realBjPrice: number; // 전세가 (현)
    realBjPriceDl: number; // 예측 딥러닝 전세가
    realBjPriceMl: number; // 예측 머신러닝 전세가
}

const PrintReport: React.FC<PrintReportProps> = ({ menu }) => {
    const [aptIsOpen, setAptIsOpen] = useState(false);
    const [squareIsOpen, setSquareIsOpen] = useState(false);
    const [aptSelectedOption, setAptSelectedOption] = useState("아파트");
    const [squareSelectedOption, setSquareSelectedOption] = useState("평수");
    const [aptOptionList, setAptOptionList] = useState<string[]>(["1", "2", "3"]);
    const [squareOptionList, setSquareOptionList] = useState<string[]>(["32평", "24평", "18평"]);
    // const [actualTransactionPricePage, setActualTransactionPricePage] = useState<number>(1);
    // const [estimatedMoveInVolumePage, setEstimatedMoveInVolumePage] = useState<number>(1);
    // const [monthPopulationChangePage, setMonthPopulationChangePage] = useState<number>(1);
    // const [aptGapRateChangePage, setAptGapRateChangePage] = useState<number>(1);
    // const [aptTradingPage, setAptTradingPage] = useState<number>(1);
    // const [aptJeonsePage, setAptJeonsePage] = useState<number>(1);

    const [ reportList, setReportList ] = useState<{
        actualTransactionPriceList: ActualTransactionPriceDTO[],
        aptVolumeList: AptVolumeDTO[],
        maxAptList: MaxAptDTO[],
        maxAptVolumeList: MaxAptVolumeDTO[],
        dongActualTransactionPriceList: DongActualTransactionPriceDTO[],
        aptFloorList: AptFloorDTO[],
        aptYearList: AptYearDTO[],
        aptSquareFootageList: AptSquareFootageDTO[]
    }>();

    const [ sggReportList, setSggReportList ] = useState<{
        estimatedMoveInVolumeList: AptEstimatedMoveInVolumeResponse[],
        largeComplexList: AptLargeComplexResponse[],
        seoulEstimatedMoveInVolumeList: AptSeoulEstimatedMoveInVolumeResponse[],
        unsoldList: AptUnsoldResponse[],
        populationChangeList: AptPopulationChangeResponse[],
        monthPopulationChangeList: AptMonthPopulationChangeResponse[]
    }>();

    const [predictionReportList, setPredictionReportList ] = useState<{
        aptGapRateChangeList: AptGapRateChangeResponse[],
        aptGapPredictionList: AptGapPredictionResponse[],
        aptGapRateChangePredictionList: AptGapRateChangePredictionResponse[],
        aptTradingList: AptTradingResponse[],
        aptTradingTransitionList: AptTradingTransitionResponse[],
        aptJeonseList: AptJeonseResponse[],
        aptJeonseTransitionList: AptJeonseTransitionResponse[]
    }>();

    const getTitle = () => {
        switch (menu) {
            case 0:
                return "아파트 데이터 분석 보고서";
            case 1:
                return "아파트 시군구 분석 보고서";
            case 2:
                return "아파트 가격 예측 보고서";
        }
    }

    const toggleAptDropdown = () => {
        setAptIsOpen(!aptIsOpen);
    };

    const toggleSquareDropdown = () => {
        setSquareIsOpen(!squareIsOpen);
    };

    const handleAptOptionClick = (option: any) => {
        setAptSelectedOption(option);
        setAptIsOpen(false);
    };

    const handleSquareOptionClick = (option: any) => {
        setSquareSelectedOption(option);
        setSquareIsOpen(false);
    };

    const [yearRangeValue, setYearRangeValue] = useState([2012, 2024]);
    const handleYearChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setYearRangeValue([Math.min(newValue[0], yearRangeValue[1] - 1), yearRangeValue[1]]);
        } else {
            setYearRangeValue([yearRangeValue[0], Math.max(newValue[1], yearRangeValue[0] + 1)]);
        }
    };

    useEffect(() => {
        getAptNameList();
    }, []);

    useEffect(() => {
        getReportData();
    }, [menu, aptSelectedOption, squareSelectedOption, yearRangeValue]);

    const getAptNameList = async () => {
        const response = await AptApi.getAptNameList();
        setAptOptionList(response?.data?.data);
    }

    const getReportData = async () => {
        if (menu == 0) {
            const response = await AptApi.getReportData(aptSelectedOption == "아파트" ? "" : aptSelectedOption, squareSelectedOption == "평수" ? "" : squareSelectedOption, yearRangeValue[0], yearRangeValue[1]);
            
            setReportList(response?.data?.data);
        } else if (menu == 1) {
            const response = await AptApi.getSggReportData();
            setSggReportList(response?.data?.data);
        } else if (menu == 2) {
            const response = await AptApi.getPredictionReportData(aptSelectedOption == "아파트" ? "" : aptSelectedOption, squareSelectedOption == "평수" ? "" : squareSelectedOption, yearRangeValue[0], yearRangeValue[1]);
            
            setPredictionReportList(response?.data?.data);
        }
    }

    return (
        <PrintReportContainer>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="report-title">{getTitle()}</h1>
                </div>
                {
                    menu != 1 && (
                        <div className="report-filter">
                            <p className="report-filter-search">검색 조건</p>
                            <div className="report-select-box">
                                <button type="button" className="select-label" onClick={toggleAptDropdown}>
                                    <p>{aptSelectedOption}</p>
                                    <DropDownIcon className='icon' />
                                </button>
                                {aptIsOpen && (
                                    <ul className="option-list">
                                        {aptOptionList && aptOptionList.map((option: any, index: number) => (
                                            <li key={index} className="select-option" onClick={() => handleAptOptionClick(option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="report-select-box">
                                <button type="button" className="select-label" onClick={toggleSquareDropdown}>
                                    <p>{squareSelectedOption}</p>
                                    <DropDownIcon className='icon' />
                                </button>
                                {squareIsOpen && (
                                    <ul className="option-list">
                                        {squareOptionList && squareOptionList.map((option: any, index: number) => (
                                            <li key={index} className="select-option" onClick={() => handleSquareOptionClick(option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div> 
                            <div className="report-year">
                                <p>연도</p>
                                <CustomSlider
                                    min={2012}
                                    max={2024}
                                    value={yearRangeValue}
                                    onChange={handleYearChange}
                                    valueLabelDisplay="auto"
                                    disableSwap
                                />
                            </div>
                        </div>
                    )
                }
                {
                    menu == 0 && (
                        <div className="report-info">
                            <div className="report-info-item">
                                <p className="graph-title">[표] 아파트 실거래가 내역</p>
                                <div className="tables">
                                    <TableContainer component={Paper} className="table-container">
                                        <Table size="small" stickyHeader className="table">
                                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                                <TableRow className="table-row">
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">아파트</TableCell>
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">계약날짜</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">평형</TableCell>
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">거래금액</TableCell>
                                                    <TableCell sx={{ width: "10%", textAlign: "center" }} className="table-cell">층</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">건축년도</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className="table-body">
                                                {
                                                    reportList && reportList?.actualTransactionPriceList.map(data => (
                                                        <TableRow>
                                                            <TableCell>{data?.aptName}</TableCell>
                                                            <TableCell>{data?.contractDate}</TableCell>
                                                            <TableCell>{data?.squareFootage}</TableCell>
                                                            <TableCell>{data?.transactionAmount}</TableCell>
                                                            <TableCell>{data?.floor}</TableCell>
                                                            <TableCell>{data?.constructionYear}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Pagination className="pagination" page={actualTransactionPricePage} count={10} shape="rounded" /> */}
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 아파트 실거래가 및 거래량 변화</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.aptVolumeList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Line dataKey="transactionPrice" type="monotone" stroke="#03C6CE" />
                                            <Bar dataKey="transactionVolume" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 최고가 아파트</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.maxAptList}>
                                            <XAxis dataKey="aptName" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="maxPrice" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 최대 거래량</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.maxAptVolumeList}>
                                            <XAxis dataKey="aptName" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="maxVolume" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 동에 따른 실거래가 분포</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.dongActualTransactionPriceList}>
                                            <XAxis dataKey="dong" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="averagePrice" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 아파트 층별 거래량</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.aptFloorList}>
                                            <XAxis dataKey="floor" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="transactionVolume" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 아파트 연도별 거래량</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.aptYearList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="transactionVolume" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 아파트 평형 거래량</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={reportList?.aptSquareFootageList}>
                                            <XAxis dataKey="squareFootage" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="transactionVolume" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    menu == 1 && (
                        <div className="report-info">
                            <div className="report-info-item">
                                <p className="graph-title">[표] 입주 예정 물량</p>
                                <div className="tables">
                                    <TableContainer component={Paper} className="table-container">
                                        <Table size="small" stickyHeader className="table">
                                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                                <TableRow className="table-row">
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">시군구</TableCell>
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">연도</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">입주예정월</TableCell>
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">주택명</TableCell>
                                                    <TableCell sx={{ width: "10%", textAlign: "center" }} className="table-cell">세대수</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className="table-body">
                                                {
                                                    sggReportList && sggReportList.estimatedMoveInVolumeList.map(data => (
                                                        <TableRow>
                                                            <TableCell>{data?.sigungu}</TableCell>
                                                            <TableCell>{data?.year}</TableCell>
                                                            <TableCell>{data?.month}</TableCell>
                                                            <TableCell>{data?.houseName}</TableCell>
                                                            <TableCell>{data?.houseCnt}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Pagination className="pagination" page={estimatedMoveInVolumePage} count={10} shape="rounded" /> */}
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 대단지 순위 TOP 10</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={sggReportList?.largeComplexList}>
                                            <XAxis dataKey="aptName" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="numHouse" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 서울 지역구 입주 예정 물량 TOP 10</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={sggReportList?.seoulEstimatedMoveInVolumeList}>
                                            <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="houseCnt" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 미분양 추이</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={sggReportList?.unsoldList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="unsoldCnt" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 인구 변화 추이</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={sggReportList?.populationChangeList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="cnt" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[표] 월간 인구변화</p>
                                <div className="tables">
                                    <TableContainer component={Paper} className="table-container">
                                        <Table size="small" stickyHeader className="table">
                                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                                <TableRow className="table-row">
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">시군구</TableCell>
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">법정동</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">2024년 1월</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">2024년 2월</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">2024월 3월</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className="table-body">
                                                {
                                                    sggReportList && sggReportList?.monthPopulationChangeList.map(data => (
                                                        <TableRow>
                                                            <TableCell>{data?.sgg}</TableCell>
                                                            <TableCell>{data?.dong}</TableCell>
                                                            <TableCell>{data?.v202401}</TableCell>
                                                            <TableCell>{data?.v202402}</TableCell>
                                                            <TableCell>{data?.v202403}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Pagination className="pagination" page={monthPopulationChangePage} count={10} shape="rounded" /> */}
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    menu == 2 && (
                        <div className="report-info">
                            <div className="report-info-item">
                                <p className="graph-title">[표] 아파트 갭 변화율 테이블</p>
                                <div className="tables">
                                    <TableContainer component={Paper} className="table-container">
                                        <Table size="small" stickyHeader className="table">
                                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                                <TableRow className="table-row">
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">아파트</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">평수</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">매매가(현)</TableCell>
                                                    <TableCell sx={{ width: "20%", textAlign: "center" }} className="table-cell">갭(현)</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">변화액(미)</TableCell>
                                                    <TableCell sx={{ width: "15%", textAlign: "center" }} className="table-cell">변화율(미)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className="table-body">
                                                {
                                                    predictionReportList && predictionReportList?.aptGapRateChangeList.map(data => (
                                                        <TableRow>
                                                            <TableCell>{data?.apt}</TableCell>
                                                            <TableCell>{data?.area}</TableCell>
                                                            <TableCell>{data?.realPrice}</TableCell>
                                                            <TableCell>{data?.gapReal}</TableCell>
                                                            <TableCell>{data?.gapDiffReal}</TableCell>
                                                            <TableCell>{data?.gapPctReal}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Pagination className="pagination" page={aptGapRateChangePage} count={10} shape="rounded" /> */}
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 아파트 갭(매매가 – 전세가) 예측 정보</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={predictionReportList?.aptGapPredictionList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="gapReal" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="gapDl" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="gapMl" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[그림] 아파트 갭 변화율 예측 정보</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={predictionReportList?.aptGapRateChangePredictionList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="gapPctReal" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="gapPctDl" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="gapPctMl" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[표] 아파트 매매가</p>
                                <div className="tables">
                                    <TableContainer component={Paper} className="table-container">
                                        <Table size="small" stickyHeader className="table">
                                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                                <TableRow className="table-row">
                                                    <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">아파트</TableCell>
                                                    <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">평수</TableCell>
                                                    <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">매매가(현)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className="table-body">
                                                {
                                                    predictionReportList && predictionReportList?.aptTradingList.map(data => (
                                                        <TableRow>
                                                            <TableCell>{data?.apt}</TableCell>
                                                            <TableCell>{data?.area}</TableCell>
                                                            <TableCell>{data?.realPrice}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Pagination className="pagination" page={aptTradingPage} count={10} shape="rounded" /> */}
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[도표] 아파트 매매가 (데이터) 추이</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={predictionReportList?.aptTradingTransitionList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="realPrice" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="realPriceDl" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="realPriceMl" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[표] 아파트 전세가</p>
                                <div className="tables">
                                    <TableContainer component={Paper} className="table-container">
                                        <Table size="small" stickyHeader className="table">
                                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                                <TableRow className="table-row">
                                                    <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">아파트</TableCell>
                                                    <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">평수</TableCell>
                                                    <TableCell sx={{ width: "30%", textAlign: "center" }} className="table-cell">전세가(현)</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody className="table-body">
                                                {
                                                    predictionReportList && predictionReportList?.aptJeonseList.map(data => (
                                                        <TableRow>
                                                            <TableCell>{data?.apt}</TableCell>
                                                            <TableCell>{data?.area}</TableCell>
                                                            <TableCell>{data?.realBjPrice}</TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* <Pagination className="pagination" page={aptJeonsePage} count={10} shape="rounded" /> */}
                                </div>
                            </div>
                            <div className="report-info-item">
                                <p className="graph-title">[도표] 아파트 전세가 (데이터) 추이</p>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={predictionReportList?.aptJeonseTransitionList}>
                                            <XAxis dataKey="year" tickLine={true} padding={{ left: 20, right: 20 }} />
                                            <YAxis tickLine={true} />
                                            <Bar dataKey="realBjPrice" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="realBjPriceDl" barSize={10} fill="#03C6CE" />
                                            <Bar dataKey="realBjPriceMl" barSize={10} fill="#03C6CE" />
                                        </BarChart>        
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </PrintReportContainer>
    )
}

export default PrintReport;