import "./style/profile.css"
import { ProfileFooterStyle } from "./style/profile.style";

const ProfileFooter = () => { 
    return (
        <ProfileFooterStyle>
            <div className="footer-info">
                <p>주식회사 TOP BDS</p>
                <p>주소</p>
                <p>사업자등록번호</p>
                <p>통신판매업</p>
            </div>
            <div className="footer-menu">
                <p>고객센터</p>
                <div className="policy">
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                </div>
            </div>
        </ProfileFooterStyle>
    )
}

export default ProfileFooter;