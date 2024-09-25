import { customAxios } from "../../util/customAxios";

class User {
    public async getUserInfo() {
        try {
            const response = await customAxios.get("/server/user/info");
            return response.data.data;
        } catch (e) {
            return "error";
        }
    }

    public async updateUserInfo(name: string, email: string, phone: string) {
        try {
            const response = await customAxios.post("/server/user/update", {
                name, email, phone
            });

            return response.data;
        } catch (e) {
            return "error";
        }
    }

    public async getUserInterest() {
        try {
            const response = await customAxios.get("/server/user/find/interest");
            return response.data.data;
        } catch (e) {
            return "error";
        }
    }

    public async updateUserInterest(age: number, gender: string, price: string, size: string, ltv: string) {
        try {
            const response = await customAxios.post("/server/user/update/interest", {
                age, gender, price, size, ltv
            });

            console.log(response);

            return response.data;
        } catch (e) {
            return "error";
        }
    }

    public async getUserNotifyList() {
        try {
            const response = await customAxios.get("/server/user/find/notify");
            return response.data.data;
        } catch (e) {
            return "error";
        }
    }
}

export default new User();