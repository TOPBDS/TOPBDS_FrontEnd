import { customAxios } from "../../util/customAxios";

class FAQ {
    public async getFaqList() {
        try {
            const response = await customAxios.get("/server/faq/find-all");
            return response.data.data;
        } catch (e) {
            return "error";
        }
    }
}

export default new FAQ();