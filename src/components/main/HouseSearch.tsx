import "./style/main.css";    
import { HouseSearchItemStyle, HouseSearchStyle} from "./style/main.style";

const HouseSearch = () => {
    return (
        <HouseSearchStyle>
            <HouseSearchItemStyle type="text" placeholder="찾으시는 매물을 입력해 주세요."/>
        </HouseSearchStyle>
    )
}

export default HouseSearch;