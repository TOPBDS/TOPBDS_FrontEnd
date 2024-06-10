import "./style/profile.css";
import React from "react";
import { ProfileContainer } from "./style/profile.style";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileInfo from "../../components/profile/ProfileInfo";

const Profile: React.FC = () => {
    return (
        <ProfileContainer>
            <ProfileHeader />
            <ProfileInfo />
        </ProfileContainer>
    )
}

export default Profile;