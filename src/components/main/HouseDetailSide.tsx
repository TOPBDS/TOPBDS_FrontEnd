import React, { useState } from "react";
import { HouseDetailSideMenuStyle, HouseDetailSideStyle } from "./style/main.style";
import styled from "styled-components";

const HouseDetailSide: React.FC<{ refs: any }> = ({ refs }) => {
    const [isHover, setisHover] = useState<boolean>(false)

    return (
        <HouseDetailSideStyle>
            <HouseDetailSideMenuStyle>
                <HouseDetailSideMenuButton  onClick={() => refs.headerRef.current.scrollIntoView({ behavior: 'smooth' })}>아파트 정보</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.recentlyDownFallAptRef.current.scrollIntoView({ behavior: 'smooth' })}>최근 하락 아파트</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.recentlyRiseAptRef.current.scrollIntoView({ behavior: 'smooth' })}>최근 상승 아파트</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.compareAptsRef.current.scrollIntoView({ behavior: 'smooth' })}>여러 아파트 비교</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.aptsInDecreasePriceRef.current.scrollIntoView({ behavior: 'smooth' })}>매물 증감</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.unsoldRef.current.scrollIntoView({ behavior: 'smooth' })}>미분양 정보</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.populationChangeRef.current.scrollIntoView({ behavior: 'smooth' })}>인구수 변화</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.rankRef.current.scrollIntoView({ behavior: 'smooth' })}>대단지 순위</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.supplyVolumeRef.current.scrollIntoView({ behavior: 'smooth' })}>공급 물량</HouseDetailSideMenuButton>
                <HouseDetailSideMenuButton  onClick={() => refs.aptReviewRef.current.scrollIntoView({ behavior: 'smooth' })}>아파트 평점</HouseDetailSideMenuButton>
            </HouseDetailSideMenuStyle>
        </HouseDetailSideStyle>
    )
}

const HouseDetailSideMenuButton = styled.button`
    cursor: pointer;
    width: fit-content;
   padding: 12px;
    background-color: white;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px #00000040;
    font-size: 12px;
    line-height: 20px;
    color:  #676F7E ;
    font-weight: 700;
    white-space: nowrap;
`

export default HouseDetailSide;