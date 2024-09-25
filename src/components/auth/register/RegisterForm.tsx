import "./style/register.css";
import { ReactComponent as X} from "../../../assets/icon/x.svg";
import { useNavigate } from "react-router-dom";
import { EmailInput, EmailVerifyButton, EmailVerifyContainerStyle, RegisterButton, RegisterFormStyle, RegisterHeaderStyle, RegisterInput, RegisterInputContainerStyle, RegisterText, VerifyEmailInput } from "./style/register.style";
import { useEffect, useState } from "react";
import AuthApi from "../../../core/apis/auth/Auth.api";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [isSendVerify, setIsSendVerify] = useState<boolean>(false);
    const [verifyNumber, setVerifyNumber] = useState<string>("");
    const [sendVerifyNumber, setSendVerifyNumber] = useState<string>("");
    const [step, setStep] = useState<number>(0);
    const [timerState, setTimerState] = useState<boolean>(false)

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<string>("");

    const [nameValidation, setNameValidation] = useState<boolean>(false);
    const [emailValidation, setEmailValidation] = useState<boolean>(false);
    const [emailTypeValidation, setEmailTypeValidation] = useState<boolean>(false);
    const [emailSendValidation, setEmailSendValidation] = useState<boolean>(false);
    const [emailExistsValidation, setEmailExistsValidation] = useState<boolean>(false);
    const [numberValidation, setNumberValidation] = useState<boolean>(false);
    const [numberTypeValidation, setNumberTypeValidation] = useState<boolean>(false);
    const [verifyNumberValidation, setVerifyNumberValidation] = useState<boolean>(false);
    const [verifyNumberCheckValidation, setVerifyNumberCheckValidation] = useState<boolean>(false);
    const [idValidation, setIdValidation] = useState<boolean>(false);
    const [idExistsValidation, setIdExistsValidation] = useState<boolean>(false);
    const [passwordValidation, setPasswordValidation] = useState<boolean>(false);
    const [passwordCheckInputValidation, setPasswordCheckInputValidation] = useState<boolean>(false);
    const [passwordCheckValidation, setPasswordCheckValidation] = useState<boolean>(false);

    const MINUTES_IN_MS = 3 * 60 * 1000;
    const INTERVAL = 1000;
    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

    const onClickVerifyEmail = async () => {
        setEmailExistsValidation(false);
        setVerifyNumberCheckValidation(false);
        setVerifyNumberValidation(false);
        if (email !== "") {
            if (isValidEmail(email)) {
                setIsSendVerify(true)
                if (!isSendVerify) {   
                    setTimerState(true);
                    setTimeLeft(MINUTES_IN_MS);
                    setVerifyNumber("");
                    setIsSendVerify(true);
                    const response = await sendVerifyNumberMail();
            
                    if (response != "error") {
                        setIsSendVerify(true);
                    }
                }
            } else {
                setEmailTypeValidation(true);
            }
        } else {
            setEmailValidation(true);
        }
    }

    const onClickStep1 = () => {
        if (name == "") {
            setNameValidation(true);
        } else {
            setNameValidation(false);
        }

        if (email == "") {
            setEmailValidation(true);
        } else {
            if (!isValidEmail(email)) {
                setEmailTypeValidation(true);
            } else {
                if (!isSendVerify) {
                    setEmailSendValidation(true);
                } else {
                    setEmailValidation(false);
                    setEmailTypeValidation(false);
                }
            }
        }

        if (number == "") {
            setNumberValidation(true);
        } else {
            if (!isValidNumber(number)) {
                setNumberTypeValidation(true);
            } else {
                setNumberValidation(false);
                setNumberTypeValidation(false);
            }
        }
        
        if (name !== "" && email !== "" && number !== "" && isSendVerify && isValidEmail(email) && isValidNumber(number)) {
            if (verifyNumber !== "") {
                if (verifyNumber == sendVerifyNumber) {
                    setStep(1);
                    setTimerState(false);
                    setVerifyNumberValidation(false);
                } else {
                    setVerifyNumberCheckValidation(true);
                }
            } else {
                setVerifyNumberValidation(true);
            }
        }
    }

    const generateRandomSixDigitNumber = (): string => {
        const randomNumber = Math.floor(Math.random() * 1000000);
        return randomNumber.toString().padStart(6, '0');
    };

    const sendVerifyNumberMail = async () => {
        const number = generateRandomSixDigitNumber();
        // setVerifyNumber(number);
        setSendVerifyNumber(number);
        const response = await AuthApi.sendMail(email, number);
        return response;
    }

    // timer logic
    useEffect(() => {
        if (timerState){
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - INTERVAL);
            }, INTERVAL);
    
            if (timeLeft <= 0) {
                clearInterval(timer); 
                
                setIsSendVerify(false);
                setVerifyNumber("");
                setSendVerifyNumber("");
                setTimerState(false);
            }
    
            return () => {
                clearInterval(timer);
            };
        }
    }, [timeLeft,timerState]);

    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    const sendRegisterUser = async () => {
        if (id == "") {
            setIdValidation(true);
        } else {
            setIdValidation(false);
        }

        if (password == "") {
            setPasswordValidation(true);
        }  else {
            setPasswordValidation(false);
        }

        if (passwordCheck == "") {
            setPasswordCheckInputValidation(true);
        } else {
            if (password != passwordCheck) {
                setPasswordCheckValidation(true);
            } else {
                setPasswordCheckValidation(false);
                setPasswordCheckInputValidation(false);
            }
        }

        if (id !== "" && password !== "" && passwordCheck !== "" && (password == passwordCheck)) {
            setEmailExistsValidation(false);
            setIdExistsValidation(false);

            const response = await AuthApi.register({
                userId: id,
                name: name,
                email: email,
                password: password,
                phone: number
            });
            
            if (response?.response?.data?.message == "Email already exists.") {
                setEmailExistsValidation(true);
                setEmail("");
                setIsSendVerify(false);
                setVerifyNumber("");
                setStep(0);
            } else if (response?.response?.data?.message == "ID already exists.") {
                setIdExistsValidation(true);
                setId("");
            }
        }
    }

    const backNavigation = () => {
        if (step == 0) {
            navigate(-1);
        } else {
            setStep(0);
        }
    }

    const formatPhoneNumber = (value: string): string => {
        const cleaned = value.replace(/\D/g, ""); // 숫자가 아닌 문자는 모두 제거
        const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);
        
        if (match) {
            if (match[2]) {
                return `${match[1]}-${match[2]}${match[3] ? `-${match[3]}` : ""}`;
            } else if (match[1]) {
                return match[1];
            }
        }
        return value;
    };

    function isValidNumber(number: string): boolean {
        const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
        return phoneRegex.test(number);
    }

    function isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // 숫자만 입력되도록 필터링
        const numericValue = inputValue.replace(/\D/g, "");
        const formattedValue = formatPhoneNumber(numericValue);
        setNumber(formattedValue);
    };

    return (
        <RegisterFormStyle>
            <RegisterHeaderStyle>
                <RegisterText>회원가입</RegisterText> 
                <X onClick={() => backNavigation()} />
            </RegisterHeaderStyle>
            {
                step == 0 ? (
                    <RegisterInputContainerStyle>
                        <div className="input-label">
                            <RegisterInput type="text" name="name" placeholder="이름을 입력해 주세요." value={name} onChange={(e) => setName(e.target.value)} />
                            {nameValidation && name == "" && <span className="validation">이름을 입력해주세요.</span>}
                        </div>
                        <div className="input-label">
                            <RegisterInput type="text" name="number" placeholder="전화번호를 입력해 주세요 (- 제외)" maxLength={13} value={number} onChange={(e) => handleChange(e)} />
                            {numberValidation && number == "" && <span className="validation">전화번호를 입력해주세요.</span>}
                            {numberTypeValidation && !isValidNumber(number) && <span className="validation">전화번호 형식에 맞게 입력해주세요.</span>}
                        </div>
                        <div className="input-label">
                            <EmailVerifyContainerStyle>
                                <EmailInput 
                                    type="text" 
                                    name="number" 
                                    placeholder="이메일을 입력해 주세요." 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSendVerify}
                                />
                                {timerState ?  <EmailVerifyButton type="button" style={{marginLeft: '8px'}} inverted={false} disabled> {minutes} : {second} </EmailVerifyButton> :  <EmailVerifyButton type="button" onClick={onClickVerifyEmail} inverted={email == "" || !isValidEmail(email)}>전송</EmailVerifyButton>}
                            </EmailVerifyContainerStyle>
                            {emailValidation && email == "" && <span className="validation">이메일을 입력해주세요.</span>}
                            {emailSendValidation && !isSendVerify && <span className="validation">이메일 인증을 해주세요.</span>}
                            {emailTypeValidation && !isValidEmail(email) && <span className="validation">이메일 형식에 맞게 입력해주세요.</span>}
                            {emailExistsValidation && <span className="validation">이메일이 존재합니다.</span>}
                        </div>
                        {
                            isSendVerify && (
                                <div className="input-label">
                                    <VerifyEmailInput type="text" name="verify-number" placeholder="인증 번호를 입력해 주세요." value={verifyNumber} onChange={(e) => setVerifyNumber(e.target.value)} />
                                    {verifyNumberValidation && verifyNumber == "" && <span className="validation">인증번호를 입력해주세요.</span>}
                                    {verifyNumberCheckValidation && verifyNumber != sendVerifyNumber && <span className="validation">인증번호가 올바르지 않습니다.</span>}
                                </div>
                            )
                        }
                        <RegisterButton type="submit" onClick={onClickStep1} inverted={name == "" || number == "" || email == "" || verifyNumber == "" || !isSendVerify}>회원가입</RegisterButton>
                    </RegisterInputContainerStyle>
                ) : (
                    <RegisterInputContainerStyle>
                        <div className="input-label">
                            <RegisterInput type="text" name="id" placeholder="아이디를 입력해 주세요." value={id} onChange={(e) => setId(e.target.value)} />
                            {idValidation && id == "" && <span className="validation">아이디를 입력해주세요.</span>}
                            {idExistsValidation && id == "" && <span className="validation">아이디가 존재합니다.</span>}
                        </div>
                        <div className="input-label">
                            <RegisterInput type="passowrd" name="password" placeholder="비밀번호를 입력해 주세요." value={password} onChange={(e) => setPassword(e.target.value)} />
                            {passwordValidation && password == "" && <span className="validation">비밀번호를 입력해주세요.</span>}
                        </div>
                        <div className="input-label">
                            <RegisterInput type="passowrd" name="password-check" placeholder="비밀번호를 한 번 더 입력해 주세요." value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
                            {passwordCheckInputValidation && passwordCheck == "" && <span className="validation">비밀번호를 한 번 더 입력해주세요.</span>}
                            {passwordCheckValidation && password != passwordCheck && <span className="validation">비밀번호를 확인해주세요.</span>}
                        </div>
                        <RegisterButton type="submit" onClick={sendRegisterUser} inverted={id == "" || password == "" || passwordCheck == "" || (password == passwordCheck)}>회원가입</RegisterButton>
                    </RegisterInputContainerStyle>
                )
            }
        </RegisterFormStyle>
    )
}

export default RegisterForm;