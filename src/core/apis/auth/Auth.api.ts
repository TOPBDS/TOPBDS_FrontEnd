import axios from "axios";
import config from "../../config/config";
import { customAxios } from "../../util/customAxios";
import { LoginRequest, RegisterRequest } from "./auth.param";

class Auth {
    
    public async login(param: LoginRequest): Promise<any> {
        try {
            const response = await axios.post(`${config.config}/auth/sign-in`, param);

            localStorage.setItem("AccessToken", response.data.data.accessToken);
            localStorage.setItem("RefreshToken", response.data.data.refreshToken);
            localStorage.setItem("user", response.data.data.userData);

            return response.data.data;
        } catch (e: any) {
            return "error";
        }
    }

    public async register(param: RegisterRequest): Promise<any> {
        try {
            await axios.post(`${config.config}/auth/sign-up`, param);

            window.location.href = '/login';
        } catch (e: any) {
            return "error";
        }
    }

    public async loginCheck() {
        try {
            const response = await customAxios.post("/auth/check");
            return response.data.data;
        } catch (e) {
            return "error";
        }
    }
}

export default new Auth();