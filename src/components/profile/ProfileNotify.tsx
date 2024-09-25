import "./style/profile.css";
import React, { useEffect, useState } from "react";
import { ProfileNotifyStyle } from "./style/profile.style";
import ProfileNotifyItem from "./ProfileNotifyItem";
import UserApi from "../../core/apis/user/User.api";

const ProfileNotify: React.FC = () => {
    const [notifyList, setNotifyList] = useState<{
        title: string,
        content: string,
        date: string,
        status: boolean
    }[]>([]);

    useEffect(() => {
        getNotifyList();
    }, []);

    const getNotifyList = async () => {
        const response = await UserApi.getUserNotifyList();

        if (response !== "error") {
            setNotifyList(response);
        }
    }

    return (
        <ProfileNotifyStyle>
            <div className="list">
                {
                    notifyList ? (
                        notifyList.map((notify) => (
                            <ProfileNotifyItem title={notify?.title} content={notify?.content} date={notify?.date} active={notify?.status} />
                        ))
                    ) : (
                        <div className="no-content">알림이 없습니다.</div>
                    )
                }
            </div>
        </ProfileNotifyStyle>
    )
}

export default ProfileNotify;