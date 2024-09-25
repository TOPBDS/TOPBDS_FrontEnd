import "./style/profile.css";
import React, { useEffect, useState } from "react";
import { FAQStyle } from "./style/profile.style";
import FaqItem from "./FaqItem";
import FAQApi from "../../core/apis/faq/FAQ.api";

interface FAQDTO {
    title: string;
    content: string;
}

const FAQ: React.FC = () => {
    const [ faqList, setFaqList ] = useState<FAQDTO[]>([]);

    useEffect(() => {
        getFaqList();
    }, []);

    const getFaqList = async () => {
        const response = await FAQApi.getFaqList();

        if (response !== "error") {
            setFaqList(response);
        }
    }

    return (
        <FAQStyle>
            <div className="list">
                {
                    faqList.length > 0 ? (
                        faqList.map((faq) => (
                            <FaqItem title={faq?.title} content={faq?.content} />
                        ))
                    ) : (
                        <div className="no-content">등록된 FAQ가 없습니다.</div>
                    )
                }
            </div>
        </FAQStyle>
    )
}

export default FAQ;