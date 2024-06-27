import "./style/profile.css";
import React from "react";
import { ProfileNotifyStyle } from "./style/profile.style";
import ProfileNotifyItem from "./ProfileNotifyItem";

const ProfileNotify: React.FC = () => {
    return (
        <ProfileNotifyStyle>
            <div className="list">
                <ProfileNotifyItem active={true} />
                <ProfileNotifyItem active={true} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
                <ProfileNotifyItem active={false} />
            </div>
        </ProfileNotifyStyle>
    )
}

export default ProfileNotify;