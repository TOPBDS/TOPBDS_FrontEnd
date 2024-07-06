import React from "react";
import { ReactComponent as ArrowBottom } from "../../assets/icon/black_arrow_bottom.svg";

const FaqItem: React.FC = () => {
    return (
        <div className="faq-item">
            <div className="title">
                <p>이거 어케 하는거임</p>
                <ArrowBottom className="icon" />
            </div>
        </div>
    )
}

export default FaqItem;