import "./style/main.css"; 
import { useNavigate } from "react-router-dom";
import { HouseImageStyle, HouseItemContent, HouseItemInfo, HouseItemInfoStyle, HouseItemNumber, HouseItemPrice, HouseItemStyle, HouseItemTitle, HouseItemTopStyle, HouseItemType, HouseListItemStyle } from "./style/main.style";
import React from "react";

interface HouseItemProps {
    data: {
        id: number;
        name: string;
        explain: string;
        price: string;
        type: string;
        info: string;
        number: number;
    }
}

const HouseListItem: React.FC<HouseItemProps> = ({
    data
}) => {
    const naviagte = useNavigate();

    return (
        <HouseListItemStyle onClick={() => naviagte("/item/" + data?.id)}>
            <HouseItemTopStyle>
                <HouseItemStyle>
                        <HouseItemTitle>{data?.name}</HouseItemTitle>
                    <HouseItemContent>{data?.explain}</HouseItemContent>
                    <HouseItemPrice>{data?.price}</HouseItemPrice>
                    <HouseItemInfoStyle>
                        <HouseItemType>{data?.type}</HouseItemType>
                        <HouseItemInfo>{data?.info}</HouseItemInfo>
                    </HouseItemInfoStyle>
                    <HouseItemNumber>매물 추천 번호 : {data?.number}</HouseItemNumber>
                </HouseItemStyle>
                <HouseImageStyle></HouseImageStyle>
            </HouseItemTopStyle>
        </HouseListItemStyle>
    )
}

export default HouseListItem;