import "./style/main.css"; 
import "./style/main-item.style"
import { HouseDetailStyle, ReportPrintButtonStyle } from "./style/main.style";
import { HouseDetailSortation } from "./style/main-item.style";
import React, { useEffect, useRef, useState } from "react";
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
import HouseDetailSide from "./HouseDetailSide";
import LocationApi from "../../core/apis/location/Location.api";

const HouseDetail: React.FC = () => {
    const { pathname } = useLocation();
    const element = pathname.split("/")[2];

    // Create refs for each section
    const headerRef = useRef(null);
    const recentlyDownFallAptRef = useRef(null);
    const recentlyRiseAptRef = useRef(null);
    const compareAptsRef = useRef(null);
    const aptsInDecreasePriceRef = useRef(null);
    const unsoldRef = useRef(null);
    const populationChangeRef = useRef(null);
    const rankRef = useRef(null);
    const supplyVolumeRef = useRef(null);
    const aptReviewRef = useRef(null);

    const [ unsoldSggList, setUnsoldSggList ] = useState<string[]>([]);
    const [ largeComplexSggList, setLargeComplexSggList ] = useState<string[]>([]);
    const [ realSggList, setRealSggList ] = useState<string[]>([]);
    const [ upComSupplySggList, setUpComSupplySggList ] = useState<string[]>([]);

    const getUnsoldSggList = async () => {
        const response = await LocationApi.getUnsoldSgg();
        setUnsoldSggList(response);
    }

    const getLargeComplexSggList = async () => {
        const response = await LocationApi.getSggLargeComplex();
        setLargeComplexSggList(response);
    }

    const getRealSggList = async () => {
        const response = await LocationApi.getSggReal();
        setRealSggList(response);
    }

    const getUpComSupplySggList = async () => {
        const response = await LocationApi.getSggUpComSupply();
        setUpComSupplySggList(response);
    }

    useEffect(() => {
        getUnsoldSggList();
        getLargeComplexSggList();
        getRealSggList();
        getUpComSupplySggList();
    }, []);

    return (
        <HouseDetailStyle>
            <HouseDetailSide
                refs={{
                    headerRef,
                    recentlyDownFallAptRef,
                    recentlyRiseAptRef,
                    compareAptsRef,
                    aptsInDecreasePriceRef,
                    unsoldRef,
                    populationChangeRef,
                    rankRef,
                    supplyVolumeRef,
                    aptReviewRef
                }}
            />
            <div ref={headerRef}>
                <HouseDetailHeader aptId={Number(element)} /> {/* 아파트 정보 (O) */}
            </div>
            <HouseDetailSortation />
            <div ref={recentlyDownFallAptRef}>
                <HouseDetailRecentlyDownFallApt locationList={realSggList} /> {/* 최근 하락 아파트 (O) */}
            </div>
            <HouseDetailSortation />
            <div ref={recentlyRiseAptRef}>
                <HouseDetailRecentlyRiseApt locationList={realSggList} /> {/* 최근 상승 아파트 (O) */}
            </div>
            <HouseDetailSortation />
            <div ref={compareAptsRef}>
                <HouseDetailCompareApts locationList={realSggList} /> {/* 여러 아파트 비교 (X) */}
            </div>
            <HouseDetailSortation />
            <div ref={aptsInDecreasePriceRef}>
                <HouseDetailAptsInDecreasePrice locationList={realSggList} /> {/* 매물 증감 (X) */}
            </div>
            <HouseDetailSortation />
            <div ref={unsoldRef}>
                <HouseDetailUnsold locationList={unsoldSggList} /> {/* 미분양 정보 (X) */}
            </div>
            <HouseDetailSortation />
            <div ref={populationChangeRef}>
                <HouseDetailPopulationChange locationList={realSggList} /> {/* 인구수 변화 (X) */}
            </div>
            <HouseDetailSortation />
            <div ref={rankRef}>
                <HouseDetailRank locationList={largeComplexSggList} /> {/* 대단지 순위 (X) */}
            </div>
            <HouseDetailSortation />
            <div ref={supplyVolumeRef}>
                <HouseDetailSupplyVolume locationList={upComSupplySggList} /> {/* 공급 물량 (O) */}
            </div>
            <HouseDetailSortation />
            <div ref={aptReviewRef}>
                <HouseDetailAptReview aptId={Number(element)} /> {/* 아파트 평점 (O) */}
            </div>
        </HouseDetailStyle>
    )
}

export default HouseDetail;