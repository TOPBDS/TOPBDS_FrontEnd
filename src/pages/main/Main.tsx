import React from "react";
import "./style/main.css";
import { MainContainer } from "./style/main.style";
import HouseList from "../../components/main/HouseList";
import Maps from "../../components/main/Map";
import { useLocation } from "react-router-dom";
import HouseDetail from "../../components/main/HouseDetail";
import Profile from "../profile/Profile";
import Blog from "../blog/Blog";

const Main: React.FC = () => {
    const { pathname } = useLocation();
    const element = pathname.split("/")[1];

    return (
        <MainContainer>
            { element == "" && (<HouseList />) }
            { element == "item" && (<HouseDetail />) }
            { element == "blog" && (<Blog />) }
            { element == "my" && (<Profile />) }
            <Maps />
        </MainContainer>
    )
}

export default Main;