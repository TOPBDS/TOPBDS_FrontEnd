import { HeaderMenuItemStyle, HeaderMenuStyle, HeaderStyle } from "../style/layout.style";
import { ReactComponent as SLOGO } from "../../assets/icon/s-logo.svg";
import "../style/layout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [ isLogin, setIsLogin ] = useState<boolean>(true);

    return (
        <HeaderStyle>
            <a href="/"><SLOGO className="logo" /></a>
            <HeaderMenuStyle>
                <HeaderMenuItemStyle onClick={() => navigate("/")}>블로그</HeaderMenuItemStyle>
                <HeaderMenuItemStyle onClick={() => navigate("/")}>보고서</HeaderMenuItemStyle>
                {
                    isLogin ? (
                        <HeaderMenuItemStyle onClick={() => navigate("my")}>마이페이지</HeaderMenuItemStyle>
                    ) : (
                        <HeaderMenuItemStyle onClick={() => navigate("login")}>로그인</HeaderMenuItemStyle>
                    )
                }
            </HeaderMenuStyle>
        </HeaderStyle>
    )
}

export default Header;