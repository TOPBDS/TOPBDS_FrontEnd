import "./style/profile.css";
import React from "react";

interface ProfileNotifyItem {
    active: boolean;
}

const ProfileNotifyItem: React.FC<ProfileNotifyItem> = ({
    active
}) => {
    return (
        <div className={`notify-item ${active ? "active" : ""}`}>
            <div className="title">
                <p>이거 어케 하는거임</p>
                <p className="time">1분 전</p>
            </div>
            <div className="content">어떤 아파트에서 가격이 15%가 상승했는데 이거 빨리 사셔야 할 것 같은데요?</div>
        </div>
    )
}

export default ProfileNotifyItem;