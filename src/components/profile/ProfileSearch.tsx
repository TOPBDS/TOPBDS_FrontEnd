import React, { useEffect, useState } from "react";
import { ProfileSearchStyle } from "./style/profile.style";
import UserApi from "../../core/apis/user/User.api";

interface InterestDTO {
    id: number;
    age: number;
    gender: string;
    price: string;
    size: string;
    ltv: string;
}

const ProfileSearch: React.FC = () => {
    const [ interest, setInterest ] = useState<InterestDTO>();
    const [updateStep, setUpdateStep] = useState<boolean>(false);

    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [size, setSize] = useState<string>("");
    const [ltv, setLtv] = useState<string>("");

    useEffect(() => {
        if (interest) {
            setAge(interest.age);
            setGender(interest.gender);
            setPrice(interest.price);
            setSize(interest.size);
            setLtv(interest.ltv); 
        }
    }, [interest]);

    const updateUserProfile = async () => {
        if (updateStep) {
            let validation = false;

            if (age <= 0) {
                alert("나이를 입력해주세요.");
                validation = false;
            } else {
                validation = true;
                if (gender == "") {
                    alert("성별을 입력해주세요.");
                    validation = false;
                } else {
                    validation = true;
                    if (price == "") {
                        alert("희망 가격을 입력해주세요.");
                        validation = false;
                    } else {
                        validation = true;
                        if (size == "") {
                            alert("희망 면적을 입력해주세요.");
                            validation = false;
                        } else {
                            validation = true;
                            if (ltv == "") {
                                alert("대출 비율을 입력해주세요.");
                                validation = false;
                            } else {
                                validation = true;
                            }
                        }
                    }
                }
            }

            if (validation) {
                const response = await UserApi.updateUserInterest(age, gender, price, size, ltv);
    
                if (response) {
                    setUpdateStep(false);
                } else {
                    alert("정보 수정에 실패하였습니다.");
                }
            }
        } else {
            setUpdateStep(true);
        }
    }

    useEffect(() => {
        getInterest();
    }, [])

    const getInterest = async () => {
        const response = await UserApi.getUserInterest();

        if (response !== "error") {
            setInterest(response);
        }
    }

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
    
        if (inputValue === "") {
            setAge(0);
        } else {
            const numericValue = Number(inputValue);
    
            if (numericValue >= 1 && numericValue <= 100) {
                setAge(numericValue);
            }
        }
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        
        const numericValue = inputValue.replace(/\D/g, "");

        const formattedPrice = new Intl.NumberFormat('ko-KR').format(Number(numericValue));
    
        setPrice(formattedPrice);
    };

    const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/\D/g, ""); 

        if (inputValue === "") {
            setSize("");
        } else {
            const numericValue = Number(inputValue);
            if (numericValue >= 0 && numericValue <= 10000) {
                setSize(String(numericValue));
            }
        }
    };

    const handleLtvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/\D/g, "");
    
        if (inputValue === "") {
            setLtv("");
        } else {
            const numericValue = Number(inputValue);
            if (numericValue >= 0 && numericValue <= 100) {
                setLtv(String(numericValue));
            }
        }
    };

    return (
        <ProfileSearchStyle>
            <div className="more-info">
                <div className="age data">
                    <p className="title">나이</p>
                    {
                        updateStep ? (
                            <><input className="update-input" type="text" name="name" value={age} placeholder="나이" onChange={handleAgeChange} /></>
                        ) : (
                            <p>{Math.floor(age / 10) * 10}대</p>
                        )
                    }
                </div>
                <div className="gender data">
                    <p className="title">성별</p>
                    {
                        updateStep ? (
                            <><input className="update-input" type="text" name="name" value={gender} placeholder="성별 (남자, 여자)" onChange={(e) => setGender(e.target.value)} /></>
                        ) : (
                            <p>{gender}</p>
                        )
                    }
                </div>
                <div className="price data">
                    <p className="title">희망 가격</p>
                    {
                        updateStep ? (
                            <><input className="update-input" type="text" name="name" value={price} placeholder="희망 가격" onChange={handlePriceChange} /></>
                        ) : (
                            <p>{price}\</p>
                        )
                    }
                </div>
                <div className="size data">
                    <p className="title">희망 면적</p>
                    {
                        updateStep ? (
                            <><input className="update-input" type="text" name="name" value={size} placeholder="희망 면적 (평)" onChange={handleSizeChange} /></>
                        ) : (
                            <p>{size}평</p>
                        )
                    }
                </div>
                <div className="loans data">
                    <p className="title">대출 비율</p>
                    {
                        updateStep ? (
                            <><input className="update-input" type="text" name="name" value={ltv} placeholder="대출 비율 (%)" onChange={handleLtvChange} /></>
                        ) : (
                            <p>{ltv}%</p>
                        )
                    }
                </div>
                <div className="update" onClick={updateUserProfile}>수정하기</div>
            </div>
        </ProfileSearchStyle>
    )
}

export default ProfileSearch;