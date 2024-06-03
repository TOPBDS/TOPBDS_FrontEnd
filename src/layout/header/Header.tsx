import { HeaderMenuItemStyle, HeaderMenuStyle, HeaderStyle, LogoImageStyle } from "../style/layout.style";
import LOGO from "../../assets/icon/logo.png";

const Header = () => {
    return (
        <HeaderStyle>
            <a href="/"><LogoImageStyle src={LOGO} /></a>
            <HeaderMenuStyle>
                <HeaderMenuItemStyle><a href="/blog">블로그</a></HeaderMenuItemStyle>
                <HeaderMenuItemStyle><a href="/report">보고서</a></HeaderMenuItemStyle>
                <HeaderMenuItemStyle><a href="/login">로그인</a></HeaderMenuItemStyle>
            </HeaderMenuStyle>
        </HeaderStyle>
    )
}

export default Header;