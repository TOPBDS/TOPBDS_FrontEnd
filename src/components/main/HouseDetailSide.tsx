import React from "react";
import { HouseDetailSideMenuStyle, HouseDetailSideStyle } from "./style/main.style";

const HouseDetailSide: React.FC<{ refs: any }> = ({ refs }) => {
    return (
        <HouseDetailSideStyle>
            <HouseDetailSideMenuStyle>
                <button type="button" className="side-menu-button" onClick={() => refs.headerRef.current.scrollIntoView({ behavior: 'smooth' })}>아파트 정보</button>
                <button type="button" className="side-menu-button" onClick={() => refs.recentlyDownFallAptRef.current.scrollIntoView({ behavior: 'smooth' })}>최근 하락 아파트</button>
                <button type="button" className="side-menu-button" onClick={() => refs.recentlyRiseAptRef.current.scrollIntoView({ behavior: 'smooth' })}>최근 상승 아파트</button>
                <button type="button" className="side-menu-button" onClick={() => refs.compareAptsRef.current.scrollIntoView({ behavior: 'smooth' })}>여러 아파트 비교</button>
                <button type="button" className="side-menu-button" onClick={() => refs.aptsInDecreasePriceRef.current.scrollIntoView({ behavior: 'smooth' })}>매물 증감</button>
                <button type="button" className="side-menu-button" onClick={() => refs.unsoldRef.current.scrollIntoView({ behavior: 'smooth' })}>미분양 정보</button>
                <button type="button" className="side-menu-button" onClick={() => refs.populationChangeRef.current.scrollIntoView({ behavior: 'smooth' })}>인구수 변화</button>
                <button type="button" className="side-menu-button" onClick={() => refs.rankRef.current.scrollIntoView({ behavior: 'smooth' })}>대단지 순위</button>
                <button type="button" className="side-menu-button" onClick={() => refs.supplyVolumeRef.current.scrollIntoView({ behavior: 'smooth' })}>공급 물량</button>
                <button type="button" className="side-menu-button" onClick={() => refs.aptReviewRef.current.scrollIntoView({ behavior: 'smooth' })}>아파트 평점</button>
            </HouseDetailSideMenuStyle>
        </HouseDetailSideStyle>
    )
}


export default HouseDetailSide;