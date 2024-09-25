import "./style/payment.css";
import React, { useEffect } from "react";
import { PaymentBlockStyle } from "./style/payment.style";
import { ReactComponent as CheckIcon } from "../../assets/icon/check.svg";

interface PaymentBlock {
    type: string;
    price: string;
    use: boolean;
    items: string[];
}

const PaymentBlock: React.FC<PaymentBlock> = ({
    type,
    price,
    use,
    items
}) => {
    const requestPayment = () => {
        console.log(String(Math.floor(Math.random()*1000000)).padStart(6, "0"));
        if (!use) {
            if (typeof window !== 'undefined') {
                const payElem: any = window;
                const { AUTHNICE } = payElem;
                AUTHNICE.requestPay({
                    clientId: 'S2_e43eaeb544a14bcf945d11578b13c656',
                    method: 'card',
                    orderId: String(Math.floor(Math.random()*1000000)).padStart(6, "0"),
                    amount: Number(price.replaceAll(",", "")),
                    goodsName: 'TOPBDS-' + type,
                    returnUrl: `http://localhost:8080/server/payment/request`,
                    fnError: function (result: any) {
                        alert(result.errorMsg)
                    }
                });
            }
        } else {
            alert("이미 사용 중인 요금제입니다.");
        }
    };

    return (
        <PaymentBlockStyle>
            <div className="title-container">
                <div className="title">{type}</div>
                <div className="price">{price}원 / 월</div>
            </div>
            <div className="explain"> 
                {
                    items && items.map((item, index) => (
                        <div className="explain-item">
                            <CheckIcon className="icon" />
                            <p className="item-text" key={index}>{item}</p>
                        </div>
                    ))
                }
            </div>
            <button type="button" className={`use-button ${use ? "active" : ""}`} onClick={() => requestPayment()}>{use ? "현재 사용중" : "사용하기"}</button>
        </PaymentBlockStyle>
    )
}

export default PaymentBlock;