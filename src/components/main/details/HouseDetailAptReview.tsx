import "./style/detail.css"; 
import React, { useEffect, useRef, useState } from "react";
import { HouseDetailAptReviewStyle } from "../style/main-item.style";
import { ReactComponent as EmptyStarIcon } from "../../../assets/icon/star.svg";
import { ReactComponent as FillStarIcon } from "../../../assets/icon/fill-star.svg";
import AptApi from "../../../core/apis/apt/Apt.api";
import { useNavigate } from "react-router-dom";

interface HouseDetailAptReviewProps {
    aptId: number;
}

interface AptReviewDTO {
    aptRid: number;
    img: string;
    nickname: string;
    review: string;
    star: number;
    date: string;
}

const HouseDetailAptReview: React.FC<HouseDetailAptReviewProps> = ({ aptId }) => {
    const navigate = useNavigate();
    const [ reviewList, setReviewList ] = useState<AptReviewDTO[]>([]);
    const comment = useRef<HTMLInputElement>(null);
    const [ rating, setRating ] = useState<number>(0);

    const showStar = (star: number) => {
        const stars = [];
        for (let i = 0; i < star; i++) {
            stars.push(<FillStarIcon key={i} className="icon" />);
        }
        return stars;
    }

    useEffect(() => {
        getAptReviewList();
    }, []);

    const getAptReviewList = async () => {
        const response = await AptApi.getReviewList(1, aptId);
        
        setReviewList(response?.data?.data?.data);
    }

    const createAptReview = async () => {
        const response = await AptApi.createReview(
            comment.current!.value, rating, aptId
        );

        if (response?.status === 200) {
            alert("리뷰를 작성하였습니다.");
            window.location.reload();
        } else {
            alert("로그인 후 이용해주세요.");
            navigate("/login");
        }
    }

    // 별 클릭 이벤트 핸들러
    const handleClick = (index: number) => {
        if (index + 1 === rating) {
            setRating(0);
        } else {
            setRating(index + 1);
        }
    };

    return (
        <HouseDetailAptReviewStyle>
            <div className="header">
                <div className="top">
                    <h4>아파트 평점</h4>
                </div>
            </div>
            <div className="input-star">
                <div className="star-list">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} onClick={() => handleClick(index)}>
                            {index < rating ? (
                                <FillStarIcon className="icon" />
                            ) : (
                                <EmptyStarIcon className="icon" />
                            )}
                        </span>
                    ))}
                </div>
                <input type="text" placeholder="리뷰를 작성해주세요." ref={comment} className="input-review" />
                <div className="button-display">
                    <button type="button" className="review-btn" onClick={createAptReview}>작성</button>
                </div>
            </div>
            <div className="review-list">
                {reviewList && reviewList.map((review, index) =>
                    <div className="item" key={index}>
                        <div className="user">
                            <div className="user-data">
                                <div className="icon">
                                    <img src={review?.img} />
                                </div>
                                <div className="data">
                                    <span className="nickname">{review?.nickname}</span>
                                    <span className="date" >{review?.date}</span>
                                </div>
                            </div>
                            <div className="user-star">
                                {showStar(review?.star)}
                            </div>
                        </div>
                        <span className="comment">{review?.review}</span>
                    </div>
                )}
            </div>
        </HouseDetailAptReviewStyle>
    )
}

export default HouseDetailAptReview;