import axios from "axios";
import config from "../../config/config";
import { customAxios } from "../../util/customAxios";
import { LoginRequest, RegisterRequest } from "./auth.param";

class Auth {
    
    public async login(param: LoginRequest): Promise<any> {
        try {
          const data = await axios.post(`${config.config}/auth/login`, param);

          // TODO : data 형식에 맞춰 accessToken, refreshToken, user 정보 저장

          // localStorage.setItem("AccessToken", data.data.accessToken);
          // localStorage.setItem("RefreshToken", data.data.refreshToken);
          // localStorage.setItem("user", data.data.user);

          return "";
        } catch (e: any) {
          console.error(e);
          return e;
        }
    }

    public async register(param: RegisterRequest): Promise<any> {
        try {
            await axios.post(`${config.config}/auth/register`, param);

            window.location.href = '/login';
        } catch (e: any) {
            switch (e.response.status) {
                case 400:
                return "아이디를 이메일 형식으로 해주세요";
                case 409:
                return "이미 존재하는 아이디입니다";
                case 500:
                return "서버 오류입니다";
            }
        }
    }

    public async loginCheck() {
        try {
            const response = await customAxios.post("/api/v1/auth/check");
            return { bool: true, user: response.data.user };
        } catch (e) {
            return { bool: false };
        }
    }
}

export default new Auth();