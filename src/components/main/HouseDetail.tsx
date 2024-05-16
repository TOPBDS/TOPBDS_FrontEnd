import "./style/main.css"; 
import "./style/main-item.style"
import { HouseDetailStyle } from "./style/main.style";
import { HouseDetailAptReviewStyle, HouseDetailAptsPriceStyle, HouseDetailAptsStyle, HouseDetailHeaderStyle, HouseDetailPopulationChangeStyle, HouseDetailRankStyle, HouseDetailRecentlyDownFallAptStyle, HouseDetailRecentlyRiseAptStyle, HouseDetailSupplyVolumeStyle, HouseDetailUnsoldStyle, HouseDetailSortation } from "./style/main-item.style";

const HouseDetail = () => {
    return (
        <HouseDetailStyle>
            <HouseDetailHeaderStyle>
                아파트 정보
            </HouseDetailHeaderStyle> 
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailUnsoldStyle>
                미분양
            </HouseDetailUnsoldStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailPopulationChangeStyle>
                인구수 변화
            </HouseDetailPopulationChangeStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailRankStyle>
                대단지 순위
            </HouseDetailRankStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailSupplyVolumeStyle>
                공급 물량
            </HouseDetailSupplyVolumeStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailRecentlyDownFallAptStyle>
                최근 하락 아파트
            </HouseDetailRecentlyDownFallAptStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailRecentlyRiseAptStyle>
                최근 상승 아파트
            </HouseDetailRecentlyRiseAptStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailAptsStyle>
                여러 아파트 비교
            </HouseDetailAptsStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailAptsPriceStyle>
                매물 증감
            </HouseDetailAptsPriceStyle>
            <HouseDetailSortation></HouseDetailSortation>
            <HouseDetailAptReviewStyle>
                아파트 평점
            </HouseDetailAptReviewStyle>
        </HouseDetailStyle>
    )
}

export default HouseDetail;