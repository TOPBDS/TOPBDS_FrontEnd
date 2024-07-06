import "./style/profile.css";
import React from "react";
import { ProfileContainer } from "./style/profile.style";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileFooter from "../../components/profile/ProfileFooter";
import { useLocation } from "react-router-dom";
import ProfileMoreInfo from "../../components/profile/ProfileMoreInfo";
import ProfileInterest from "../../components/profile/ProfileInterest";
import ProfileSearch from "../../components/profile/ProfileSearch";
import ProfileNotify from "../../components/profile/ProfileNotify";
import FAQ from "../../components/profile/faq";

const Profile: React.FC = () => {
    const { pathname } = useLocation();
    const element = pathname.split("/")[2];
    const title = element == "info" ? "개인정보 관리" 
                : element == "interest" ? "나의 관심 매물" 
                : element == "search" ? "검색 조건 관리" 
                : element == "notify" ? "알림" 
                : element == "faq" ? "FAQ"
                : ""; 

    return (
        <ProfileContainer>
            <ProfileHeader title={title}/>
            {
                element == "info" ? (
                    <ProfileMoreInfo />
                ) : element == "interest" ? (
                    <ProfileInterest />
                ) : element == "search" ? (
                    <ProfileSearch />
                ) : element == "notify" ? (
                    <ProfileNotify />
                ) : element == "faq" ? (
                    <FAQ />
                ) : (
                    <ProfileInfo />
                )
            }
            {
                !["interest", "notify", "faq", "search"].includes(element) && (
                    <ProfileFooter />
                )
            }
        </ProfileContainer>
    )
}

export default Profile;