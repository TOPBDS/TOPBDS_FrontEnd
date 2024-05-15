import React from "react";
import "./style/main.css";
import { MainContainer } from "./style/main.style";
import HouseList from "../../components/main/HouseList";

const Main: React.FC = () => {
    return (
        <MainContainer>
            <HouseList />
        </MainContainer>
    )
}

export default Main;