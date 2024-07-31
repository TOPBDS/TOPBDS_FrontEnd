import React, { useState } from "react";
import "./style/report.css";
import { ReportContainer, ReportHeader } from "./style/report.style";
import PrintReport from "../../components/report/PrintReport";

const Report: React.FC = () => {
    const [menu, setMenu] = useState<number>(0);

    const getMenuClass = (number: number) => {
        const className = "report-menu-item";
        if (menu === number) {
            return className + " active";
        } else {
            return className;
        }
    }

    return (
        <ReportContainer>
            <ReportHeader>
                <div className="report-menu">
                    <div className={getMenuClass(0)} onClick={() => setMenu(0)}>부동산 (아파트) 데이터 분석</div>
                    <div className={getMenuClass(1)} onClick={() => setMenu(1)}>부동산 (시군구) 데이터 분석</div>
                    <div className={getMenuClass(2)} onClick={() => setMenu(2)}>부동산 (시군구) 인프라</div>
                </div>
            </ReportHeader>
            <PrintReport menu={menu} />
        </ReportContainer>
    )
}

export default Report;