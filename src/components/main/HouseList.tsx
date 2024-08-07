import "./style/main.css"; 
import React, { useEffect, useState } from "react";
import { HosueItemListStyle, HouseItemRecommendButtonStyle, HouseListStyle } from "./style/main.style";
import HouseListItem from "./HouseListItem";
import HouseSearch from "./HouseSearch";
import AptApi from "../../core/apis/apt/Apt.api";

interface HouseListProps {
    lat: number;
    lng: number;
}

const HouseList: React.FC<HouseListProps> = ({ lat, lng }) => {
    const [ aptList, setAptList ] = useState<{
        id: number;
        name: string;
        explain: string;
        price: string;
        type: string;
        info: string;
        number: number;
    }[]>([]);
    const [ keyword, setKeyword ] = useState<string>("");

    useEffect(() => {
        // getAptList();
    }, []);

    const getAptList = async () => {
        const response = await AptApi.getAptList(lat, lng, 0, "type", "aptRenttype");

        setAptList(response);
    }

    const recommendAptList = async () => {
        alert("기능 구현 중입니다.");
    }

    return (
        <HouseListStyle>
            <HouseSearch keyword={keyword} setKeyword={setKeyword} />
            <HosueItemListStyle>
                {
                    aptList && aptList.map((apt) => (
                        <HouseListItem data={apt}  />
                    ))
                }
            </HosueItemListStyle>
            <HouseItemRecommendButtonStyle type="button" onClick={recommendAptList}>AI 매몰 추천하기</HouseItemRecommendButtonStyle>
        </HouseListStyle>
    )
}

export default HouseList;