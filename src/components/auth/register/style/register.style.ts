import styled from "styled-components";

export const RegisterFormStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 18px;

    position: relative;
    width: 348px;

    background: #FFFFFF;
    border-radius: 8px;

`

export const RegisterText = styled.p`
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

export const RegisterHeaderStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px;
`

export const RegisterInputContainerStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RegisterInput = styled.input`
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

export const NumberVerifyContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const NumberInput = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;

    width: 240px;
    height: 56px;

    background: #FFFFFF;
    border: 1px solid #D5D7DD;
    border-radius: 4px;

    margin-bottom: 16px;
`

export const VerifyNumberInput = styled.input`
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


export const NumberVerifyButton = styled.button<{ inverted: boolean }>`
    width: 52px;
    height: 48px;

    background: ${props => props.inverted ? '#9DA3AF' : '#03C6CE'};
    border-radius: 8px;

    color: #FFFFFF;
    border: none;

    margin-left: 8px;
    margin-bottom: 16px;
`

export const RegisterButton = styled.button<{ inverted: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 80px;
    gap: 10px;

    width: 300px;
    height: 48px;

    background: ${props => props.inverted ? '#9DA3AF' : '#03C6CE'};
    border-radius: 8px;

    color: #FFFFFF;
    border: none;

    margin: 18px;
`