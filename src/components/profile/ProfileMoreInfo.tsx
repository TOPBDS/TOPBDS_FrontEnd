import { ProfileMoreInfoStyle } from "./style/profile.style";

const ProfileMoreInfo = () => {
    return (
        <ProfileMoreInfoStyle>
            <div className="more-info">
                <div className="age data">
                    <p className="title">나이</p>
                    <p>30대</p>
                </div>
                <div className="gender data">
                    <p className="title">성별</p>
                    <p>남자</p>
                </div>
                <div className="price data">
                    <p className="title">희망 가격</p>
                    <p>10억 ~ 20억</p>
                </div>
                <div className="size data">
                    <p className="title">희망 면적</p>
                    <p>20평 ~ 32평</p>
                </div>
                <div className="loans data">
                    <p className="title">대출 비율</p>
                    <p>10%</p>
                </div>
                <div className="update">수정하기</div>
            </div>
        </ProfileMoreInfoStyle>
    )
}

export default ProfileMoreInfo;