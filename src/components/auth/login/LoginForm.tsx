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

    const [idValidation, setIdValidation] = useState<boolean>(false);
    const [passwordValidation, setPasswordValidation] = useState<boolean>(false);
    const [userExistsValidation, setUserExistsValidation] = useState<boolean>(false);
    const [passwordWrongValidation, setPasswordWrongValidation] = useState<boolean>(false);

    const sendLoginUser = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (userId == "") {
            setIdValidation(true);
        } else {
            setIdValidation(false);
        }

        if (password == "") {
            setPasswordValidation(true);
        } else {
            setPasswordValidation(false);
        }


        if (userId != "" && password != "") {
            setUserExistsValidation(false);
            setPasswordWrongValidation(false);

            const response = await AuthApi.login({
                userId, 
                password
            });
    
            if (response?.response?.data?.message === "User does not exist") {
                setUserExistsValidation(true);
            } else if (response?.response?.data?.message === "Password doesn't match.") {
                setPasswordWrongValidation(true);
            } else if (response === "success") {
                dispatch({
                    type: LOGIN,
                    data: "login",
                });
    
                navigate("/");
            }
        }

    }, [userId, password, dispatch, navigate]);

    return (
        <LoginFormStyle onSubmit={sendLoginUser}>
            <LoginHeaderStyle>
                <LoginText>로그인</LoginText> 
                <X onClick={() => navigate("/")} />
            </LoginHeaderStyle>
            <LoginInputContainerStyle>
                <div className="input-label">
                    <LoginInput 
                        type="text" 
                        name="email" 
                        placeholder="아이디를 입력해 주세요." 
                        value={userId} 
                        onChange={(e) => setUserId(e.target.value)} 
                    />
                    {idValidation && userId == "" && <span className="validation">아이디를 입력해주세요.</span>}
                    {userExistsValidation && <span className="validation">유저가 존재하지 않습니다. 회원가입을 진행해주세요.</span>}
                </div>
                <div className="input-label">
                    <LoginInput 
                        type="password" 
                        name="password" 
                        placeholder="비밀번호를 입력해 주세요." 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {passwordValidation && password == "" && <span className="validation">비밀번호를 입력해주세요.</span>}
                    {passwordWrongValidation && <span className="validation">비밀번호가 올바르지 않습니다. 한번 더 확인해주세요.</span>}
                </div>
                <LoginButton 
                    type="submit" 
                    inverted={userId == "" || password == ""}
                >
                    로그인
                </LoginButton>
            </LoginInputContainerStyle>
            <RegisterText onClick={() => navigate("/register")}>회원가입 하기</RegisterText>
        </LoginFormStyle>
    );
}

export default LoginForm;
