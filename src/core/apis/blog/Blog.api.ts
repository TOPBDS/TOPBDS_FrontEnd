import axios from "axios";
import { customAxios } from "../../util/customAxios";
import { CreateBlogRequest, UpdateBlogRequest } from "./blog.param";
import config from "../../config/config";

class Blog {
    
    public async createBlog(param: CreateBlogRequest): Promise<any> {
        try {
          const data = await customAxios.post(`/blog/create`, param);

          return "";
        } catch (e: any) {
          console.error(e);
          return e;
        }
    }

    public async updateBlog(id: number, param: UpdateBlogRequest): Promise<any> {
        try {
            await customAxios.patch(`/blog/update/${id}`, param);

            window.location.href = '/blog/' + id;
        } catch (e: any) {
            console.error(e);
            return e;
        }
    }

    public async getBlog(id: number): Promise<any> {
        try {
            const response = await axios.get(`${config.config}/blog/find/${id}`);

            return response?.data?.data;
        } catch (e: any) {
            console.error(e);
            return e;
        }
    }

    public async getBlogList(page: number, type: string): Promise<any> {
        try {
            const response = await axios.get(`${config.config}/blog/find-all?page=${page}&size=10&type=${type}`);

            return response.data.data.data;
        } catch (e: any) {
            console.error(e);
            return e;
        }
    }
}

export default new Blog();