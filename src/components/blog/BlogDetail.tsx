import { useEffect, useState } from "react";
import { BlogDetailStyle } from "./style/blog.style";
import BlogApi from "../../core/apis/blog/Blog.api";
import { ReactComponent as BlogCloseIcon } from "../../assets/icon/close.svg";
import { useNavigate } from "react-router-dom";

interface BlogDetailProps {
    id: number;
}

const BlogDetail: React.FC<BlogDetailProps> = ({
    id
}) => {
    const navigate = useNavigate();
    const [ data, setData ] = useState<{
        title: string,
        content: string,
        img: string
    }>({
        title: "test" + id,
        content: "test" + id,
        img: ""
    });

    useEffect(() => {
        // getBlogData();
    }, [])

    const getBlogData = async () => {
        const response = await BlogApi.getBlog(id);

        setData(response);
    }

    return (
        <BlogDetailStyle>
            <div className="blog-title">
                <p>{data?.title}</p>
                <BlogCloseIcon className="close" onClick={() => navigate(-1)} />
            </div>
            <img src={data?.img} />
            <div className="blog-content">
                <p>{data?.content}</p>
            </div>
        </BlogDetailStyle>
    )
}

export default BlogDetail;