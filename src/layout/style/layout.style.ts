import styled from "styled-components";

export const HeaderStyle = styled.div`
    width: 64px;
    height: 100vh;
    position:fixed;
    z-index:999;
    top:0px;
    left:0px;
    background: #FFFFFF;
    border-right: 1px solid #D5D7DD;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const SubHeaderStyle = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 48px;
    position:fixed;
    z-index:999;
    top: 10px;
    left: 474px;
    
`

export const HeaderMenuStyle = styled.div`
    display: flex;
    flex-direction: column;

    padding-bottom: 16px;
`

export const HeaderMenuItemStyle = styled.div`
    width: 64px;
    height: 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 14px;
`

export const SubHeaderMenuStyle = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: center;
    gap: 0.5rem;

    margin: 8px;
    margin-left: 16px
`

export const SubHeaderMenuItemStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 16px;
    gap: 10px;

    width: fit-content;
    height: 32px;

    background: #03C6CE;
    border-radius: 16px;

    color: #fff;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const LogoImageStyle = styled.img`
    width: 160.52px;
    height: 48px;

    margin-left: 40px;
`