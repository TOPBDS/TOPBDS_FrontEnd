import "./style/detail.css"; 
import React, { useState } from "react";
import { HouseDetailAptReviewStyle } from "../style/main-item.style";
import { ReactComponent as EmptyStarIcon } from "../../../assets/icon/star.svg";
import { ReactComponent as FillStarIcon } from "../../../assets/icon/fill-star.svg";

const HouseDetailAptReview: React.FC = () => {
    const [ reviewList, setReviewList ] = useState<{
        icon: string,
        nickName: string,
        star: number,
        date: string,
        comment: string
    }[]>([
        {
            icon: "",
            nickName: "이름",
            star: 3,
            date: "2345.67.89",
            comment: "리뷰"
        },
        {
            icon: "",
            nickName: "이름",
            star: 3,
            date: "2345.67.89",
            comment: "리뷰"
        },
    ]);

    const showStar = (star: number) => {
        const stars = [];
        for (let i = 0; i < star; i++) {
            stars.push(<FillStarIcon key={i} className="icon" />);
        }
        return stars;
    }

    return (
        <HouseDetailAptReviewStyle>
            <div className="header">
                <div className="top">
                    <h4>아파트 평점</h4>
                </div>
            </div>
            <div className="input-star">
                <div className="star-list">
                    <EmptyStarIcon className="icon" />
                    <EmptyStarIcon className="icon" />
                    <EmptyStarIcon className="icon" />
                    <EmptyStarIcon className="icon" />
                    <EmptyStarIcon className="icon" />
                </div>
                <input type="text" placeholder="리뷰를 작성해주세요." className="input-review" />
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
                                    <span className="date " >{review.date}</span>
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