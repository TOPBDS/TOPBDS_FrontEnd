import React from "react";
import "./style/main.css";
import { MainContainer } from "./style/main.style";
import HouseList from "../../components/main/HouseList";
import Maps from "../../components/main/Map";
import { useLocation } from "react-router-dom";
import HouseDetail from "../../components/main/HouseDetail";

const Main: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <MainContainer>
            {
                !pathname.includes("item") ? (
                    <HouseList />
                ) : (
                    <HouseDetail />
                )
            }
            <Maps />
        </MainContainer>
    )
}

export default Main;