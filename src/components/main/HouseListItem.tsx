import { HouseItemContent, HouseItemInfo, HouseItemInfoStyle, HouseItemNumber, HouseItemPrice, HouseItemStyle, HouseItemTitle, HouseItemType, HouseListItemStyle } from "./style/main.style";

const HouseListItem = () => {
    return (
        <HouseListItemStyle>
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
        </HouseListItemStyle>
    )
}

export default HouseListItem;