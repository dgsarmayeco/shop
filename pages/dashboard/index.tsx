import {useEffect, useState} from "react";
import Cards from "@/components/Cards";
import ChartComponent from "@/components/Chart";
import DataTable from "@/components/DataTable";
import Spinner from "@/components/Spinner";
import HeroSection from "@/components/HeroSection";
import SubNavbar from "@/layouts/MainLayout/SubNavbar";
import Sale from "@/pages/dashboard/BestProducts";

const DashboardPage = () => {
    const dataSource = [
        {key: "1", name: "John Doe", salary: "$120,000"},
        {key: "2", name: "Jane Smith", salary: "$150,000"},
    ];

    const tableColumns = [
        {title: "Name", dataIndex: "name", key: "name"},
        {title: "Salary", dataIndex: "salary", key: "salary"},
    ];

    return (
        <>
            <Spinner/>
            {/*<SubNavbar/>*/}
            {/*<HeroSection/>*/}
            {/*<Sale/>*/}
        </>
    );
};

export default DashboardPage;