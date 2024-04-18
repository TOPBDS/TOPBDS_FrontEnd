import { SubHeaderMenuItemStyle, SubHeaderMenuStyle, SubHeaderStyle } from "../style/layout.style";
import { ReactComponent as ArrowBottom } from "../../assets/icon/arrow_bottom.svg";

const SubHeader = () => {
    return (
        <SubHeaderStyle>
            <SubHeaderMenuStyle>
                <SubHeaderMenuItemStyle>부동산 유형 <ArrowBottom /></SubHeaderMenuItemStyle>
                <SubHeaderMenuItemStyle>지역 거래 <ArrowBottom /></SubHeaderMenuItemStyle>
                <SubHeaderMenuItemStyle>거래 유형 <ArrowBottom /></SubHeaderMenuItemStyle>
                <SubHeaderMenuItemStyle>특징별 유형 <ArrowBottom /></SubHeaderMenuItemStyle>
            </SubHeaderMenuStyle>
        </SubHeaderStyle>
    )
}

export default SubHeader;