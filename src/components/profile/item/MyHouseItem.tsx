import React from "react";
import "../style/profile.css";
import { MyHouseImageStyle, MyHouseItemContent, MyHouseItemInfo, MyHouseItemInfoStyle, MyHouseItemNumber, MyHouseItemNumberReview, MyHouseItemPrice, MyHouseItemReview, MyHouseItemStyle, MyHouseItemTitle, MyHouseItemTopStyle, MyHouseItemType, MyHouseListItemStyle } from "../style/profile.style";
import { useNavigate } from "react-router-dom";

interface MyHouseListItemProps {
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

const MyHouseListItem: React.FC<MyHouseListItemProps> = ({
    data
}) => {
    const naviagte = useNavigate();

    return (
        <MyHouseListItemStyle onClick={() => naviagte("/item/" + data?.id)}>
            <MyHouseItemTopStyle>
                <MyHouseItemStyle>
                        <MyHouseItemTitle>{data?.name}</MyHouseItemTitle>
                    <MyHouseItemContent>{data?.explain}</MyHouseItemContent>
                    <MyHouseItemPrice>{data?.price}</MyHouseItemPrice>
                    <MyHouseItemInfoStyle>
                        <MyHouseItemType>{data?.type}</MyHouseItemType>
                        <MyHouseItemInfo>{data?.info}</MyHouseItemInfo>
                    </MyHouseItemInfoStyle>
                </MyHouseItemStyle>
                <MyHouseImageStyle></MyHouseImageStyle>
            </MyHouseItemTopStyle>
            <MyHouseItemNumberReview>
                <MyHouseItemNumber>매물 추천 번호 : {data?.number}</MyHouseItemNumber>
                <MyHouseItemReview>리뷰 작성</MyHouseItemReview>
            </MyHouseItemNumberReview>
        </MyHouseListItemStyle>
    )
}

export default MyHouseListItem;