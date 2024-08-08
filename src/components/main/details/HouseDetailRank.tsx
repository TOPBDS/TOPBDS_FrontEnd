import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRankStyle } from "../style/main-item.style";
import { ReactComponent as HouseSearchIcon } from "../../../assets/icon/search.svg";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";

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

    useEffect(() => {
        // getLocation();
        // getRankList();
    }, []);

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

    useEffect(() => {
        // getSubLocation();
    }, [selectLocation]);

    const [ aptName, setAptName ] = useState<string>("");

    const getRankList = async () => {
        const response = await AptApi.getLargeComplexList(0, selectLocation, selectSubLocation, 0, aptName, '');

        console.log(response);
        setRankList(response); 
    }

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
                    <input type="text" className="search-input" placeholder="아파트명" onChange={(e) => setAptName(e.target.value)}/>
                    <HouseSearchIcon className="search-icon"/>
                </div>
                {/* <div className="search-container">
                    <input type="text" className="search-input" placeholder="지역명" />
                    <HouseSearchIcon className="search-icon"/>
                </div> */}
            </div>
            <div className="select">
                <Select optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <Select optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                <Select optionName="읍/면/동" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
            </div>
            <div className="range">
                <h3>세대수</h3>
                <input
                    type="range"
                    className="range-date"
                    min="100"
                    max="500"
                />
                <div className="range-labels">
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                    <span>400</span>
                    <span>500</span>
                </div>
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