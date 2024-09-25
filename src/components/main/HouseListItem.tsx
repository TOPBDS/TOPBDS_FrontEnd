import "./style/main.css"; 
import { useNavigate } from "react-router-dom";
import { HouseImageStyle, HouseItemContent, HouseItemInfo, HouseItemInfoStyle, HouseItemNumber, HouseItemPrice, HouseItemStyle, HouseItemTitle, HouseItemTopStyle, HouseItemType, HouseListItemStyle } from "./style/main.style";
import React from "react";

interface AptApiDTO {
    apt: string;
    capacity: number;
    area: string;
    amount: number;
    amountConv: number;
    amountType: string;
    floor: number;
    conDate: string;
    transMethod: string | null;
    broLoc: string | null;
    addr: string;
    date: string;
    dong: string;
    geo: string;
    sgg: string;
    conYear: number;
    year: number;
}

interface HouseItemProps {
    data: AptApiDTO
}

const HouseListItem: React.FC<HouseItemProps> = ({
    data
}) => {
    const naviagte = useNavigate();

    function numberToKoreanMixed(num: number): string {
        const units = ['', '만', '억', '조', '경'];
        const result: string[] = [];
        
        let unitIndex = 0;
        
        while (num > 0) {
            const part = num % 10000;
        
            if (part > 0) {
                const partStr = part.toString();
                const formattedPart = partStr + units[unitIndex];
                result.unshift(formattedPart);
            }
        
            num = Math.floor(num / 10000);
            unitIndex++;
        }
        
        return result.join(' ').trim();
    }

    return (
        <HouseListItemStyle onClick={() => naviagte("/item/" + data?.apt)}>
            <HouseItemTopStyle>
                <HouseItemStyle>
                        <HouseItemTitle>{data?.apt}</HouseItemTitle>
                    <HouseItemContent>{data?.addr}</HouseItemContent>
                    <HouseItemPrice>{numberToKoreanMixed(Number(data?.amount))}</HouseItemPrice>
                    <HouseItemInfoStyle>
                        <HouseItemType>{data?.area}</HouseItemType>
                        <HouseItemInfo>{data?.amountType}</HouseItemInfo>
                    </HouseItemInfoStyle>
                    {/* <HouseItemNumber>매물 추천 번호 : {data?.aptId}</HouseItemNumber> */}
                </HouseItemStyle>
                {/* <HouseImageStyle></HouseImageStyle> */}
            </HouseItemTopStyle>
        </HouseListItemStyle>
    )
}

export default HouseListItem;