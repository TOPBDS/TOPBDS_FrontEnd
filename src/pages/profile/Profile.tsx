import "./style/profile.css";
import React from "react";
import { ProfileContainer } from "./style/profile.style";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";
import ProfileFooter from "../../components/profile/ProfileFooter";

const Profile: React.FC = () => {
    return (
        <ProfileContainer>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileFooter />
        </ProfileContainer>
    )
}

export default Profile;