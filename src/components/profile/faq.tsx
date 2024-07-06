import "./style/profile.css";
import React from "react";
import { FAQStyle } from "./style/profile.style";
import FaqItem from "./FaqItem";

const FAQ: React.FC = () => {
    return (
        <FAQStyle>
            <div className="list">
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
                <FaqItem />
            </div>
        </FAQStyle>
    )
}

export default FAQ;