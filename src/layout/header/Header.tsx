import { HeaderMenuItemStyle, HeaderMenuStyle, HeaderStyle } from "../style/layout.style";
import { ReactComponent as SLOGO } from "../../assets/icon/s-logo.svg";
import "../style/layout.css";
import { useState } from "react";

const Header = () => {
    const [ isLogin, setIsLogin ] = useState<boolean>(false);

    return (
        <HeaderStyle>
            <a href="/"><SLOGO className="logo" /></a>
            <HeaderMenuStyle>
                <HeaderMenuItemStyle><a href="/">블로그</a></HeaderMenuItemStyle>
                <HeaderMenuItemStyle><a href="/">보고서</a></HeaderMenuItemStyle>
                {
                    isLogin ? (
                        <HeaderMenuItemStyle><a href="/">마이페이지</a></HeaderMenuItemStyle>
                    ) : (
                        <HeaderMenuItemStyle><a href="/login">로그인</a></HeaderMenuItemStyle>
                    )
                }
            </HeaderMenuStyle>
        </HeaderStyle>
    )
}

export default Header;