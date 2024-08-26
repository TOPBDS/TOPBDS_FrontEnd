import "./style/detail.css";
import React, { useEffect, useState } from "react";
import { HouseDetailAptsInDecreasePriceStyle } from "../style/main-item.style";
import AptApi from "../../../core/apis/apt/Apt.api";
import LocationApi from "../../../core/apis/location/Location.api";

const HouseDetailAptsInDecreasePrice: React.FC = () => {
    const [ aptInDecreasePriceList, setAptInDecreasePriceList ] = useState<{
        name: string,
        inDecrease: string,
        inDecreaseTo: string
    }[]>([]);
    const [ locationList, setLocationList ] = useState<{
        id: number,
        name: string
    }[]>([]);
    const [ subLocationList, setSubLocationList ] = useState<{
        id: number,
        name: string
    }>();
    const [ selectLocation, setSelectLocation ] = useState<number>(0);
    const [ aptRentType, setAptRentType ] = useState<string>("");
    const [ aptDate, setAptDate ] = useState<Date>(new Date());
    const [ selectAptDate, setSelectAptDate ] = useState<number>(10);
    const [ aptOrder, setAptOrder ] = useState<string>("");

    useEffect(() => {
        // getLocation();
        // getAptPrediction();
    }, []);

    useEffect(() => {
        // getSubLocation();
    }, [selectLocation]);

    const getLocation = async () => {
        const response = await LocationApi.getLocaitonList();
        setLocationList(response);
    }

    const getSubLocation = async () => {
        const response = await LocationApi.getSubLocationList(selectLocation);
        setSubLocationList(response);
    }

    const getAptPrediction = async () => {
        const response = await AptApi.getPredictionList(0, selectLocation, 0, aptRentType, aptDate);

        setAptInDecreasePriceList(response.data);
    }

    const setNewDate = (date: number) => {
        setSelectAptDate(date);
        aptDate.setDate(aptDate.getDate() - date);
        return aptDate;
    }

    return (
        <HouseDetailAptsInDecreasePriceStyle>
            <div className="header">
                <div className="top">
                    <h4>매물 증감</h4>
                </div>
            </div>
            <div className="aptsln-list">
                <div className="chip-list">
                    <div className={`chip ${selectLocation ? "" : "active"}`}>전체</div>
                    {
                        locationList && locationList.map((location) => (
                            <div className={`chip ${location.id === selectLocation ? "active" : ""}`} onClick={() => setSelectLocation(location.id)}>{location.name}</div>
                        ))
                    }
                </div>
                <div className="radios">
                    <div className="items">
                        <input type="radio" name="aptRentType" onClick={() => setAptRentType("TRADING")} /> 매매
                        <input type="radio" name="aptRentType" onClick={() => setAptRentType("JEONSE")} /> 전세
                        <input type="radio" name="aptRentType" onClick={() => setAptRentType("MONTHLY")} /> 월세
                    </div>
                    <div className="sort">
                        <span onClick={() => setAptOrder("increase")}>증가순</span>
                        <span onClick={() => setAptOrder("decrease")}>감소순</span>
                    </div>
                </div>
                <div className="chip-list">
                    <div className={`chip ${selectAptDate === 10 ? "active" : ""}`} onClick={() => setNewDate(10)}>10일전</div>
                    <div className={`chip ${selectAptDate === 7 ? "active" : ""}`} onClick={() => setNewDate(7)}>7일전</div>
                    <div className={`chip ${selectAptDate === 5 ? "active" : ""}`} onClick={() => setNewDate(5)}>5일전</div>
                    <div className={`chip ${selectAptDate === 3 ? "active" : ""}`} onClick={() => setNewDate(3)}>3일전</div>
                    <div className={`chip ${selectAptDate === 1 ? "active" : ""}`} onClick={() => setNewDate(1)}>1일전</div>
                </div>
            </div>
            <div className="item-list">
                {aptInDecreasePriceList && aptInDecreasePriceList.map((aptInDecreasePrice, index) =>
                    <div className="item" key={index}>
                        <span className="rank">{index + 1}</span>
                        <div className="info">
                            <span>{aptInDecreasePrice.name}</span>
                            <span className="data">일별 매물현황</span>
                        </div>
                        <span>읍면동 비교</span>
                        <div className="price-info">
                            <span>{aptInDecreasePrice.inDecrease}</span>
                            <span>{aptInDecreasePrice.inDecreaseTo}</span>
                        </div>
                    </div>
                )}
            </div>
        </HouseDetailAptsInDecreasePriceStyle>
    )
}

export default HouseDetailAptsInDecreasePrice;