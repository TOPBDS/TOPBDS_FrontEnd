import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailHeaderStyle, HouseHeader } from "../style/main-item.style";
import { ReactComponent as HouseCloseIcon } from "../../../assets/icon/close.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icon/heart.svg";
import { useNavigate } from "react-router-dom";
import ApartImage  from "../../../assets/image/apartment.png";
import AptApi from "../../../core/apis/apt/Apt.api";

interface HouseDetailHeaderProps {
    aptId: number;
}

const HouseDetailHeader: React.FC<HouseDetailHeaderProps> = ({ aptId }) => {
    const navigate = useNavigate();
    const [ aptInfo, setAptInfo ] = useState<{
        aptImage: string
    }>();

    useEffect(() => {
        getAptInfo();
    }, []);
    
    const getAptInfo = async () => {
        const response = await AptApi.getAptInfo(aptId);
        
        setAptInfo(response);
    }

    const setInterestApt = async () => {
        const response = await AptApi.setInterestApt(aptId);

        console.log(response);
    }

    return (
        <HouseDetailHeaderStyle>
            <HouseHeader>
                아파트 정보
                <HouseCloseIcon className="close" onClick={() => navigate(-1)} />
            </HouseHeader>
            <div className="image-container">
                <img src={aptInfo?.aptImage ? aptInfo.aptImage : ApartImage} alt="preview" className="preview-image"/>
            </div>
            <div className="interested">
                <HeartIcon className="icon" onClick={setInterestApt} />
                &nbsp; 관심 매물 추가하기
            </div>
        </HouseDetailHeaderStyle> 
    )
}

export default HouseDetailHeader;