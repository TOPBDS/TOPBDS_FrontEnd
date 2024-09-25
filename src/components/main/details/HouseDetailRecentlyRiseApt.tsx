import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRecentlyRiseAptStyle } from "../style/main-item.style";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";
import SelectString from "../../common/SelectString";

interface RiseDTO {
    aptRsId: number;
    location: string;
    subLocation: string;
    rsAptName: string;
    rsAptAddress: string;
    rsAptPrice: number;
    rsAptRentType: string;
    rsAptTopPrice: string;
}

interface HouseDetailRecentlyRiseAptProps {
    locationList: string[];
}

const HouseDetailRecentlyRiseApt: React.FC<HouseDetailRecentlyRiseAptProps> = ({
    locationList
}) => {
    const [ recentlyRiseAptList, setRecentlyRiseAptList ] = useState<RiseDTO[]>([]);
    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ dongList, setDongList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<string>("");
    const [ selectSubLocation, setSelectSubLocation ] = useState<string>("");
    const [ selectDong, setSelectDong ] = useState<string>("");
    const [ aptRentType, setAptRentType ] = useState<string>("");

    useEffect(() => {
        getRecentlyRiselist();
    }, [selectLocation, selectSubLocation, selectDong]);

    useEffect(() => {
        if (selectLocation) {
            getSubLocation();
            if (selectSubLocation) {
                getDong();
            }
        }
    }, [selectLocation, selectSubLocation]);

    const getSubLocation = async () => {
        const response = await LocationApi.getSggReal2(selectLocation);
        setSubLocationList(response);
    }

    const getDong = async () => {
        const response = await LocationApi.getDongReal(selectLocation + " " + selectSubLocation);
        setDongList(response);
    }

    const getRecentlyRiselist = async () => {
        const response = await AptApi.getRiseList(1, selectLocation + " " + selectSubLocation, selectDong);

        setRecentlyRiseAptList(response?.data?.data?.data);
    }

    return (
        <HouseDetailRecentlyRiseAptStyle>
            <div className="header">
                <div className="top">
                    <h4>최근 상승 아파트</h4>
                </div>
            </div>
            <div className="select">
                <SelectString optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <SelectString optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation}  />
                <SelectString optionName="읍/면/동" optionList={dongList} setSelectItem={setSelectDong} />
            </div>
            {/* <div className="radios">
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("TRADING")} /> 매매</div>
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("JEONSE")} /> 전세</div>
                <div className="radio-box"><input type="radio" className="radio" onClick={() => setAptRentType("MONTHLY")} /> 월세</div>
            </div> */}
            <div className="item-list">
                {recentlyRiseAptList && recentlyRiseAptList.map((recentlyRiseApt, index) => 
                    <div className="item" key={index}>
                        <span className="rank">{index + 1}</span>
                        <div className="info">
                            <span>{recentlyRiseApt?.rsAptName}</span>
                            <span className="address">{recentlyRiseApt?.rsAptAddress}</span>
                        </div>
                        {/* <span>{recentlyRiseApt.total}개동</span> */}
                        <div className="price-info">
                            <span>{recentlyRiseApt?.rsAptPrice}만</span>
                            <span>{recentlyRiseApt?.rsAptTopPrice}</span>
                        </div>
                    </div>
                )}
            </div>
        </HouseDetailRecentlyRiseAptStyle>
    )
}

export default HouseDetailRecentlyRiseApt;