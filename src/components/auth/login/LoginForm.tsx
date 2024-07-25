import "./style/login.css";
import { LoginButton, LoginFormStyle, LoginHeaderStyle, LoginInput, LoginInputContainerStyle, LoginText, RegisterText } from "./style/login.style";
import { ReactComponent as X} from "../../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import AuthApi from "../../../core/apis/auth/Auth.api";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../../reducers/auth/loginAction";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userId, setUserId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const sendLoginUser = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();

        // TODO 로그인 서버 연결 로직
        const response = await AuthApi.login({
            userId, password
        });

        if (response === "error") {
            alert("로그인에 실패하였습니다. 다시 시도해주세요.");
            navigate("/login");
        } else {
            dispatch({
                type: LOGIN,
                data: "login",
            });

            navigate("/");
        }
        
    }, []);

    return (
        <LoginFormStyle>
            <LoginHeaderStyle>
                <LoginText>로그인</LoginText> 
                <X onClick={() => navigate("/")} />
            </LoginHeaderStyle>
            <LoginInputContainerStyle>
                <LoginInput type="text" name="email" placeholder="아이디를 입력해 주세요." onChange={(e) => setUserId(e.target.value)} />
                <LoginInput type="password" name="password" placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)} />
                <LoginButton type="submit" onClick={sendLoginUser} inverted={userId === "" || password === ""}>로그인</LoginButton>
            </LoginInputContainerStyle>
            <RegisterText onClick={() => navigate("/register")}>회원가입 하기</RegisterText>
        </LoginFormStyle>
    )
}

export default LoginForm;