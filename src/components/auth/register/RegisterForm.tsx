import "./style/register.css";
import { ReactComponent as X} from "../../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";
import { EmailInput, EmailVerifyButton, EmailVerifyContainerStyle, RegisterButton, RegisterFormStyle, RegisterHeaderStyle, RegisterInput, RegisterInputContainerStyle, RegisterText, VerifyEmailInput } from "./style/register.style";
import { useState } from "react";
import AuthApi from "../../../core/apis/auth/Auth.api";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [isSendVerify, setIsSendVerify] = useState<boolean>(false);
    const [verifyNumber, setVerifyNumber] = useState<string>("");
    const [step, setStep] = useState<number>(0);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");

    const onClickVerifyEmail = () => {
        if (email !== "") {
            setIsSendVerify(true);
        } else {
            alert("이메일을 입력해주세요.");
        }
    }

    const onClickStep1 = () => {
        // TODO 이메일 인증 로직 후 인증 성공 시 step 넘어가기
        if (name !== "" || email !== "" || verifyNumber !== "") {
            setStep(1);
        }
        // 인증 싪패 시 인증 실패 메시지 띄우기
    }

    const sendRegisterUser = async () => {
        // TODO 회원가입 서버 연결 로직
        await AuthApi.register({
            userId: id,
            name: name,
            email: email,
            password: password,
            phone: number
        });
    }

    return (
        <RegisterFormStyle>
            <RegisterHeaderStyle>
                <RegisterText>회원가입</RegisterText> 
                <X onClick={() => navigate(-1)} />
            </RegisterHeaderStyle>
            {
                step == 0 ? (
                    <RegisterInputContainerStyle>
                        <RegisterInput type="text" name="name" placeholder="이름을 입력해 주세요." onChange={(e) => setName(e.target.value)} />
                        <RegisterInput type="text" name="number" placeholder="전화번호를 입력해 주세요 (- 제외)" onChange={(e) => setNumber(e.target.value)} />
                        <EmailVerifyContainerStyle>
                            <EmailInput 
                                type="text" 
                                name="number" 
                                placeholder="이메일을 입력해 주세요." 
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSendVerify}
                            />
                            <EmailVerifyButton type="button" onClick={onClickVerifyEmail} inverted={email == ""}>인증</EmailVerifyButton>
                        </EmailVerifyContainerStyle>
                        {
                            isSendVerify && (
                                <VerifyEmailInput type="text" name="verify-number" placeholder="인증 번호를 입력해 주세요." onChange={(e) => setVerifyNumber(e.target.value)} />
                            )
                        }
                        <RegisterButton type="submit" onClick={onClickStep1} inverted={name == "" || email == "" || verifyNumber == ""}>회원가입</RegisterButton>
                    </RegisterInputContainerStyle>
                ) : (
                    <RegisterInputContainerStyle>
                        <RegisterInput type="text" name="id" placeholder="아이디를 입력해 주세요." value={id} onChange={(e) => setId(e.target.value)} />
                        <RegisterInput type="passowrd" name="password" placeholder="비밀번호를 입력해 주세요." value={password} onChange={(e) => setPassword(e.target.value)} />
                        <RegisterInput type="passowrd" name="password-check" placeholder="비밀번호를 한 번 더 입력해 주세요." value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
                        <RegisterButton type="submit" onClick={sendRegisterUser} inverted={id == "" || password == "" || passwordCheck == ""}>회원가입</RegisterButton>
                    </RegisterInputContainerStyle>
                )
            }
        </RegisterFormStyle>
    )
}

export default RegisterForm;