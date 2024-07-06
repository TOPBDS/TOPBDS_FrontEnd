import "./style/profile.css";
import { ProfileHeaderStyle } from "./style/profile.style";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icon/arrow_left.svg";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ title }: { title: string }) => {
    const navigate = useNavigate();

    return (
        <ProfileHeaderStyle>
            <ArrowLeftIcon className="close" onClick={() => navigate(-1)} />
            <p className="title">{title}</p>
        </ProfileHeaderStyle>
    )
}

export default ProfileHeader;