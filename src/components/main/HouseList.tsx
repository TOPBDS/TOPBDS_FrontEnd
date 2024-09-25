import React, { useEffect, useRef, useState } from "react";
import { HosueItemListStyle, HouseItemRecommendButtonStyle, HouseListStyle, HouseSearchItemContainer, HouseSearchItemStyle, HouseSearchStyle } from "./style/main.style";
import HouseListItem from "./HouseListItem";
import AptApi from "../../core/apis/apt/Apt.api";
import { ReactComponent as HouseSearchIcon } from "../../assets/icon/search.svg";

interface HouseListProps {
    lat: number;
    lng: number;
}

interface AptApiDTO {
    apt: string;
    capacity: number;
    area: string;
    amount: number;
    amountConv: number;
    amountType: string;
    floor: number;
    conDate: string;
    transMethod: string | null;
    broLoc: string | null;
    addr: string;
    date: string;
    dong: string;
    geo: string;
    sgg: string;
    conYear: number;
    year: number;
}

const HouseList: React.FC<HouseListProps> = ({ lat, lng }) => {
    const [aptApiList, setAptApiList] = useState<AptApiDTO[]>([]);
    const [keyword, setKeyword] = useState<string>(""); // 검색 키워드
    const page = useRef(1); // 페이지 관리는 useRef를 사용하여 리렌더링이 발생하지 않도록
    const [target, setTarget] = useState<HTMLDivElement | null>(null); // 무한 스크롤 대상 ref
    const [isLoaded, setIsLoaded] = useState<boolean>(false); // 로딩 상태 관리
    const [endData, setEndData] = useState<boolean>(false); // 더 불러올 데이터가 있는지 여부

    // API를 호출하여 아파트 리스트를 가져오는 함수 (무한 스크롤용)
    const getAptList = async () => {
        try {
            const data = await AptApi.getAptAPIList(page.current, keyword); // keyword를 함께 전달

            if (data && data.length > 0) {
                setAptApiList((prevAptList) => [...prevAptList, ...data]); // 기존 리스트에 데이터 추가
                page.current += 1; // 다음 페이지 설정
            } else {
                setEndData(true); // 데이터가 더 이상 없을 경우
            }
        } catch (error) {
            console.error("Error fetching apartment list:", error);
        }
    };

    // 스크롤 시 IntersectionObserver가 실행될 때 호출되는 함수
    const getMoreItem = async () => {
        if (endData || isLoaded) return; // 이미 로딩 중이거나 끝났을 때는 중복 요청 방지

        setIsLoaded(true);
        await getAptList(); // 최신 keyword 사용
        setIsLoaded(false);
    };

    // IntersectionObserver가 타겟 요소에 교차할 때 호출되는 함수
    const onIntersect = async ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        if (entry.isIntersecting && !isLoaded && !endData) {
            observer.unobserve(entry.target); // 관찰 중지
            await getMoreItem(); // 더 많은 데이터를 불러옴
            observer.observe(entry.target); // 다시 관찰 시작
        }
    };

    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        if (target && !endData) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            });
            observer.observe(target); // 타겟 요소 관찰 시작
        }
        return () => observer && observer.disconnect(); // 컴포넌트 언마운트 시 관찰 해제
    }, [target, endData, keyword]); // keyword도 의존성 배열에 추가하여 최신 값을 반영

    // 검색 기능 처리 함수
    const searchApts = async () => {
        setAptApiList([]); // 이전 결과 초기화
        page.current = 1;
        setEndData(false); 
        try {
            const data = await AptApi.getAptAPIList(page.current, keyword);

            if (data && data.length > 0) {
                setAptApiList(data); // 기존 리스트를 덮어쓰며 새로운 검색 결과를 설정
                page.current += 1; // 다음 페이지 설정
            } else {
                setEndData(true); // 데이터가 더 이상 없을 경우
            }
        } catch (error) {
            console.error("Error fetching apartment list:", error);
        }
    };

    return (
        <HouseListStyle>
            <HouseSearchStyle>
                <HouseSearchItemContainer>
                    <HouseSearchItemStyle 
                        type="text" 
                        placeholder="찾으시는 매물을 입력해 주세요." 
                        value={keyword} 
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <HouseSearchIcon className="search-icon" onClick={() => searchApts()} />
                </HouseSearchItemContainer>
            </HouseSearchStyle>
            <HosueItemListStyle>
                {aptApiList.map((apt, index) => (
                    <HouseListItem key={index} data={apt} />
                ))}
                <div ref={setTarget}></div>
            </HosueItemListStyle>
            <HouseItemRecommendButtonStyle type="button" onClick={() => alert("기능 준비 중입니다.")}>
                AI 매물 추천하기
            </HouseItemRecommendButtonStyle>
            {isLoaded && <p>Loading...</p>}
        </HouseListStyle>
    );
};

export default HouseList;
