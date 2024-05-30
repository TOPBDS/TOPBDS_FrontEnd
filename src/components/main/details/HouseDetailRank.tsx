import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailRankStyle } from "../style/main-item.style";
import { ReactComponent as HouseSearchIcon } from "../../../assets/icon/search.svg";

const HouseDetailRank: React.FC = () => {
    const [ rankList, setRankList ] = useState<{
        name: string,
        location: string,
        dong: number,
        number: number
    }[]>([
        {
            name: "아파트 이름",
            location: "서울시 강남구 개포동",
            dong: 74,
            number: 6423
        }
    ]);

    return (
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
                <select className="country">
                    <option defaultChecked>시군구</option>
                    <option value="daegu">동구</option>
                    <option value="seoul">서구</option>
                    <option value="busan">남구</option>
                </select>
                <select className="country">
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
                {rankList && rankList.map((rank, index) => 
                    <div className="item">
                        <span className="rank">{index + 1}</span>
                        <div className="info">
                            <span>{rank.name}</span>
                            <span className="address">{rank.location}</span>
                        </div>
                        <span>{rank.dong}개동</span>
                        <span>{rank.number}세대</span>
                    </div>
                )}
            </div>
        </HouseDetailRankStyle>
    )
}

export default HouseDetailRank;