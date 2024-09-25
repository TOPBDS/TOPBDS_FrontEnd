import "./style/profile.css";
import React, { useEffect, useState } from "react";
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
import UserApi from "../../core/apis/user/User.api";

interface UserInfoDTO {
    admin: boolean;
    email: string;
    id: number;
    name: string;
    phone: string;
    userId: string;
}

const Profile: React.FC = () => {
    const { pathname } = useLocation();
    const element = pathname.split("/")[2];
    const title = element == "info" ? "개인정보 관리" 
                : element == "interest" ? "나의 관심 매물" 
                : element == "search" ? "검색 조건 관리" 
                : element == "notify" ? "알림" 
                : element == "faq" ? "FAQ"
                : ""; 
    const [ user, setUser ] = useState<UserInfoDTO | null>(null);

    useEffect(() => {
        getUserInfo();
    }, [pathname]);

    const getUserInfo = async () => {
        const response =  await UserApi.getUserInfo();
        setUser(response);
    }

    return (
        <ProfileContainer>
            <ProfileHeader title={title}/>
            {
                element == "info" ? (
                    <ProfileMoreInfo user={user} setUser={setUser}/>
                ) : element == "interest" ? (
                    <ProfileInterest />
                ) : element == "search" ? (
                    <ProfileSearch />
                ) : element == "notify" ? (
                    <ProfileNotify />
                ) : element == "faq" ? (
                    <FAQ />
                ) : (
                    <ProfileInfo user={user} />
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