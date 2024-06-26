import "./style/payment.css";
import React from "react";
import { PaymentBlockStyle } from "./style/payment.style";

interface PaymentBlock {
    title: string;
    subTitle: string;
    price: string;
    use: boolean;
    items: string[];
}

const PaymentBlock: React.FC<PaymentBlock> = ({
    title,
    subTitle,
    price,
    use,
    items
}) => {
    return (
        <PaymentBlockStyle>
            <div className="center">
                <div className="title-container">
                    <div className="title">{title}</div>
                    <div className="sub-title">{subTitle}</div>
                </div>
                <div className="price">
                    {price}
                    <p>{price !== "무료" ? "/월" : ""}</p>
                </div>
                <button type="button" className={`use-button ${use ? "active" : ""}`}>{use ? "현재 사용중" : "사용하기"}</button>
            </div>
            <div className="explain">
                <p>포함된 기능</p>
                {
                    items && items.map((item, index) => (
                        <p className="item" key={index}>{item}</p>
                    ))
                }
            </div>
        </PaymentBlockStyle>
    )
}

export default PaymentBlock;