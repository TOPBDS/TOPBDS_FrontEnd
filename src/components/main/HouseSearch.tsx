import "./style/main.css";    
import { HouseSearchItemContainer, HouseSearchItemStyle, HouseSearchStyle } from "./style/main.style";
import { ReactComponent as HouseSearchIcon } from "../../assets/icon/search.svg";
import React, { Dispatch, useState } from "react";

interface HouseSearchProps {
    keyword: string;
    setKeyword: Dispatch<React.SetStateAction<string>>;
}

const HouseSearch: React.FC<HouseSearchProps> = ({ keyword, setKeyword }) => {
    const searchApts = () => {
        console.log(keyword);
    }

    return (
        <HouseSearchStyle>
            <HouseSearchItemContainer>
                <HouseSearchItemStyle 
                    type="text" 
                    placeholder="찾으시는 매물을 입력해 주세요." 
                    value={keyword} 
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <HouseSearchIcon className="search-icon" onClick={() => searchApts()} />
            </HouseSearchItemContainer>
        </HouseSearchStyle>
    )
}

export default HouseSearch;