import "./style/detail.css";
import React, { useState } from "react";
import { HouseDetailAptsInDecreasePriceStyle } from "../style/main-item.style";

const HouseDetailAptsInDecreasePrice: React.FC = () => {
    const [ aptInDecreasePriceList, setAptInDecreasePriceList ] = useState<{
        name: string,
        inDecrease: string,
        inDecreaseTo: string
    }[]>([
        {
            name: "아파트 이름",
            inDecrease: "-3.6%",
            inDecreaseTo: "4,555건 > 4,296건"
        }
    ]);

    return (
        <HouseDetailAptsInDecreasePriceStyle>
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
                {aptInDecreasePriceList && aptInDecreasePriceList.map((aptInDecreasePrice, index) =>
                    <div className="item" key={index}>
                        <span className="rank">{index + 1}</span>
                        <div className="info">
                            <span>{aptInDecreasePrice.name}</span>
                            <span className="address">일별 매물현황</span>
                        </div>
                        <span>읍면동 비교</span>
                        <div className="price-info">
                            <span>-{aptInDecreasePrice.inDecrease}</span>
                            <span>{aptInDecreasePrice.inDecreaseTo}</span>
                        </div>
                    </div>
                )}
            </div>
        </HouseDetailAptsInDecreasePriceStyle>
    )
}

export default HouseDetailAptsInDecreasePrice;