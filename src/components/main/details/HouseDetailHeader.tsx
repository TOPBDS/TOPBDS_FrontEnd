import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailHeaderStyle, HouseHeader } from "../style/main-item.style";
import { ReactComponent as HouseCloseIcon } from "../../../assets/icon/close.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icon/heart.svg";
import { ReactComponent as FillHeartIcon } from "../../../assets/icon/fill-heart.svg";
import { useNavigate } from "react-router-dom";
import ApartImage  from "../../../assets/image/apartment.png";
import AptApi from "../../../core/apis/apt/Apt.api";

interface HouseDetailHeaderProps {
    aptId: number;
}

interface AptDTO {
    aptId: number;
    location: string;
    subLocation: string;
    aptName: string;
    aptPrice: string;
    aptAddress: string;
    aptLatitude: number;
    aptLongitude: number;
    squareFootage: string;
}

const HouseDetailHeader: React.FC<HouseDetailHeaderProps> = ({ aptId }) => {
    const navigate = useNavigate();
    const [ aptInfo, setAptInfo ] = useState<AptDTO>();
    const [ like, setLike ] = useState<boolean>(false);

    useEffect(() => {
        getAptInfo();
        getAptLike();
    }, []);
    
    const getAptInfo = async () => {
        const response = await AptApi.getAptInfo(aptId);
        
        setAptInfo(response?.data);
    }

    const getAptLike = async () => {
        if (localStorage.getItem("accessToken")) {
            const response = await AptApi.getAptLike(aptId);
    
            setLike(response?.data);
        }
    }

    const setInterestApt = async () => {
        const response = await AptApi.setInterestApt(aptId, like);

        if (response) {
            alert("관심 매물에 등록하였습니다");
        }
    }

    return (
        <HouseDetailHeaderStyle>
            <HouseHeader>
                아파트 정보
                <HouseCloseIcon className="close" onClick={() => navigate(-1)} />
            </HouseHeader>
            <div className="image-container">
                <h2>{aptInfo?.aptName}</h2>
                {/* <img src={aptInfo?.aptImage ? aptInfo.aptImage : ApartImage} alt="preview" className="preview-image"/> */}
            </div>
            <div className="interested">
                {
                    like ? (
                        <FillHeartIcon className="icon" onClick={setInterestApt} />
                    ) : (
                        <HeartIcon className="icon" onClick={setInterestApt} />
                    )
                }
                &nbsp; 관심 매물 추가하기
            </div>
        </HouseDetailHeaderStyle> 
    )
}

export default HouseDetailHeader;