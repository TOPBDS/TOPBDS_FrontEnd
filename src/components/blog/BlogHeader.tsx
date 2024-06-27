import "./style/blog.css";
import React from "react";
import { BlogHeaderStyle } from "./style/blog.style";
import { ReactComponent as HouseCloseIcon } from "../../assets/icon/close.svg";
import { useNavigate } from "react-router-dom";

const BlogHeader:React.FC = () => {
    const navigate = useNavigate();

    return (
        <BlogHeaderStyle>
            <div className="header">
                <h1>블로그 / 인사이트</h1>
                <HouseCloseIcon className="close" onClick={() => navigate(-1)} />
            </div>
        </BlogHeaderStyle>
    )
}

export default BlogHeader;