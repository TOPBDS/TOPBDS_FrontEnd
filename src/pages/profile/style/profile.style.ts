import styled from "styled-components";

export const ProfileContainer = styled.div`
    position: absolute;
    width: 25.625rem;
    height:100vh;
    left: 100px;

    background-color: #fff;
    border-right: 1px solid #D5D7DD;

    display: flex;
    flex-direction: column;
    align-items: center;

    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`