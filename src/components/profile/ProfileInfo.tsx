import "./style/profile.css";
import { ProfileInfoStyle } from "./style/profile.style";
import { ReactComponent as ArrowRightIcon } from "../../assets/icon/arrow_right.svg";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
    const navigate = useNavigate();

    return (
        <ProfileInfoStyle>
            <div className="profile">
                <img src="" className="profile-icon" />
                <p onClick={() => navigate("/my/info")}>안녕하세요, OOO님!</p>
                <ArrowRightIcon className="icon" onClick={() => navigate("/my/info")} />
            </div>
            <div className="profile-info">
                <div className="email">
                    <p className="label">이메일</p>
                    <p className="data">rhdydqls1024@naver.com</p>
                </div>
                <div className="number">
                    <p className="label">전화번호</p>
                    <p className="data">010-5754-9171</p>
                </div>
                <div className="notify">
                    <p className="label">알림</p>
                    <p className="data" onClick={() => navigate("/my/notify")}>새알림 2개</p>
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
                    <p className="label">F&Q</p>
                </div>
                <div className="chatting">
                    <p className="label">1:1 채팅</p>
                </div>
                <div className="logout">
                    <p className="label">로그아웃</p>
                </div>
            </div>
        </ProfileInfoStyle>
    )
}

export default ProfileInfo;