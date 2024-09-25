import "./style/profile.css";
import React from "react";

interface ProfileNotifyItem {
    title: string;
    content: string;
    date: string;
    active: boolean;
}

const ProfileNotifyItem: React.FC<ProfileNotifyItem> = ({
    title,
    content,
    date,
    active
}) => {
    return (
        <div className={`notify-item ${active ? "active" : ""}`}>
            <div className="title">
                <p>{title}</p>
                <p className="time">{date}</p>
            </div>
            <div className="content">{content}</div>
        </div>
    )
}

export default ProfileNotifyItem;