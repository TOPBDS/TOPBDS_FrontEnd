import React from "react";
import "./style/report.css";
import { ReportContainer, ReportHeader } from "./style/report.style";
import PrintReport from "../../components/report/PrintReport";

const Report: React.FC = () => {
    return (
        <ReportContainer>
            <ReportHeader>
                <div className="report-menu">
                    <div className="report-menu-item">부동산 (아파트) 데이터 분석</div>
                    <div className="report-menu-item">부동산 (시군구) 데이터 분석</div>
                    <div className="report-menu-item">부동산 (시군구) 인프라</div>
                </div>
            </ReportHeader>
            <PrintReport />
        </ReportContainer>
    )
}

export default Report;