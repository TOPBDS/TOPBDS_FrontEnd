import "./style/main.css"; 
import "./style/main-item.style"
import { HouseDetailStyle } from "./style/main.style";
import { HouseDetailSortation } from "./style/main-item.style";
import React from "react";
import HouseDetailHeader from "./details/HouseDetailHeader";
import HouseDetailUnsold from "./details/HouseDetailUnsold";
import HouseDetailPopulationChange from "./details/HouseDetailPopulationChange";
import HouseDetailRank from "./details/HouseDetailRank";
import HouseDetailSupplyVolume from "./details/HouseDetailSupplyVolume";
import HouseDetailRecentlyDownFallApt from "./details/HouseDetailRecentlyDownFallApt";
import HouseDetailRecentlyRiseApt from "./details/HouseDetailRecentlyRiseApt";
import HouseDetailCompareApts from "./details/HouseDetailCompareApts";
import HouseDetailAptsInDecreasePrice from "./details/HouseDetailAptsInDecreasePrice";
import HouseDetailAptReview from "./details/HouseDetailAptReview";

const HouseDetail: React.FC = () => {
    return (
        <HouseDetailStyle>
            <HouseDetailHeader />
            <HouseDetailSortation />
            <HouseDetailUnsold />
            <HouseDetailSortation />
            <HouseDetailPopulationChange />
            <HouseDetailSortation />
            <HouseDetailRank />
            <HouseDetailSortation />
            <HouseDetailSupplyVolume />
            <HouseDetailSortation />
            <HouseDetailRecentlyDownFallApt />
            <HouseDetailSortation />
            <HouseDetailRecentlyRiseApt />
            <HouseDetailSortation />
            <HouseDetailCompareApts />
            <HouseDetailSortation />
            <HouseDetailAptsInDecreasePrice />
            <HouseDetailSortation />
            <HouseDetailAptReview />
            <HouseDetailSortation />
        </HouseDetailStyle>
    )
}

export default HouseDetail;