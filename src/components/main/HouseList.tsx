import "./styles/main.css";
import React from "react";
import { HosueItemListStyle, HouseItemRecommendButtonStyle, HouseListStyle } from "./style/main.style";
import HouseListItem from "./HouseListItem";
import HouseSearch from "./HouseSearch";

const HouseList: React.FC = () => {
    return (
        <HouseListStyle>
            <HouseSearch />
            <HosueItemListStyle>
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
                <HouseListItem />
            </HosueItemListStyle>
            <HouseItemRecommendButtonStyle type="button">AI 매몰 추천하기</HouseItemRecommendButtonStyle>
        </HouseListStyle>
    )
}

export default HouseList;