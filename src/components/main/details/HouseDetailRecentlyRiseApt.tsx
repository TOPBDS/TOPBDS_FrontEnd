import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRecentlyRiseAptStyle } from "../style/main-item.style";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";

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
    const [ aptRentType, setAptRentType ] = useState<string>("");

    useEffect(() => {
        // getLocation();
        // getRecentlyRiselist();
    }, []);

    useEffect(() => {
        // getSubLocation();
    }, [selectLocation]);

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

    const getRecentlyRiselist = async () => {
        const response = await AptApi.getRiseList(0, selectLocation, selectSubLocation, aptRentType);

        console.log(response);
        setRecentlyRiseAptList(response);
    }

    return (
        <HouseDetailRecentlyRiseAptStyle>
            <div className="header">
                <div className="top">
                    <h4>최근 상승 아파트</h4>
                </div>
            </div>
            <div className="select">
                <Select optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <Select optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                <Select optionName="읍/면/동" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="radios">
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("TRADING")} /> 매매</div>
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("JEONSE")} /> 전세</div>
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("MONTHLY")} /> 월세</div>
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