import "./style/blog.css";
import React, { Dispatch, SetStateAction } from "react";
import { BlogMenuStyle } from "./style/blog.style";

interface BlogMenu {
    menu: string;
    setMenu: Dispatch<React.SetStateAction<string>>;
}

const BlogMenu: React.FC<BlogMenu> = ({ menu, setMenu }) => {
    return (
        <BlogMenuStyle>
            <div className="menu">
                <div className={`blog ${menu == "blog" ? "active" : ""}`} onClick={() => setMenu('blog')}>블로그</div>
                <div className={`insite ${menu == "insite" ? "active" : ""}`} onClick={() => setMenu('insite')}>인사이트</div>
            </div>
        </BlogMenuStyle>
    )
}

export default BlogMenu;