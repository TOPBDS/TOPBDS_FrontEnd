import "./style/main.css";    
import { HouseSearchItemStyle, HouseSearchStyle, HouseSearchIcon} from "./style/main.style";

const HouseSearch = () => {
    return (
        <HouseSearchStyle>
            <HouseSearchItemStyle type="text" placeholder="찾으시는 매물을 입력해 주세요."/>
            <HouseSearchIcon>
                <span className="material-symbols-rounded">search</span>
            </HouseSearchIcon>
        </HouseSearchStyle>
    )
}

export default HouseSearch;