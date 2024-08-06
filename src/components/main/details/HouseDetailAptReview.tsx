import "./style/detail.css"; 
import React, { useEffect, useRef, useState } from "react";
import { HouseDetailAptReviewStyle } from "../style/main-item.style";
import { ReactComponent as EmptyStarIcon } from "../../../assets/icon/star.svg";
import { ReactComponent as FillStarIcon } from "../../../assets/icon/fill-star.svg";
import AptApi from "../../../core/apis/apt/Apt.api";

interface HouseDetailAptReviewProps {
    aptId: number;
}

const HouseDetailAptReview: React.FC<HouseDetailAptReviewProps> = ({ aptId }) => {
    const [ reviewList, setReviewList ] = useState<{
        icon: string,
        nickName: string,
        star: number,
        date: string,
        comment: string
    }[]>([]);
    const comment = useRef<HTMLInputElement>(null);
    const [ rating, setRating ] = useState<number>(0);

    const showStar = (star: number) => {
        const stars = [];
        for (let i = 0; i < star; i++) {
            stars.push(<FillStarIcon key={i} className="icon" />);
        }
        return stars;
    }

    // useEffect(() => {
    //     getAptReviewList();
    // }, [])

    const getAptReviewList = async () => {
        const response = await AptApi.getReviewList(0, aptId);
        
        console.log(response);
        setReviewList(response);
    }

    const createAptReview = async () => {
        const response = await AptApi.createReview(
            comment.current!.value, rating, aptId
        );
        console.log(response);

        if (response) {
            alert("리뷰를 작성하였습니다.");
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
                <button type="button" className="review-btn" onClick={createAptReview}>작성</button>
            </div>
            <div className="review-list">
                {reviewList && reviewList.map((review, index) =>
                    <div className="item" key={index}>
                        <div className="user">
                            <div className="user-data">
                                <div className="icon">
                                    <img src={review.icon} />
                                </div>
                                <div className="data">
                                    <span className="nickname">{review.nickName}</span>
                                    <span className="date" >{review.date}</span>
                                </div>
                            </div>
                            <div className="user-star">
                                {showStar(review.star)}
                            </div>
                        </div>
                        <span className="comment">{review.comment}</span>
                    </div>
                )}
            </div>
        </HouseDetailAptReviewStyle>
    )
}

export default HouseDetailAptReview;