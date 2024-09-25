import "./style/profile.css"
import { ProfileFooterStyle } from "./style/profile.style";
import styled from "styled-components";
import mainLogo from "../../assets/image/mainLogo.png"

const ProfileFooter = () => { 
    return (
        <ProfileFooterStyle>
            <ProfileFooterTextWrapper>
                <img width='160px' style={{marginBottom: '8px'}} src={mainLogo} alt="mainLogo"/>
                    <ProfileFooterText>
                        <ProfileFooterSpan style={{marginRight: '8px'}}>(주)탑비디에스</ProfileFooterSpan>
                        사업자 등록번호 : 149-86-03359
                    </ProfileFooterText>
                    <ProfileFooterText>
                    <ProfileFooterSpan style={{marginRight: '8px'}}> 대표 : 최유민</ProfileFooterSpan>
                      개인정보관리 책임자 : 최유민
                    </ProfileFooterText>
                    <ProfileFooterText>주소 : 서울특별시 강북구 숭인로 7가길 37, 108동 201호</ProfileFooterText>
                    <ProfileFooterText>topbdscokr@gmail.com</ProfileFooterText>
                </ProfileFooterTextWrapper>
                
                <ProfileFooterLinkWrapper>
                    <ProfileFooterLinkText>이용약관</ProfileFooterLinkText>
                    <ProfileFooterLinkText>개인정보처리방침</ProfileFooterLinkText>
                    <ProfileFooterLinkText>카카오톡 문의</ProfileFooterLinkText>
                </ProfileFooterLinkWrapper>
        </ProfileFooterStyle>
    )
}

const ProfileFooterTextWrapper = styled.div`
    display: flex;                      
    flex-direction: column;
    margin-bottom: 12px;
`

const ProfileFooterText = styled.p`
    color: #9DA3AF;
    font-size: 15px;
    word-spacing: -2px;
`

const ProfileFooterSpan = styled.span`
    color: #9DA3AF;
    font-size: 15px;
    word-spacing: -2px;
`

const ProfileFooterLinkWrapper = styled.div`
    display: flex;
    gap: 16px;
`

const ProfileFooterLinkText = styled.a`
    color: #03C6CE;
    cursor: pointer;    
    font-size: 15px;
`

export default ProfileFooter;