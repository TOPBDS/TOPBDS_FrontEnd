import React, { useState } from "react";
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

    const [ lat, setLat ] = useState<number>(0);
    const [ lng, setLng ] = useState<number>(0);

    return (
        <MainContainer>
            { element == "" && (<HouseList lat={lat} lng={lng} />) }
            { element == "item" && (<HouseDetail />) }
            { element == "blog" && (<Blog />) }
            { element == "my" && (<Profile />) }
            <Maps setLat={setLat} setLng={setLng} />
        </MainContainer>
    )
}

export default Main;