import "./style/main.css"; 
import React, { useEffect, useState } from "react";
import { HosueItemListStyle, HouseItemRecommendButtonStyle, HouseListStyle } from "./style/main.style";
import HouseListItem from "./HouseListItem";
import HouseSearch from "./HouseSearch";
import AptApi from "../../core/apis/apt/Apt.api";

interface HouseListProps {
    lat: number;
    lng: number;
}

const HouseList: React.FC<HouseListProps> = ({ lat, lng }) => {
    const [aptList, setAptList] = useState<{
        id: number;
        name: string;
        explain: string;
        price: string;
        type: string;
        info: string;
        number: number;
    }[]>([
        {
            id: 1,
            name: "무슨무슨 아파트",
            explain: "햇빛 잘 들고 멋있고 살기 좋은 집",
            price: "전세 7억 6천",
            type: "아파트",
            info: "12월 25일부터 입주 가능, 6/15층",
            number: 123456
        },
        {
            id: 2,
            name: "무슨무슨 아파트",
            explain: "햇빛 잘 들고 멋있고 살기 좋은 집",
            price: "전세 7억 6천",
            type: "아파트",
            info: "12월 25일부터 입주 가능, 6/15층",
            number: 123456
        },
        {
            id: 3,
            name: "무슨무슨 아파트",
            explain: "햇빛 잘 들고 멋있고 살기 좋은 집",
            price: "전세 7억 6천",
            type: "아파트",
            info: "12월 25일부터 입주 가능, 6/15층",
            number: 123456
        },
        {
            id: 4,
            name: "무슨무슨 아파트",
            explain: "햇빛 잘 들고 멋있고 살기 좋은 집",
            price: "전세 7억 6천",
            type: "아파트",
            info: "12월 25일부터 입주 가능, 6/15층",
            number: 123456
        },
        {
            id: 5,
            name: "무슨무슨 아파트",
            explain: "햇빛 잘 들고 멋있고 살기 좋은 집",
            price: "전세 7억 6천",
            type: "아파트",
            info: "12월 25일부터 입주 가능, 6/15층",
            number: 123456
        }
    ]);
    const [keyword, setKeyword] = useState<string>("");
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log(page);
        getAptList();
        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page]);

    const getAptList = async () => {
        if (isLoading) return;

        setIsLoading(true);
        const response = await AptApi.getAptList(lat, lng, page, "type", "aptRenttype");
        
        if (response && response.length > 0) {
            setAptList((prevAptList) => [...prevAptList, ...response]);
        }

        setIsLoading(false);
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
        setPage((prevPage) => prevPage + 1);
    };

    const recommendAptList = async () => {
        alert("기능 구현 중입니다.");
    }

    return (
        <HouseListStyle>
            <HouseSearch keyword={keyword} setKeyword={setKeyword} />
            <HosueItemListStyle>
                {
                    aptList && aptList.map((apt, index) => (
                        <HouseListItem key={index} data={apt} />
                    ))
                }
            </HosueItemListStyle>
            {isLoading && <p>Loading...</p>}
            <HouseItemRecommendButtonStyle type="button" onClick={recommendAptList}>AI 매물 추천하기</HouseItemRecommendButtonStyle>
        </HouseListStyle>
    )
}

export default HouseList;
