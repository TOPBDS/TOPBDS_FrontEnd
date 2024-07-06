import "./style/blog.css";
import React from "react";
import { BlogListItemStyle } from "./style/blog.style";
import { useNavigate } from "react-router-dom";

const BlogListItem: React.FC = () => {
    const navigate = useNavigate();

    return (
        <BlogListItemStyle onClick={() => navigate("/blog/1")}>
            <img src="/" className="image" />
            <div className="blog-info">
                <p className="title">제목을 입력해 주세요.</p>
                <p className="sub">상세 제목 또는 부가 설명을 입력해 주세요.</p>
                <p className="date">업로드 날짜를 입력해 주세요.</p>
            </div>
        </BlogListItemStyle>
    )
}

export default BlogListItem;