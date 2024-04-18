import styled from "styled-components";

export const HeaderStyle = styled.div`
    width: 100%;
    height: 80px;
    
    background: #FFFFFF;
    border-bottom: 1px solid #D5D7DD;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SubHeaderStyle = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 48px;

    background: #FFFFFF;
    border-bottom: 1px solid #D5D7DD;
`

export const HeaderMenuStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-right: 40px;
`

export const HeaderMenuItemStyle = styled.div`
    width: 100px;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    font-size: 14px;
    margin: 8px;
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