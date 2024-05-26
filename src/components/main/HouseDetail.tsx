import "./style/main.css"; 
import "./style/main-item.style"
import { HouseDetailStyle } from "./style/main.style";
import { HouseDetailAptReviewStyle, HouseDetailAptsPriceStyle, HouseDetailAptsStyle, HouseDetailHeaderStyle, HouseDetailPopulationChangeStyle, HouseDetailRankStyle, HouseDetailRecentlyDownFallAptStyle, HouseDetailRecentlyRiseAptStyle, HouseDetailSupplyVolumeStyle, HouseDetailUnsoldStyle, HouseDetailSortation, HouseHeader } from "./style/main-item.style";
import { ReactComponent as HouseCloseIcon } from "../../assets/icon/close.svg";
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ReactComponent as HouseSearchIcon } from "../../assets/icon/search.svg";
import { ReactComponent as HeartIcon } from "../../assets/icon/heart.svg";
import { ReactComponent as StarIcon } from "../../assets/icon/star.svg";
import { ReactComponent as FillStarIcon } from "../../assets/icon/fill-star.svg";
import React from "react";

const HouseDetail = () => {
    const navigate = useNavigate();

    const data = [
        {
            name: 'Page A', 
            uv: 400, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Page B', 
            uv: 400, 
            pv: 2400, 
            amt: 2400
        },
    ];
    
    const renderCustomAxisTick = ({ x, y, payload }: any) => {
        let path = '';

        switch (payload.value) {
            case 'Page A':
                path = 'M899.072 99.328q9.216 13.312 17.92 48.128t16.384 81.92 13.824 100.352 11.264 102.912 9.216 90.112 6.144 60.928q4.096 30.72 7.168 70.656t5.632 79.872 4.096 75.264 2.56 56.832q-13.312 16.384-30.208 25.6t-34.304 11.264-34.304-2.56-30.208-16.896q-1.024-10.24-3.584-33.28t-6.144-53.76-8.192-66.56-8.704-71.68q-11.264-83.968-23.552-184.32-7.168 37.888-11.264 74.752-4.096 31.744-6.656 66.56t-0.512 62.464q1.024 18.432 3.072 29.184t4.608 19.968 5.12 21.504 5.12 34.304 5.12 56.832 4.608 90.112q-11.264 24.576-50.688 42.496t-88.576 29.696-97.28 16.896-74.752 5.12q-18.432 0-46.08-2.56t-60.416-7.168-66.048-12.288-61.952-17.92-49.664-24.064-28.16-30.208q2.048-55.296 5.12-90.112t5.632-56.832 5.12-34.304 5.12-21.504 4.096-19.968 3.584-29.184q2.048-27.648-0.512-62.464t-6.656-66.56q-4.096-36.864-11.264-74.752-13.312 100.352-24.576 184.32-5.12 35.84-9.216 71.68t-8.192 66.56-6.656 53.76-2.56 33.28q-13.312 12.288-30.208 16.896t-34.304 2.56-33.792-11.264-29.696-25.6q0-21.504 2.048-56.832t4.096-75.264 5.632-79.872 6.656-70.656q2.048-20.48 6.144-60.928t9.728-90.112 11.776-102.912 13.824-100.352 16.384-81.92 17.92-48.128q20.48-12.288 56.32-25.6t73.216-26.624 71.168-25.088 50.176-22.016q10.24 13.312 16.896 61.44t13.312 115.712 15.36 146.432 23.04 153.6l38.912-334.848-29.696-25.6 43.008-54.272 15.36 2.048 15.36-2.048 43.008 54.272-29.696 25.6 38.912 334.848q14.336-74.752 23.04-153.6t15.36-146.432 13.312-115.712 16.896-61.44q16.384 10.24 50.176 22.016t71.168 25.088 73.216 26.624 56.32 25.6';
                break;
            case 'Page B':
                path = 'M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z';
                break;
            default:
                path = '';
        }

        return (
            <svg x={x - 12} y={y + 4} width={24} height={24} viewBox="0 0 1024 1024" fill="#666">
                <path d={path} />
            </svg>
        );
    };

    const renderCustomBarLabel = ({ payload, x, y, width, height, value }: any) => {
        return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${value}`}</text>;
    };

    const chartData = [
        {
          name: "강남구 삼성동 삼성동센트럴아파트 416세대",
          size: "64평 84.52m",
          date: "24.04.24",
          price1: "27억/12층",
          price2: "32억/24층",
          price3: "최고가 대비 5억 하락 (15%)",
        },
        // Add other rows as necessary
    ];

    return (
        <HouseDetailStyle>
            <HouseDetailHeaderStyle>
                <HouseHeader>
                    아파트 정보
                    <HouseCloseIcon className="close" onClick={() => navigate(-1)} />
                </HouseHeader>
                <div className="image-container">
                    <img src="" alt="preview" className="preview-image"/>
                </div>
                <div className="interested">
                    <HeartIcon />
                    &nbsp; 관심 매물 추가하기
                </div>
            </HouseDetailHeaderStyle> 
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailUnsoldStyle>
                <div className="header">
                    <div className="top">
                        <h4>미분양</h4>
                        <span>출처 : 국토부</span>
                    </div>
                    <span>분양을 했으나 분양되지 않은 주택 수를 시기별로 확인해보세요.</span>
                </div>
                <div className="select">
                    <select className="country">
                        <option value="daegu">대구</option>
                        <option value="seoul">서울</option>
                        <option value="busan">부산</option>
                    </select>
                    <select className="sub-country">
                        <option value="daegu">동구</option>
                        <option value="seoul">서구</option>
                        <option value="busan">남구</option>
                    </select>
                </div>
                <div className="chart">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" tick={renderCustomAxisTick} />
                            <YAxis />
                            <Bar dataKey="uv" barSize={30} fill="#8884d8"
                            label={renderCustomBarLabel}/>
                        </BarChart>        
                    </ResponsiveContainer>
                </div>
                <div className="table">
                    <h3>99년 12월 ~ 24년 2월</h3>
                    <input type="range" className="range-date" />
                    <TableContainer component={Paper}>
                        <Table size="small" stickyHeader>
                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }}> 
                                <TableRow>
                                    <TableCell sx={{ width: "30%", textAlign: "center" }}>위치</TableCell>
                                    <TableCell sx={{ width: "30%", textAlign: "center" }}>해당년월</TableCell>
                                    <TableCell sx={{ width: "30%", textAlign: "center" }}>미분양 수(호)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>2023.03</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>2023.03</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>2023.03</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>2023.03</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>대구</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </HouseDetailUnsoldStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailPopulationChangeStyle>
                <div className="header">
                    <div className="top">
                        <h4>인구수 변화</h4>
                        <span>출처 : 통계청</span>
                    </div>
                    <span>전국 지역별 (시도, 시군구, 읍면동) 인구현황</span>
                </div>
                <div className="search">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="지역명" />
                        <HouseSearchIcon className="search-icon"/>
                    </div>
                    <div className="radios">
                        <input type="radio" /> 월간
                        <input type="radio" /> 분기
                        <input type="radio" /> 년간
                    </div>
                </div>
                <div className="chart">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" tick={renderCustomAxisTick} />
                            <YAxis />
                            <Bar dataKey="uv" barSize={30} fill="#8884d8"
                            label={renderCustomBarLabel}/>
                        </BarChart>              
                    </ResponsiveContainer>
                </div>
                <div className="table">
                    <TableContainer component={Paper}>
                        <Table size="small" stickyHeader>
                            <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }}> 
                                <TableRow>
                                    <TableCell sx={{ width: "25%", textAlign: "center" }}>지역</TableCell>
                                    <TableCell sx={{ width: "25%", textAlign: "center" }}>2년전 2022.04</TableCell>
                                    <TableCell sx={{ width: "25%", textAlign: "center" }}>1년전 2023.04</TableCell>
                                    <TableCell sx={{ width: "25%", textAlign: "center" }}>2024년 4월</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구광역시</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구광역시</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구광역시</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>대구광역시</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>534,312명</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </HouseDetailPopulationChangeStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailRankStyle>
                <div className="header">
                    <div className="top">
                        <h4>대단지 순위</h4>
                        <span>출처 : 국토부</span>
                    </div>
                    <span>단지 세대수가 클수록 편의시설 등이 잘되어 있습니다.</span>
                </div>
                <div className="search">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="아파트명"/>
                        <HouseSearchIcon className="search-icon"/>
                    </div>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="지역명" />
                        <HouseSearchIcon className="search-icon"/>
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
                        <option value="daegu">동구</option>
                        <option value="seoul">서구</option>
                        <option value="busan">남구</option>
                    </select>
                    <select className="sub-country">
                        <option defaultChecked>읍/면/동</option>
                        <option value="daegu">동구</option>
                        <option value="seoul">서구</option>
                        <option value="busan">남구</option>
                    </select>
                </div>
                <div className="range">
                    <h3>세대수</h3>
                    <input type="range" className="range-date" />
                </div>
                <div className="item-list">
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">서울 강남구 개포동</span>
                        </div>
                        <span>74개동</span>
                        <span>6423세대</span>
                    </div>
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">서울 강남구 개포동</span>
                        </div>
                        <span>74개동</span>
                        <span>6423세대</span>
                    </div>
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">서울 강남구 개포동</span>
                        </div>
                        <span>74개동</span>
                        <span>6423세대</span>
                    </div>
                </div>
            </HouseDetailRankStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailSupplyVolumeStyle>
                <div className="header">
                    <div className="top">
                        <h4>공급 물량</h4>
                        <span>출처 : 분양물량조사</span>
                    </div>
                </div>
                <div className="search">
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="지역명" />
                        <HouseSearchIcon className="search-icon"/>
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
                        <option value="daegu">동구</option>
                        <option value="seoul">서구</option>
                        <option value="busan">남구</option>
                    </select>
                </div>
                <div className="radios">
                    <input type="radio" /> 월간
                    <input type="radio" /> 분기
                    <input type="radio" /> 년간
                </div>
                <div className="locations">
                    <div className="select-location"><input type="radio" checked/>대구</div>
                    <button type="button" className="add-location">대체지역 추가</button>
                    <button type="button" className="delete-location">전체 삭제</button>
                </div>
                <div className="chart-container">
                    <span>24년 ~ 28년 사이 입주하는 아파트는 진한 색입니다.</span>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" tick={renderCustomAxisTick} />
                            <YAxis />
                            <Bar dataKey="uv" barSize={30} fill="#8884d8"
                            label={renderCustomBarLabel}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="range">
                    <h3>90년 1월 ~ 28년 12월</h3>
                    <input type="range" className="range-date" />
                </div>
                <div className="small-maps">
                    지도
                </div>
                <TableContainer component={Paper}>
                    <Table size="small" stickyHeader>
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }}> 
                            <TableRow>
                                <TableCell sx={{ width: "25%", textAlign: "center" }}>위치</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }}>단지명</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }}>입주년월</TableCell>
                                <TableCell sx={{ width: "25%", textAlign: "center" }}>총세대</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}>대구광역시 서..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>마포푸르지오..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>2023년 10월</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>1000세대</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}>대구광역시 서..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>마포푸르지오..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>2023년 10월</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>1000세대</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}>대구광역시 서..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>마포푸르지오..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>2023년 10월</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>1000세대</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center" }}>대구광역시 서..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>마포푸르지오..</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>2023년 10월</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>1000세대</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </HouseDetailSupplyVolumeStyle>
            <HouseDetailSortation></HouseDetailSortation>
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
                    <select className="sub-country">
                        <option defaultChecked>읍/면/동</option>
                        <option value="ansim1">안심1동</option>
                        <option value="ansim2">안심2동</option>
                        <option value="ansim34">안심3,4동</option>
                    </select>
                </div>
                <div className="select">
                    <select className="country">
                        <option defaultChecked>세대수</option>
                        <option value="100">100+세대</option>
                        <option value="1000">1000+세대</option>
                        <option value="10000">10000+세대</option>
                    </select>
                    <select className="sub-country">
                        <option defaultChecked>과거 최고가</option>
                        <option value="1">1억 이상</option>
                        <option value="2">5000만월 이상</option>
                        <option value="3">1000만월 이상</option>
                    </select>
                    <select className="sub-country">
                        <option defaultChecked>전체 평점</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className="radios">
                    <input type="radio" /> 매매
                    <input type="radio" /> 전세
                    <input type="radio" /> 월세
                    <select className="sub-country">
                        <option defaultChecked>최근 1주일거래</option>
                        <option value="5">최근 1달거래</option>
                        <option value="4">최근 1년거래</option>
                    </select>
                </div>
                <TableContainer component={Paper}>
                    <Table size="small" stickyHeader>
                        <TableHead sx={{ position: "sticky", top: 0, zIndex: 1 }}>
                        <TableRow>
                            <TableCell sx={{ width: "25%", textAlign: "center" }}>단지명</TableCell>
                            <TableCell sx={{ width: "25%", textAlign: "center" }}>면적</TableCell>
                            <TableCell sx={{ width: "25%", textAlign: "center" }}>계약일</TableCell>
                            <TableCell sx={{ width: "25%", textAlign: "center" }}>체결 가격</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {chartData.map((row, index) => (
                            <React.Fragment key={index}>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }} rowSpan={4}>{row.name} 416세대</TableCell>
                                    <TableCell sx={{ textAlign: "center" }} rowSpan={4}>{row.size}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.price1}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{row.price2}</TableCell>
                                </TableRow>
                                <TableCell sx={{ textAlign: "center" }} colSpan={2}>{row.price3}</TableCell>
                            </React.Fragment>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </HouseDetailRecentlyDownFallAptStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailRecentlyRiseAptStyle>
                <div className="header">
                    <div className="top">
                        <h4>최근 상승 아파트</h4>
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
                    <select className="sub-country">
                        <option defaultChecked>읍/면/동</option>
                        <option value="ansim1">안심1동</option>
                        <option value="ansim2">안심2동</option>
                        <option value="ansim34">안심3,4동</option>
                    </select>
                </div>
                <div className="radios">
                    <input type="radio" /> 매매
                    <input type="radio" /> 전세
                    <input type="radio" /> 월세
                </div>
                <div className="item-list">
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">서울 강남구 개포동</span>
                        </div>
                        <span>74개동</span>
                        <div className="price-info">
                            <span>3,300만</span>
                            <span>1억 500만 ➡️ 1억 3,800만</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">서울 강남구 개포동</span>
                        </div>
                        <span>74개동</span>
                        <div className="price-info">
                            <span>3,300만</span>
                            <span>1억 500만 ➡️ 1억 3,800만</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">서울 강남구 개포동</span>
                        </div>
                        <span>74개동</span>
                        <div className="price-info">
                            <span>3,300만</span>
                            <span>1억 500만 ➡️ 1억 3,800만</span>
                        </div>
                    </div>
                </div>
            </HouseDetailRecentlyRiseAptStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailAptsStyle>
                <div className="header">
                    <div className="top">
                        <h4>여러 아파트 비교</h4>
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
                    <select className="sub-country">
                        <option defaultChecked>읍/면/동</option>
                        <option value="ansim1">안심1동</option>
                        <option value="ansim2">안심2동</option>
                        <option value="ansim34">안심3,4동</option>
                    </select>
                </div>
                <div className="select">
                    <select className="country">
                        <option defaultChecked>아파트</option>
                        <option value="100">강남 반포자이</option>
                        <option value="1000">롯데캐슬</option>
                    </select>
                    <select className="sub-country">
                        <option defaultChecked>이름</option>
                        <option value="1">이름</option>
                        <option value="2">이름</option>
                        <option value="3">이름</option>
                    </select>
                    <select className="sub-country">
                        <option defaultChecked>동</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                </div>
                <div className="locations">
                    <div className="select-location"><input type="radio" checked/>반포자이 (32평)</div>
                    <button type="button" className="add-location">대체지역 추가</button>
                    <button type="button" className="delete-location">전체 삭제</button>
                </div>
                <div className="radios">
                    <input type="radio" /> 매매
                    <input type="radio" /> 전세
                    <input type="radio" /> 월세
                </div>
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" tick={renderCustomAxisTick} />
                            <YAxis />
                            <Bar dataKey="uv" barSize={30} fill="#8884d8"
                            label={renderCustomBarLabel}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="range">
                    <h3>06년 1월 ~ 24년 12월</h3>
                    <input type="range" className="range-date" />
                </div>
            </HouseDetailAptsStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailAptsPriceStyle>
                <div className="header">
                    <div className="top">
                        <h4>매물 증감</h4>
                    </div>
                </div>
                <div className="chip-list">
                    <div className="chip active">전체</div>
                    <div className="chip">서울</div>
                    <div className="chip">경기</div>
                    <div className="chip">대구</div>
                    <div className="chip">대전</div>
                    <div className="chip">광주</div>
                </div>
                <div className="radios">
                    <div className="items">
                        <input type="radio" /> 매매
                        <input type="radio" /> 전세
                        <input type="radio" /> 월세
                    </div>
                    <div className="sort">
                        <span>증가순</span>
                        <span>감소순</span>
                    </div>
                </div>
                <div className="chip-list">
                    <div className="chip active">10일전</div>
                    <div className="chip">7일전</div>
                    <div className="chip">5일전</div>
                    <div className="chip">3일전</div>
                    <div className="chip">1일전</div>
                </div>
                <div className="item-list">
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">일별 매물현황</span>
                        </div>
                        <span>읍면동 비교</span>
                        <div className="price-info">
                            <span>-3.6%</span>
                            <span>4,555건 &gt; 4,296건</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">일별 매물현황</span>
                        </div>
                        <span>읍면동 비교</span>
                        <div className="price-info">
                            <span>-3.6%</span>
                            <span>4,555건 &gt; 4,296건</span>
                        </div>
                    </div>
                    <div className="item">
                        <span className="rank">1</span>
                        <div className="info">
                            <span>아파트 이름</span>
                            <span className="address">일별 매물현황</span>
                        </div>
                        <span>읍면동 비교</span>
                        <div className="price-info">
                            <span>-3.6%</span>
                            <span>4,555건 &gt; 4,296건</span>
                        </div>
                    </div>
                </div>
            </HouseDetailAptsPriceStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailAptReviewStyle>
                <div className="header">
                    <div className="top">
                        <h4>아파트 평점</h4>
                    </div>
                </div>
                <div className="input-star">
                    <div className="star-list">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>
                    <input type="text" placeholder="리뷰를 작성해주세요." />
                </div>
                <div className="comment-list">
                    <div className="comment-item">
                        <div className="user">
                            <div className="icon"></div>
                            <div className="data">
                                <span className="nickname">dasdasdadasdad</span>
                                <span className="date ">2345.67.89</span>
                            </div>
                            <div className="user-star">
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                            </div>
                        </div>
                        <span className="comment">alksjdflka</span>
                    </div>
                    <div className="comment-item">
                        <div className="user">
                            <div className="icon"></div>
                            <div className="data">
                                <span className="nickname">dasdasdadasdad</span>
                                <span className="date ">2345.67.89</span>
                            </div>
                            <div className="user-star">
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                            </div>
                        </div>
                        <span className="comment">alksjdflka</span>
                    </div>
                    <div className="comment-item">
                        <div className="user">
                            <div className="icon"></div>
                            <div className="data">
                                <span className="nickname">dasdasdadasdad</span>
                                <span className="date ">2345.67.89</span>
                            </div>
                            <div className="user-star">
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                                <FillStarIcon />
                            </div>
                        </div>
                        <span className="comment">alksjdflka</span>
                    </div>
                </div>
            </HouseDetailAptReviewStyle>
        </HouseDetailStyle>
    )
}

export default HouseDetail;