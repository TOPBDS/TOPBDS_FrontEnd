import { ProfileMoreInfoStyle } from "./style/profile.style";

const ProfileMoreInfo = () => {
    return (
        <ProfileMoreInfoStyle>
            <div className="more-info">
                <div className="email data">
                    <p className="title">이메일</p>
                    <p>jangseokyeon1110@gmail.com</p>
                </div>
                <div className="number data">
                    <p className="title">전화번호</p>
                    <p>010-4180-3331</p>
                </div>
                <div className="update">수정하기</div>
            </div>
        </ProfileMoreInfoStyle>
    )
}

export default ProfileMoreInfo;