import styled from "styled-components";

export const LoginFormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 28px;

    position: relative;
    width: 348px;
    height: 362px;

    background: #FFFFFF;
    border-radius: 8px;
`

export const LoginText = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #000000;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const LoginHeaderStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
`

export const LoginInputContainerStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LoginInput = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;

    width: 300px;
    height: 56px;

    background: #FFFFFF;
    border: 1px solid #D5D7DD;
    border-radius: 4px;

    margin-bottom: 16px;
`

export const LoginButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 80px;
    gap: 10px;

    width: 300px;
    height: 48px;

    background: #9DA3AF;
    border-radius: 8px;

    color: #FFFFFF;
    border: none;

    margin-top: 16px;
`

export const RegisterText = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #9DA3AF;
`