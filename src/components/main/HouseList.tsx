import React from "react";
import { HosueItemListStyle, HouseListStyle } from "./style/main.style";
import HouseListItem from "./\bHouseListItem";
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
            </HosueItemListStyle>
        </HouseListStyle>
    )
}

export default HouseList;