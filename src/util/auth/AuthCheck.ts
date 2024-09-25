import { useNavigate } from "react-router-dom";
import AuthApi from "../../core/apis/auth/Auth.api";

const AuthCheck = async () => {
    const navigate = useNavigate();
    const data = await AuthApi.loginCheck();
    if (data === "error") {
        alert("다시 로그인해주세요");
        navigate("/login")
    }
}

export default AuthCheck;