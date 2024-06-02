import "./style/detail.css";
import React from "react";
import { HouseDetailHeaderStyle, HouseHeader } from "../style/main-item.style";
import { ReactComponent as HouseCloseIcon } from "../../../assets/icon/close.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icon/heart.svg";
import { useNavigate } from "react-router-dom";
import ApartImage  from "../../../assets/image/apartment.png";

const HouseDetailHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <HouseDetailHeaderStyle>
            <HouseHeader>
                아파트 정보
                <HouseCloseIcon className="close" onClick={() => navigate(-1)} />
            </HouseHeader>
            <div className="image-container">
                <img src={ApartImage} alt="preview" className="preview-image"/>
            </div>
            <div className="interested">
                <HeartIcon className="icon" />
                &nbsp; 관심 매물 추가하기
            </div>
        </HouseDetailHeaderStyle> 
    )
}

export default HouseDetailHeader;