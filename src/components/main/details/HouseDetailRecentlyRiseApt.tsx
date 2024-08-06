import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRecentlyRiseAptStyle } from "../style/main-item.style";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";

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

    useEffect(() => {
        getRecentlyRiselist();
    }, [])

    const getRecentlyRiselist = async () => {
        const response = await AptApi.getRiseList(0, 0, 0, '');

        console.log(response);
    }

    return (
        <HouseDetailRecentlyRiseAptStyle>
            <div className="header">
                <div className="top">
                    <h4>최근 상승 아파트</h4>
                </div>
            </div>
            <div className="select">
                <Select optionName="도시" optionList={["대구", "서울", "부산"]} />
                <Select optionName="시군구" optionList={["동구", "서구", "남구"]} />
                <Select optionName="읍/면/동" optionList={["안심1동", "안심2동", "안심3,4동"]} />
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