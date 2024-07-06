import "./style/blog.css";
import React from "react";
import { BlogListStyle } from "./style/blog.style";
import BlogListItem from "./BlogListItem";

interface BlogList {
    menu: string;
}

const BlogList: React.FC<BlogList> = ({ menu }) => {
    return (
        <BlogListStyle>
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
            <BlogListItem />
        </BlogListStyle>
    )
}

export default BlogList;