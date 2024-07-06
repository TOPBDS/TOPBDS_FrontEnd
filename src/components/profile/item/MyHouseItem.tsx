import "../style/profile.css";
import { MyHouseImageStyle, MyHouseItemContent, MyHouseItemInfo, MyHouseItemInfoStyle, MyHouseItemNumber, MyHouseItemNumberReview, MyHouseItemPrice, MyHouseItemReview, MyHouseItemStyle, MyHouseItemTitle, MyHouseItemTopStyle, MyHouseItemType, MyHouseListItemStyle } from "../style/profile.style";
import { useNavigate } from "react-router-dom";

const MyHouseListItem = () => {
    const naviagte = useNavigate();

    return (
        <MyHouseListItemStyle onClick={() => naviagte("/item/1")}>
            <MyHouseItemTopStyle>
                <MyHouseItemStyle>
                        <MyHouseItemTitle>무슨무슨 아파트</MyHouseItemTitle>
                    <MyHouseItemContent>햇빛 잘 들고 멋있고 살기 좋은 집</MyHouseItemContent>
                    <MyHouseItemPrice>전세 7억 6천</MyHouseItemPrice>
                    <MyHouseItemInfoStyle>
                        <MyHouseItemType>아파트</MyHouseItemType>
                        <MyHouseItemInfo>12월 25일부터 입주 가능, 6/15층</MyHouseItemInfo>
                    </MyHouseItemInfoStyle>
                </MyHouseItemStyle>
                <MyHouseImageStyle></MyHouseImageStyle>
            </MyHouseItemTopStyle>
            <MyHouseItemNumberReview>
                <MyHouseItemNumber>매물 추천 번호 : 123456</MyHouseItemNumber>
                <MyHouseItemReview>리뷰 작성</MyHouseItemReview>
            </MyHouseItemNumberReview>
        </MyHouseListItemStyle>
    )
}

export default MyHouseListItem;