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

const Profile: React.FC = () => {
    const { pathname } = useLocation();
    const element = pathname.split("/")[2];
    const title = element == "info" ? "알림" 
                : element == "interest" ? "나의 관심 매물" 
                : element == "search" ? "검색 조건 관리" : ""; 

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
                ) : (
                    <ProfileInfo />
                )
            }
            <ProfileFooter />
        </ProfileContainer>
    )
}

export default Profile;