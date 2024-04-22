import { LoginButton, LoginFormStyle, LoginHeaderStyle, LoginInput, LoginInputContainerStyle, LoginText, RegisterText } from "./style/login.style";
import { ReactComponent as X} from "../../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const sendLoginUser = () => {
        // TODO 로그인 서버 연결 로직
    }

    return (
        <LoginFormStyle>
            <LoginHeaderStyle>
                <LoginText>로그인</LoginText> 
                <X onClick={() => navigate(-1)} />
            </LoginHeaderStyle>
            <LoginInputContainerStyle>
                <LoginInput type="text" name="id" placeholder="아이디를 입력해 주세요."/>
                <LoginInput type="password" name="password" placeholder="비밀번호를 입력해 주세요."/>
                <LoginButton type="submit" onClick={sendLoginUser}>로그인</LoginButton>
            </LoginInputContainerStyle>
            <RegisterText onClick={() => navigate("/register")}>회원가입 하기</RegisterText>
        </LoginFormStyle>
    )
}

export default LoginForm;