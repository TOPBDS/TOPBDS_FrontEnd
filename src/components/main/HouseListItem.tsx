import "./style/main.css"; 
import { useNavigate } from "react-router-dom";
import { HouseImageStyle, HouseItemContent, HouseItemInfo, HouseItemInfoStyle, HouseItemNumber, HouseItemPrice, HouseItemStyle, HouseItemTitle, HouseItemTopStyle, HouseItemType, HouseListItemStyle } from "./style/main.style";

const HouseListItem = () => {
    const naviagte = useNavigate();

    return (
        <HouseListItemStyle onClick={() => naviagte("/item/1")}>
            <HouseItemTopStyle>
                <HouseItemStyle>
                        <HouseItemTitle>무슨무슨 아파트</HouseItemTitle>
                    <HouseItemContent>햇빛 잘 들고 멋있고 살기 좋은 집</HouseItemContent>
                    <HouseItemPrice>전세 7억 6천</HouseItemPrice>
                    <HouseItemInfoStyle>
                        <HouseItemType>아파트</HouseItemType>
                        <HouseItemInfo>12월 25일부터 입주 가능, 6/15층</HouseItemInfo>
                    </HouseItemInfoStyle>
                    <HouseItemNumber>매물 추천 번호 : 123456</HouseItemNumber>
                </HouseItemStyle>
                <HouseImageStyle></HouseImageStyle>
            </HouseItemTopStyle>
        </HouseListItemStyle>
    )
}

export default HouseListItem;