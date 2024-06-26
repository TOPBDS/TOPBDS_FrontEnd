import React from "react";
import { PaymentContainer } from "./style/payment.style";
import PaymentBlock from "../../components/payment/PaymentBlock";

const Payment: React.FC = () => {
    return (
        <PaymentContainer>
            <PaymentBlock title="FREE" subTitle="기본 요금제입니다." price="무료" use={true} items={["지도 매물 추천", "상담원 채팅", "인공지능 매물 추천 (베타)", "아파트 평점 리뷰"]}/>
            <PaymentBlock title="PRO" subTitle="부동산 소유 고객님이 사용하는 것을 추천합니다." price="￦28,000원" use={false} items={["매물 미래 가격 확인", "보고서 인쇄", "인공지능 매물 추천 (정식)"]}/>
            <PaymentBlock title="ENTERPRISE" subTitle="개업 공인중개사와 중개법인 고객님이 사용하는 것을 추천합니다." price="￦58,000원" use={false} items={["매물 미래 가격 확인", "보고서 인쇄", "인공지능 매물 추천 (정식)"]}/>
        </PaymentContainer>
    )
}

export default Payment;