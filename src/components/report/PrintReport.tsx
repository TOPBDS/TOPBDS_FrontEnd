import "./style/printReport.css";
import { PrintReportContainer } from "./style/printReport.style";
import { ReactComponent as SLOGO } from "../../assets/icon/s-logo.svg";
import { ReactComponent as DropDownIcon } from "../../assets/icon/drop-down.svg";
import { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const PrintReport = () => {
    const [aptIsOpen, setAptIsOpen] = useState(false);
    const [squareIsOpen, setSquareIsOpen] = useState(false);
    const [aptSelectedOption, setAptSelectedOption] = useState("아파트");
    const [squareSelectedOption, setSquareSelectedOption] = useState("아파트");
    const [aptOptionList, setAptOptionList] = useState<[]>([]);
    const [squareOptionList, setSquareOptionList] = useState<[]>([]);
    const [rangeValue, setRangeValue] = useState<number>();

    const chartData = [
        {name: '2006', number: 0},
        {name: '2008', number: 0},
        {name: '2011', number: 0},
        {name: '2013', number: 0},
        {name: '2015', number: 0},
        {name: '2018', number: 0},
        {name: '2021', number: 0},
        {name: '2024', number: 0},
    ];

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

    const handleRangeChange = (event: any) => {
        setRangeValue(event.target.value);
    };

    return (
        <PrintReportContainer>
            <div className="report-container">
                <div className="report-header">
                    <h1 className="report-title">아파트 데이터 분석 보고서</h1>
                </div>
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
                        <input
                            type="range"
                            className="range-date"
                            min="2012"
                            max="2024"
                            value={rangeValue}
                            onChange={handleRangeChange}
                        />
                    </div>
                </div>
                <div className="report-info">
                    <div className="report-info-item">
                        <p className="graph-title">[표] 아파트 실거래가 내역</p>
                        <div className="tables">
                            <TableContainer component={Paper} className="table-container">
                                <Table size="small" stickyHeader className="table">
                                    <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }} className="table-head">
                                        <TableRow className="table-row">
                                            <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">아파트</TableCell>
                                            <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">계약날짜</TableCell>
                                            <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">평형</TableCell>
                                            <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">거래금액</TableCell>
                                            <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">층</TableCell>
                                            <TableCell sx={{ width: "25%", textAlign: "center" }} className="table-cell">건축년도</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody className="table-body">
                                        <TableRow>
                                            <TableCell>현대I-PARK(지봉로21길)</TableCell>
                                            <TableCell>2018. 7. 14.</TableCell>
                                            <TableCell>18평형</TableCell>
                                            <TableCell>5.1억</TableCell>
                                            <TableCell>7</TableCell>
                                            <TableCell>2003</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 아파트 실거래가 및 거래량 변화</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 최고가 아파트</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 최대 거래량</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 동에 따른 실거래가 분포</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 아파트 층별 거래량</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 아파트 연도별 거래량</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="report-info-item">
                        <p className="graph-title">[그림] 아파트 평형 거래량</p>
                        <div className="chart-container">
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={chartData}>
                                    <XAxis dataKey="name" tickLine={true} padding={{ left: 20, right: 20 }} />
                                    <YAxis tickLine={true} />
                                    <Bar dataKey="number" barSize={10} fill="#03C6CE" />
                                </BarChart>        
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </PrintReportContainer>
    )
}

export default PrintReport;