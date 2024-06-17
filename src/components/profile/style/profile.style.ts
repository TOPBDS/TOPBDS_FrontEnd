import styled from "styled-components";

export const ProfileHeaderStyle = styled.div`
    width: 100%;
    height: fit-content;

    background: none;
    border: none;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;

    display: flex;
    align-items: center;
`

export const ProfileInfoStyle = styled.div`
    width: 100%;
    height: fit-content;

    background: none;
    border: none;

    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 280px;
`

export const ProfileSearchStyle = styled.div`
    width: 100%;
    height: fit-content;

    background: none;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 280px;
`

export const ProfileMoreInfoStyle = styled.div`
    width: 100%;
    height: fit-content;

    background: none;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 280px;
    overflow-x: hidden;
`

export const ProfileInterestStyle = styled.div`
    width: 100%;
    height: fit-content;

    background: none;
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 280px;
`

export const ProfileFooterStyle = styled.div`
    width: 100%;
    height: 180px;

    background-color: #FFFFFF;

    font-size: 16px;
    line-height: 24px;

    display: flex;
    flex-direction: column;

    padding: 20px;
    border-top: 1px solid #111;
`

export const MyHosueItemListStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const MyHouseListItemStyle = styled.div`
    box-sizing: border-box;

    width: 25.625rem;

    border-bottom: 1px solid #D5D7DD;

    flex: none;
    order: 0;
    flex-grow: 0;
`

export const MyHouseItemTopStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MyHouseItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`

export const MyHouseImageStyle = styled.div`
    width: 5rem;
    height: 5rem;

    margin: 1.5rem;

    background: #F1F2F4;
`

export const MyHouseItemTitle = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #22252A;
`

export const MyHouseItemContent = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #9DA3AF;

    margin-top: 4px;
`

export const MyHouseItemPrice = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #03C6CE;

    margin-top: 24px;
`

export const MyHouseItemInfoStyle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const MyHouseItemType = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #22252A;

    margin-top: 4px;
    margin-right: 8px;

    white-space: nowrap;
`

export const MyHouseItemInfo = styled.p`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #676F7E;

    margin-top: 4px;
`

export const MyHouseItemNumberReview = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const MyHouseItemNumber = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;
    width: fit-content;
    height: 28px;
    background: #F1F2F4;
    border-radius: 4px;
    font-family: 'Pretendard', sans-serif;
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
    margin-left: 16px;
    margin-bottom: 24px;
`;

export const MyHouseItemReview = styled.button`
    width: 80px;
    height: 32px;
    border: none;
    border-radius: 8px;
    background-color: #03C6CE;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    margin-top: 24px;
    margin-right: 24px;
    margin-bottom: 24px;
`;
