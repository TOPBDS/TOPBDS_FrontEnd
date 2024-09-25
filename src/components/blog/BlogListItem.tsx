import "./style/blog.css";
import React from "react";
import { BlogListItemStyle } from "./style/blog.style";
import { useNavigate } from "react-router-dom";

interface BlogItemProps {
    id: number;
    img: string;
    title: string;
    subTitle: string;
    date: string;
}

const BlogListItem: React.FC<BlogItemProps> = ({
    id, img, title, subTitle, date
}) => {
    const navigate = useNavigate();

    return (
        <BlogListItemStyle onClick={() => navigate(`/blog/${id}`)}>
            <img src={img} className="image" />
            <div className="blog-info">
                <p className="title">{title}</p>
                <p className="sub">{subTitle}</p>
                <p className="date">{date}</p>
            </div>
        </BlogListItemStyle>
    )
}

export default BlogListItem;