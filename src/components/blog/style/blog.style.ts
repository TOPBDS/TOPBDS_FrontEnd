import styled from "styled-components";

export const BlogHeaderStyle = styled.div`
    width: 25.625rem;
    height: 80px;

    padding: 24px;
`

export const BlogMenuStyle = styled.div`
    box-sizing: border-box;

    width: 25.625rem;
    height: 80px;

    margin-top: 34px;

    flex: none;
    order: 0;
    flex-grow: 0;

    padding: 10px;

    gap: 1.5rem;
`

export const BlogListStyle = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const BlogListItemStyle = styled.div`
    width: 25.625rem;
    min-height: 340px;

    display: flex;
    flex-direction: column;

    padding: 0 24px;

    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`
