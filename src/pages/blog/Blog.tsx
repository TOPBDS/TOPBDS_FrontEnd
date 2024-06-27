import React, { useState } from "react";
import "./style/blog.css";
import { BlogContainer } from "./style/blog.style";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogMenu from "../../components/blog/BlogMenu";
import BlogList from "../../components/blog/BlogList";

const Blog: React.FC = () => {
    const [menu, setMenu] = useState<string>("blog");

    return (
        <BlogContainer>
            <BlogHeader />
            <BlogMenu menu={menu} setMenu={setMenu}/>
            <BlogList menu={menu} />
        </BlogContainer>
    )
}

export default Blog;