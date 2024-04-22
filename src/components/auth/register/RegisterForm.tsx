import { ReactComponent as X} from "../../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";
import { NumberInput, NumberVerifyButton, NumberVerifyContainerStyle, RegisterButton, RegisterFormStyle, RegisterHeaderStyle, RegisterInput, RegisterInputContainerStyle, RegisterText, VerifyNumberInput } from "./style/register.style";
import { useState } from "react";

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

    const onClickVerifyNumber = () => {
        if (number !== "") {
            setIsSendVerify(true);
        } else {
            alert("전화번호를 입력해주세요.");
        }
    }

    const onClickStep1 = () => {
        // TODO 전화번호 인증 로직 후 인증 성공 시 step 넘어가기
        setStep(1);
        // 인증 싪패 시 인증 실패 메시지 띄우기
    }

    const sendRegisterUser = () => {
        // TODO 회원가입 서버 연결 로직
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
                        <RegisterInput type="text" name="email" placeholder="이메일을 입력해 주세요." onChange={(e) => setEmail(e.target.value)} />
                        <NumberVerifyContainerStyle>
                            <NumberInput 
                                type="text" 
                                name="number" 
                                placeholder="전화번호를 입력해 주세요 (- 제외)" 
                                onChange={(e) => setNumber(e.target.value)}
                                disabled={isSendVerify}
                            />
                            <NumberVerifyButton type="button" onClick={onClickVerifyNumber} inverted={number == ""}>인증</NumberVerifyButton>
                        </NumberVerifyContainerStyle>
                        {
                            isSendVerify && (
                                <VerifyNumberInput type="text" name="verify-number" placeholder="인증 번호를 입력해 주세요." onChange={(e) => setVerifyNumber(e.target.value)} />
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