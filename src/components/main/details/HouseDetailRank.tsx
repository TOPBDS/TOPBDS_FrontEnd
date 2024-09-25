import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailRankStyle } from "../style/main-item.style";
import { ReactComponent as HouseSearchIcon } from "../../../assets/icon/search.svg";
import Select from "../../common/Select";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";
import { CustomSlider } from "../style/main.style";
import SelectString from "../../common/SelectString";

interface RankDTO {
    id: number;
    sgg: string;
    aptName: string;
    numHouse: number;
}

interface HouseDetailRankProps {
    locationList: string[];
}

const HouseDetailRank: React.FC<HouseDetailRankProps> = ({
    locationList
}) => {
    const [ rankList, setRankList ] = useState<RankDTO[]>([]);

    const [ subLocationList, setSubLocationList ] = useState<string[]>([]);
    const [ selectLocation, setSelectLocation ] = useState<string>("");
    const [ selectSubLocation, setSelectSubLocation ] = useState<string>("");

    const getSubLocation = async () => {
        const response = await LocationApi.getSggLargeComplex2(selectLocation);
        setSubLocationList(response);
    }

    useEffect(() => {
        if (selectLocation) {
            getSubLocation();
        }
    }, [selectLocation]);

    const [ aptName, setAptName ] = useState<string>("");

    const getRankList = async () => {
        const response = await AptApi.getLargeComplexList(1, selectLocation + " " + selectSubLocation, aptName, String(numberRangeValue[0]), String(numberRangeValue[1]));

        setRankList(response?.data?.data?.data); 
    }

    const [numberRangeValue, setNumberRangeValue] = useState([100, 500]);
    const handleNumberChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setNumberRangeValue([Math.min(newValue[0], numberRangeValue[1] - 10), numberRangeValue[1]]);
        } else {
            setNumberRangeValue([numberRangeValue[0], Math.max(newValue[1], numberRangeValue[0] + 10)]);
        }
    };

    useEffect(() => {
        getRankList();
    }, [selectLocation, selectSubLocation, aptName, numberRangeValue]);

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
                <SelectString optionName="도시" optionList={locationList} setSelectItem={setSelectLocation} />
                <SelectString optionName="시군구" optionList={subLocationList} setSelectItem={setSelectSubLocation} />
                {/* <Select optionName="읍/면/동" optionList={subLocationList} setSelectItem={setSelectSubLocation} setSelectOption={null} /> */}
            </div>
            <div className="range">
                <h3>세대수</h3>
                <CustomSlider
                    min={100}
                    max={500}
                    value={numberRangeValue}
                    onChange={handleNumberChange}
                    valueLabelDisplay="auto"
                    disableSwap
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
                            <span>{rank?.aptName}</span>
                            <span className="address">{rank?.sgg}</span>
                        </div>
                        {/* <span>{rank.dong}개동</span> */}
                        <span>{rank?.numHouse}세대</span>
                    </div>
                )}
            </div>
        </HouseDetailRankStyle>
    )
}

export default HouseDetailRank;