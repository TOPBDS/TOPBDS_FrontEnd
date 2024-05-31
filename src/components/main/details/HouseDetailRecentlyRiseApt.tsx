import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailRecentlyRiseAptStyle } from "../style/main-item.style";

const HouseDetailRecentlyRiseApt: React.FC = () => {
    const [ recentlyRiseAptList, setRecentlyRiseAptList ] = useState<{
        name: string,
        location: string,
        total: number,
        price: number,
        risePrice: string
    }[]>([
        {
            name: "아파트 이름",
            location: "서울 강남구 개포동",
            total: 74,
            price: 3300,
            risePrice: "1억 500만 ➡️ 1억 3,800만"
        }
    ]);

    return (
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
                <select className="country">
                    <option defaultChecked>시군구</option>
                    <option value="donggu">동구</option>
                    <option value="seogu">서구</option>
                    <option value="namgu">남구</option>
                </select>
                <select className="country">
                    <option defaultChecked>읍/면/동</option>
                    <option value="ansim1">안심1동</option>
                    <option value="ansim2">안심2동</option>
                    <option value="ansim34">안심3,4동</option>
                </select>
            </div>
            <div className="radios">
                <div className="radio-box"><input type="radio" className="radio" /> 매매</div>
                <div className="radio-box"><input type="radio" className="radio" /> 전세</div>
                <div className="radio-box"><input type="radio" className="radio" /> 월세</div>
            </div>
            <div className="item-list">
                {recentlyRiseAptList && recentlyRiseAptList.map((recentlyRiseApt, index) => 
                    <div className="item" key={index}>
                        <span className="rank">{index + 1}</span>
                        <div className="info">
                            <span>{recentlyRiseApt.name}</span>
                            <span className="address">{recentlyRiseApt.location}</span>
                        </div>
                        <span>{recentlyRiseApt.total}개동</span>
                        <div className="price-info">
                            <span>{recentlyRiseApt.price}만</span>
                            <span>{recentlyRiseApt.risePrice}</span>
                        </div>
                    </div>
                )}
            </div>
        </HouseDetailRecentlyRiseAptStyle>
    )
}

export default HouseDetailRecentlyRiseApt;