import React, { useState } from "react";
import "./style/blog.css";
import { BlogContainer } from "./style/blog.style";
import BlogHeader from "../../components/blog/BlogHeader";
import BlogMenu from "../../components/blog/BlogMenu";
import BlogList from "../../components/blog/BlogList";
import { useLocation } from "react-router-dom";
import BlogDetail from "../../components/blog/BlogDetail";

const Blog: React.FC = () => {
    const [menu, setMenu] = useState<string>("BLOG");
    const { pathname } = useLocation();
    const element = pathname.split("/")[2];

    return (
        <BlogContainer>
            <BlogHeader />
            <BlogMenu menu={menu} setMenu={setMenu}/>
            <BlogList menu={menu} />
            {
                element && (
                    <BlogDetail id={Number(element)} />
                )
            }
        </BlogContainer>
    )
}

export default Blog;