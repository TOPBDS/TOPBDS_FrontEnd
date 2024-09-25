import React, { useEffect, useState } from "react";
import { ProfileMoreInfoStyle } from "./style/profile.style";
import UserApi from "../../core/apis/user/User.api";
import AuthApi from "../../core/apis/auth/Auth.api";

interface UserInfoDTO {
    admin: boolean;
    email: string;
    id: number;
    name: string;
    phone: string;
    userId: string;
}

interface ProfileMoreInfoProps {
    user: UserInfoDTO | null;
    setUser: React.Dispatch<React.SetStateAction<UserInfoDTO | null>>
}

const ProfileMoreInfo: React.FC<ProfileMoreInfoProps> = ({ user, setUser }) => {
    const [updateStep, setUpdateStep] = useState<boolean>(false);
    const [isSendVerify, setIsSendVerify] = useState<boolean>(false);
    const [isVerifyNumber, setIsVerifyNumber] = useState<boolean>(false);
    const [verifyNumber, setVerifyNumber] = useState<string>("");
    const [sendVerifyNumber, setSendVerifyNumber] = useState<string>("");
    const [timerState, setTimerState] = useState<boolean>(false);
    const MINUTES_IN_MS = 3 * 60 * 1000;
    const INTERVAL = 1000;
    const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const [initialEmail, setInitialEmail] = useState<string>(""); // 기존 이메일 상태

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPhone(user.phone);
            setInitialEmail(user.email); // 초기 이메일 저장
        }
    }, [user]);

    const [nameValidation, setNameValidation] = useState<boolean>(false);
    const [numberValidation, setNumberValidation] = useState<boolean>(false);
    const [numberTypeValidation, setNumberTypeValidation] = useState<boolean>(false);
    const [emailValidation, setEmailValidation] = useState<boolean>(false);
    const [emailTypeValidation, setEmailTypeValidation] = useState<boolean>(false);
    const [emailSendValidation, setEmailSendValidation] = useState<boolean>(false);
    const [emailVerifyValidation, setEmailVerifyValidation] = useState<boolean>(false);
    const [verifyNumberValidation, setVerifyNumberValidation] = useState<boolean>(false);

    const updateUserProfile = async () => {
        if (updateStep) {
            if (name === "") {
                setNameValidation(true);
            } else {
                setNameValidation(false);
            }

            if (phone === "") {
                setNumberValidation(true);
            } else {
                if (!isValidNumber(phone)) {
                    setNumberTypeValidation(true);
                } else {
                    setNumberValidation(false);
                    setNumberTypeValidation(false);
                }
            }

            if (email == "") {
                setEmailValidation(true);
            } else {
                if (!isValidEmail(email)) {
                    setEmailTypeValidation(true);
                } else {
                    if (email !== initialEmail && !isSendVerify) {
                        setEmailSendValidation(true);
                    } else {
                        setEmailValidation(false);
                        setEmailTypeValidation(false);
                    }
                }
            }

            if (!isVerifyNumber) {
                setEmailVerifyValidation(true);
            } else {
                setEmailVerifyValidation(false);
            }

            if (name !== "" && phone !== "" && email !== "" && ((email == initialEmail) ? true : isVerifyNumber) && isValidEmail(email) && isValidNumber(phone)) {
                const response = await UserApi.updateUserInfo(name, email, phone);
                if (response) {
                    setUpdateStep(false);

                    setIsSendVerify(false);
                    setIsVerifyNumber(false);
                    setVerifyNumber("");
                    setSendVerifyNumber("");
                    setTimerState(false);
                    setInitialEmail(email);

                    setNameValidation(false);
                    setNumberValidation(false);
                    setNumberTypeValidation(false);
                    setEmailValidation(false);
                    setEmailTypeValidation(false);
                    setEmailSendValidation(false);
                    setEmailVerifyValidation(false);
                    setVerifyNumberValidation(false);
                    setVerifyEmail(false);
                } else {
                    alert("정보 수정에 실패하였습니다.");
                }
            }
        } else {
            setUpdateStep(true);
        }
    };

    const onClickVerifyEmail = async () => {
        setEmailVerifyValidation(false);
        setVerifyNumberValidation(false);
        if (email !== initialEmail) {
            if (email !== "") {
                if (isValidEmail(email)) {
                    setEmailTypeValidation(false);
                    setEmailValidation(false);
                    setIsVerifyNumber(false);

                    setIsSendVerify(true);
                    setVerifyNumber("");

                    if (!isSendVerify || timeLeft <= 0) {
                        setIsSendVerify(true);
                        setVerifyNumber("");
                        setTimerState(true);
                        setTimeLeft(MINUTES_IN_MS);
                        const response = await sendVerifyNumberMail();

                        if (response !== "error") {
                            setIsSendVerify(true);
                        } else {
                            setIsSendVerify(false);
                        }
                    }
                } else {
                    setEmailTypeValidation(true);
                }
            } else {
                setEmailValidation(true);
            }
        } else {
            setIsVerifyNumber(true);
        }
    };

    const [verifyEmail, setVerifyEmail] = useState<boolean>(false);
    const onClickCheckVerifyNumber = () => {
        if (verifyNumber != "") {
            if (verifyNumber === sendVerifyNumber) {
                setIsVerifyNumber(true);
                setIsSendVerify(true);
                setTimerState(false);
                setVerifyNumber("");
                setVerifyEmail(true);
            } else {
                setEmailVerifyValidation(true);
            }
        } else {
            setVerifyNumberValidation(true);
        }
    };

    const generateRandomSixDigitNumber = (): string => {
        const randomNumber = Math.floor(Math.random() * 1000000);
        return randomNumber.toString().padStart(6, "0");
    };

    const sendVerifyNumberMail = async () => {
        const number = generateRandomSixDigitNumber();
        setSendVerifyNumber(number);
        const response = await AuthApi.sendMail(email, number);
        return response;
    };

    // timer logic
    useEffect(() => {
        if (timerState) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - INTERVAL);
            }, INTERVAL);

            if (timeLeft <= 0) {
                clearInterval(timer);
                setIsSendVerify(false);
                setIsVerifyNumber(false);
                setVerifyNumber("");
                setSendVerifyNumber("");
                setTimerState(false);
                setEmailSendValidation(false);
                setEmailVerifyValidation(false);
                setVerifyNumberValidation(false);
                setVerifyEmail(false);
            }

            return () => {
                clearInterval(timer);
            };
        }
    }, [timeLeft, timerState]);

    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
    const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // 숫자만 입력되도록 필터링
        const numericValue = inputValue.replace(/\D/g, "");
        const formattedValue = formatPhoneNumber(numericValue);
        setPhone(formattedValue);
    };

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

    return (
        <ProfileMoreInfoStyle>
            <div className="more-info">
                <div className="name data">
                    <p className="title">이름</p>
                    {updateStep ? (
                        <div className="input-label">
                            <input
                                className="update-input"
                                type="text"
                                name="name"
                                value={name}
                                placeholder="이름"
                                onChange={(e) => setName(e.target.value)}
                            />
                            {nameValidation && name == "" && <span className="validation">이름을 입력해주세요.</span>}
                        </div>
                    ) : (
                        <p>{name}</p>
                    )}
                </div>
                <div className="email data">
                    <p className="title">이메일</p>
                    {updateStep ? (
                        <div className="update-email">
                            <div className="input-label">
                                <div className="email-verify-container">
                                    <input
                                        className="update-input email-input"
                                        type="text"
                                        name="email"
                                        placeholder="이메일을 입력해 주세요."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isSendVerify}
                                    />
                                    {timerState ? (
                                        <div className="email-verify-button number active">
                                            {minutes} : {second}
                                        </div>
                                    ) : (
                                        <button
                                            className={`email-verify-button ${email === "" ? "" : "active"}`}
                                            type="button"
                                            onClick={onClickVerifyEmail}
                                            disabled={isSendVerify}
                                        >
                                            전송
                                        </button>
                                    )}
                                </div>
                                {emailValidation && email == "" && <span className="validation">이메일을 입력해주세요.</span>}
                                {emailSendValidation && !isSendVerify && <span className="validation">이메일 인증을 해주세요.</span>}
                                {emailTypeValidation && !isValidEmail(email) && <span className="validation">이메일 형식에 맞게 입력해주세요.</span>}
                                {verifyEmail && isSendVerify && <span className="validation">인증되었습니다.</span>}
                            </div>
                            {isSendVerify && !isVerifyNumber && (
                                <div className="input-label">
                                    <div className="email-verify-container verify">
                                        <input
                                            type="text"
                                            className="update-input email-input"
                                            name="verify-number"
                                            placeholder="인증 번호를 입력해 주세요."
                                            value={verifyNumber}
                                            onChange={(e) => setVerifyNumber(e.target.value)}
                                            />
                                        <button
                                            className={`email-verify-button ${email === "" ? "" : "active"}`}
                                            type="button"
                                            onClick={onClickCheckVerifyNumber}
                                        >
                                            인증
                                        </button>
                                    </div>
                                    {verifyNumberValidation && verifyNumber == "" && <span className="validation">인증번호를 입력해주세요.</span>}
                                    {emailVerifyValidation && (verifyNumber == sendVerifyNumber) && <span className="validation">인증번호가 올바르지 않습니다.</span>}
                                </div>
                            )}
                        </div>
                    ) : (
                        <p>{email}</p>
                    )}
                </div>
                <div className="number data">
                    <p className="title">전화번호</p>
                    {updateStep ? (
                        <div className="input-label">
                            <input
                                className="update-input"
                                type="text"
                                name="phone"
                                value={phone}
                                placeholder="전화번호를 입력해 주세요 (- 제외)"
                                maxLength={13}
                                onChange={(e) => handleChange(e)}
                            />
                            {numberValidation && phone == "" && <span className="validation">전화번호를 입력해주세요.</span>}
                            {numberTypeValidation && !isValidNumber(phone) && <span className="validation">전화번호 형식에 맞게 입력해주세요.</span>}
                        </div>
                    ) : (
                        <p>{phone}</p>
                    )}
                </div>
                <div className="update" onClick={() => updateUserProfile()}>
                    수정하기
                </div>
            </div>
        </ProfileMoreInfoStyle>
    );
};

export default ProfileMoreInfo;
