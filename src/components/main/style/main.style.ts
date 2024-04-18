import styled from "styled-components";

export const HouseListStyle = styled.div`
    position: absolute;
    width: 520px;
    left: 0px;
    top: 128px;

    background-color: #fff;
    border-right: 1px solid #D5D7DD;
    
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HosueItemListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const HouseDetailStyle = styled.div`
    position: absolute;
    width: 520px;
    height: 952px;
    left: 520px;
    top: 128px;

    background: #FFFFFF;
`

export const HouseSearchStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 10px;

    width: 520px;
    height: 88px;

    background: #FFFFFF;
`

export const HouseSearchItemStyle = styled.input`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    gap: 101px;

    width: 472px;
    height: 56px;

    background: #FFFFFF;
    border: 1px solid #D5D7DD;
    border-radius: 4px;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HouseListItemStyle = styled.div`
    box-sizing: border-box;

    width: 520px;
    height: 234px;

    border-right: 1px solid #D5D7DD;
    border-bottom: 1px solid #D5D7DD;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const HouseItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const HouseItemTitle = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #22252A;
`

export const HouseItemContent = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #9DA3AF;

    margin-top: 4px;
`

export const HouseItemPrice = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #03C6CE;

    margin-top: 24px;
`

export const HouseItemInfoStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const HouseItemType = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #22252A;

    margin-top: 4px;
    margin-right: 8px;
`

export const HouseItemInfo = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #676F7E;

    margin-top: 4px;
`

export const HouseItemNumber = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    width: 159px;
    height: 28px;

    background: #F1F2F4;
    border-radius: 4px;
    
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #676F7E;

    flex: none;
    order: 0;
    flex-grow: 0;

    margin-top: 24px;
`