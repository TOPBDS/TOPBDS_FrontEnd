import { customAxios } from "../../util/customAxios";
import { CreateBlogRequest, UpdateBlogRequest } from "./blog.param";

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

            window.location.href = '/login';
        } catch (e: any) {
            console.error(e);
            return e;
        }
    }

    public async getBlog(id: number): Promise<any> {
        try {
            const response = await customAxios.get(`/blog/find/${id}`);

            return response;
        } catch (e: any) {
            console.error(e);
            return e;
        }
    }

    public async getBlogList(page: number): Promise<any> {
        try {
            const response = await customAxios.get(`/blog/find-all?page=${page}&size=10`);

            return response;
        } catch (e: any) {
            console.error(e);
            return e;
        }
    }
}

export default new Blog();