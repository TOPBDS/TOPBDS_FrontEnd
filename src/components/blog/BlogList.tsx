import "./style/blog.css";
import React, { useEffect, useState } from "react";
import { BlogListStyle } from "./style/blog.style";
import BlogListItem from "./BlogListItem";
import BlogApi from "../../core/apis/blog/Blog.api";

interface BlogList {
    menu: string;
}

const BlogList: React.FC<BlogList> = ({ menu }) => {
    const [blogList, setBlogList] = useState<[]>([]);

    const getBlogList = async () => {
        const data = await BlogApi.getBlogList(1, menu);

        setBlogList(data);
    }

    useEffect(() => {
        getBlogList();
    }, []);

    return (
        <BlogListStyle>
            {
                blogList.length > 0 && blogList.map((item: any) => (
                    <BlogListItem 
                        id={item.id}
                        img={item.img}
                        title={item.title} 
                        subTitle={item.content}
                        date={item.createdDateTime}
                    />
                ))
            }
        </BlogListStyle>
    )
}

export default BlogList;