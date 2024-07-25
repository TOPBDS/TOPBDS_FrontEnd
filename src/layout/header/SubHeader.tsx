import { SubHeaderMenuStyle, SubHeaderStyle } from "../style/layout.style";
import FilterSelect from "../../components/common/FillterSelect";

const SubHeader = () => {
    return (
        <SubHeaderStyle>
            <SubHeaderMenuStyle>
                <FilterSelect optionName="부동산 유형" optionList={["아파트", "오피스텔", "상가", "건물"]} />
                <FilterSelect optionName="지역 거래" optionList={["시", "읍", "구", "면", "군", "동"]} />
                <FilterSelect optionName="거래 유형" optionList={["매매", "전세", "월세"]} />
                {/* <FilterSelect optionName="특징별 유형" optionList={["특징1", "특징2", "특징3", "특징4"]} /> */}
            </SubHeaderMenuStyle>
        </SubHeaderStyle>
    )
}

export default SubHeader;