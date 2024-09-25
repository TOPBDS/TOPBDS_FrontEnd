import React, { useState } from "react";
import { ReactComponent as ArrowBottom } from "../../assets/icon/black_arrow_bottom.svg";

interface FaqItemProps {
    title: string;
    content: string;
}

const FaqItem: React.FC<FaqItemProps> = ({
    title,
    content
}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="faq-item">
            <div className="title" onClick={() => setOpen(!open)}>
                <p>{title}</p>
                <ArrowBottom className="icon" />
            </div>
            {
                open && <p className="faq-content">{content}</p> 
            }
        </div>
    )
}

export default FaqItem;