import React from "react";
import { MainContainer } from "./style/main.style";
import HouseList from "../../components/main/HouseList";
import HouseDetail from "../../components/main/HouseDetail";

const Main: React.FC = () => {
    return (
        <MainContainer>
            <HouseList />
        </MainContainer>
    )
}

export default Main;