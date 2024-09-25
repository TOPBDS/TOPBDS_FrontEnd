import { HeaderMenuItemStyle, HeaderMenuStyle, HeaderStyle } from "../style/layout.style";
import { ReactComponent as SLOGO } from "../../assets/icon/s-logo.svg";
import { ReactComponent as BLOG } from "../../assets/icon/blog.svg";
import { ReactComponent as REPORT } from "../../assets/icon/report.svg";
import { ReactComponent as PROFILE } from "../../assets/icon/profile.svg";
import "../style/layout.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const { login } = useSelector((state: any) => state.loginReducer);
    
    const loginCheck = () => {
        if (login) {
            navigate("/report");
        } else {
            alert("로그인 후 이용해주세요.");
            navigate("/login");
        }
    }

    return (
        <HeaderStyle>
            <a href="/"><SLOGO className="logo" /></a>
            <HeaderMenuStyle>
                <HeaderMenuItemStyle onClick={() => navigate("/blog")}><BLOG /></HeaderMenuItemStyle>
                <HeaderMenuItemStyle onClick={() => loginCheck()}><REPORT /></HeaderMenuItemStyle>
                {
                    login ? (
                        <HeaderMenuItemStyle onClick={() => navigate("my")}><PROFILE /></HeaderMenuItemStyle>
                    ) : (
                        <HeaderMenuItemStyle onClick={() => navigate("login")}>로그인</HeaderMenuItemStyle>
                    )
                }
            </HeaderMenuStyle>
        </HeaderStyle>
    )
}

export default Header;