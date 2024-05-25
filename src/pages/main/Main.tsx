import React from "react";
import "./style/main.css";
import { MainContainer } from "./style/main.style";
import HouseList from "../../components/main/HouseList";
import Maps from "../../components/main/Map";

const Main: React.FC = () => {
    return (
        <MainContainer>
            <HouseList />
            <Maps />
        </MainContainer>
    )
}

export default Main;