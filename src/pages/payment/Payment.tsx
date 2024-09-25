import "./style/payment.css";
import React from "react";
import { PaymentContainer } from "./style/payment.style";
import PaymentBlock from "../../components/payment/PaymentBlock";
import { ReactComponent as LOGO } from "../../assets/icon/payment-logo.svg";
import { ReactComponent as X} from "../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";

const Payment: React.FC = () => {
    const navigate = useNavigate();

    return (
        <PaymentContainer>
            <div className="container">
                <div className="payment-header">
                    <X className="icon" onClick={() => navigate(-1)} />
                </div>
                <div className="main-title">
                    <LOGO className="logo" />
                    <p className="main">TOP BDS 와 부동산 마스터가 되어보세요</p>
                    <p className="sub">연간 1,000,000 부동산 정보를</p>
                </div>
                <div className="price-info">
                    <PaymentBlock type="PRO" price="1,000" use={true} items={["매물 미래 가격 확인", "보고서 인쇄", "인공지능 매물 추천 (정식)"]}/>
                    <PaymentBlock type="ENTERPRISE" price="1,000" use={false} items={["매물 미래 가격 확인", "보고서 인쇄", "인공지능 매물 추천 (정식)"]}/>
                </div>
            </div>
        </PaymentContainer>
    )
}

export default Payment;