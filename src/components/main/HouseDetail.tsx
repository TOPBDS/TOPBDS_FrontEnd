import "./style/main.css"; 
import "./style/main-item.style"
import { HouseDetailStyle, ReportPrintButtonStyle } from "./style/main.style";
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
import { useLocation } from "react-router-dom";

const HouseDetail: React.FC = () => {
    const { pathname } = useLocation();
    const element = pathname.split("/")[2];

    return (
        <HouseDetailStyle>
            <HouseDetailHeader aptId={Number(element)} /> {/* 아파트 정보 */}
            <HouseDetailSortation />
            <HouseDetailRecentlyDownFallApt /> {/* 최근 하락 아파트 */}
            <HouseDetailSortation />
            <HouseDetailRecentlyRiseApt /> {/* 최근 상승 아파트 */}
            <HouseDetailSortation />
            <HouseDetailCompareApts /> {/* 여러 아파트 비교 */}
            <HouseDetailSortation />
            <HouseDetailAptsInDecreasePrice /> {/* 매물 증감 */}
            <HouseDetailSortation />
            <HouseDetailUnsold /> {/* 미분양 정보 */}
            <HouseDetailSortation />
            <HouseDetailPopulationChange /> {/* 인구수 변화 */}
            <HouseDetailSortation />
            <HouseDetailRank /> {/* 대단지 순위 */}
            <HouseDetailSortation />
            <HouseDetailSupplyVolume /> {/* 공급 물량 */}
            <HouseDetailSortation />
            <HouseDetailAptReview aptId={Number(element)} /> {/* 아파트 평점 */}
        </HouseDetailStyle>
    )
}

export default HouseDetail;