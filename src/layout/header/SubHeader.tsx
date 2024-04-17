import { SubHeaderMenuItemStyle, SubHeaderMenuStyle, SubHeaderStyle } from "../style/layout.style";

const SubHeader = () => {
    return (
        <SubHeaderStyle>
            <SubHeaderMenuStyle>
                <SubHeaderMenuItemStyle>부동산 유형</SubHeaderMenuItemStyle>
                <SubHeaderMenuItemStyle>지역 거래</SubHeaderMenuItemStyle>
                <SubHeaderMenuItemStyle>거래 유형</SubHeaderMenuItemStyle>
                <SubHeaderMenuItemStyle>특징별 유형</SubHeaderMenuItemStyle>
            </SubHeaderMenuStyle>
        </SubHeaderStyle>
    )
}

export default SubHeader;