import "./style/profile.css";
import { ProfileInfoStyle } from "./style/profile.style";
import { ReactComponent as ArrowRightIcon } from "../../assets/icon/arrow_right.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../reducers/auth/loginAction";
import { ReactComponent as ProfileIcon } from "../../assets/icon/profile.svg";
import React, { useEffect } from "react";

interface UserInfoDTO {
    admin: boolean;
    email: string;
    id: number;
    name: string;
    phone: string;
    userId: string;
}

interface ProfileInfoProps {
    user: UserInfoDTO | null
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
    user
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        localStorage.removeItem("AccessToken");
        localStorage.removeItem("RefreshToken");
        localStorage.removeItem("user");
        dispatch({
            type: LOGOUT,
        });

        navigate("/");
    }

    return (
        <ProfileInfoStyle>
            <div className="profile">
                <ProfileIcon className="profile-icon" />
                <p onClick={() => navigate("/my/info")}>안녕하세요, {user?.name}님!</p>
                <ArrowRightIcon className="icon" onClick={() => navigate("/my/info")} />
            </div>
            <div className="profile-info">
                <div className="email">
                    <p className="label">이메일</p>
                    <p className="data">{user?.email}</p>
                </div>
                <div className="number">
                    <p className="label">전화번호</p>
                    <p className="data">{user?.phone}</p>
                </div>
                <div className="notify">
                    <p className="label">알림</p>
                    <p className="data" onClick={() => navigate("/my/notify")}>새알림 0개</p>
                </div>
            </div>
            <div className="management">
                <div className="my-house">
                    <p className="label">나의 관심 매물</p>
                    <ArrowRightIcon className="icon" onClick={() => navigate("/my/interest")} />
                </div>
                <div className="search-manage">
                    <p className="label">검색 조건 관리</p>
                    <ArrowRightIcon className="icon" onClick={() => navigate("/my/search")}/>
                </div>
            </div>
            <div className="user-menu">
                <div className="q-a">
                    <p className="label" onClick={() => navigate("/my/faq")}>FAQ</p>
                </div>
                <div className="chatting">
                    <p className="label">1:1 채팅</p>
                </div>
                <div className="logout">
                    <p className="label" onClick={() => logout()}>로그아웃</p>
                </div>
            </div>
        </ProfileInfoStyle>
    )
}

export default ProfileInfo;