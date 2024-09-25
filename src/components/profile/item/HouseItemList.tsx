import "./style/item.css";
import { useEffect, useState } from "react";
import AptApi from "../../../core/apis/apt/Apt.api";
import { MyHosueItemListStyle } from "../style/profile.style";
import MyHouseListItem from "./MyHouseItem";

const HouseItemList = () => {
    const [ houseList, setHouseList ] = useState<{
        id: number;
        name: string;
        explain: string;
        price: string;
        type: string;
        info: string;
        number: number;
    }[]>([]);

    useEffect(() => {
        getMyHouseList();
    }, [])

    const getMyHouseList = async () => {
        const response = await AptApi.getInterestAptList();
        setHouseList(response?.data?.data);
    }

    return (
        <MyHosueItemListStyle>
            {
                houseList.length > 0 ? (
                    houseList.map(house => (
                        <MyHouseListItem data={house} />
                    ))
                ) : (
                    <div className="no-content">등록한 관심 매물이 없습니다.</div>
                )
            }
        </MyHosueItemListStyle>
    )
}

export default HouseItemList;