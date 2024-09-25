import axios from "axios";
import config from "../../config/config";
import { customAxios } from "../../util/customAxios";
import { LoginRequest, RegisterRequest } from "./auth.param";

class Auth {
    
    public async login(param: LoginRequest): Promise<any> {
        try {
            const response = await axios.post(`${config.config}/server/auth/sign-in`, param);

            localStorage.setItem("AccessToken", response.data.data.accessToken);
            localStorage.setItem("RefreshToken", response.data.data.refreshToken);
            localStorage.setItem("user", response.data.data.userData);

            return 'success';
        } catch (e: any) {
            return e;
        }
    }

    public async register(param: RegisterRequest): Promise<any> {
        try {
            await axios.post(`${config.config}/server/auth/sign-up`, param);

            window.location.href = '/login';
        } catch (e: any) {
            return e;
        }
    }

    public async loginCheck() {
        if (localStorage.getItem("RefreshToken") !== null) {
            try {
                const response = await axios.post(`${config.config}/server/auth/check?token=${localStorage.getItem("RefreshToken")}`);
    
                localStorage.setItem("AccessToken", response.data.data.accessToken);
                localStorage.setItem("RefreshToken", response.data.data.refreshToken);
                localStorage.setItem("user", response.data.data.userData);
    
                return response.data.data;
            } catch (e) {
                return "error";
            }
        } else {
            return "error";
        }
    }

    public async sendMail(address: string, number: string) {
        try {
            const response = await axios.post(`${config.config}/server/auth/send/mail`, {
                address, number
            });

            return response.data;
        } catch (e) {
            return "error";
        }
    }
}

export default new Auth();