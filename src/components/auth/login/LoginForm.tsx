import "./style/login.css";
import { LoginButton, LoginFormStyle, LoginHeaderStyle, LoginInput, LoginInputContainerStyle, LoginText, RegisterText } from "./style/login.style";
import { ReactComponent as X} from "../../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthApi from "../../../core/apis/auth/Auth.api";

const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const sendLoginUser = async () => {
        // TODO 로그인 서버 연결 로직
        const response = await AuthApi.login({
            email, password
        });

        if (response != "") {
            console.log(response);
            alert("로그인에 실패하였습니다");
            navigate("/login");
        }

        navigate("/");
    }

    return (
        <LoginFormStyle>
            <LoginHeaderStyle>
                <LoginText>로그인</LoginText> 
                <X onClick={() => navigate("/")} />
            </LoginHeaderStyle>
            <LoginInputContainerStyle>
                <LoginInput type="text" name="email" placeholder="이메일을 입력해 주세요." onChange={(e) => setEmail(e.target.value)} />
                <LoginInput type="password" name="password" placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)} />
                <LoginButton type="submit" onClick={sendLoginUser} inverted={email === "" || password === ""}>로그인</LoginButton>
            </LoginInputContainerStyle>
            <RegisterText onClick={() => navigate("/register")}>회원가입 하기</RegisterText>
        </LoginFormStyle>
    )
}

export default LoginForm;