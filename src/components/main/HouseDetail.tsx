import "./styles/main.css";
import { HouseDetailStyle } from "./style/main.style";
import { HouseDetailAptReviewStyle, HouseDetailAptsPriceStyle, HouseDetailAptsStyle, HouseDetailHeaderStyle, HouseDetailPopulationChangeStyle, HouseDetailRankStyle, HouseDetailRecentlyDownFallAptStyle, HouseDetailRecentlyRiseAptStyle, HouseDetailSupplyVolumeStyle, HouseDetailUnsoldStyle } from "./style/main-item.style";

const HouseDetail = () => {
    return (
        <HouseDetailStyle>
            <HouseDetailHeaderStyle>
                아파트 정보
            </HouseDetailHeaderStyle> 
            <HouseDetailUnsoldStyle>
                미분양
            </HouseDetailUnsoldStyle>
            <HouseDetailPopulationChangeStyle>
                인구수 변화
            </HouseDetailPopulationChangeStyle>
            <HouseDetailRankStyle>
                대단지 순위
            </HouseDetailRankStyle>
            <HouseDetailSupplyVolumeStyle>
                공급 물량
            </HouseDetailSupplyVolumeStyle>
            <HouseDetailRecentlyDownFallAptStyle>
                최근 하락 아파트
            </HouseDetailRecentlyDownFallAptStyle>
            <HouseDetailRecentlyRiseAptStyle>
                최근 상승 아파트
            </HouseDetailRecentlyRiseAptStyle>
            <HouseDetailAptsStyle>
                여러 아파트 비교
            </HouseDetailAptsStyle>
            <HouseDetailAptsPriceStyle>
                매물 증감
            </HouseDetailAptsPriceStyle>
            <HouseDetailAptReviewStyle>
                아파트 평점
            </HouseDetailAptReviewStyle>
        </HouseDetailStyle>
    )
}

export default HouseDetail;