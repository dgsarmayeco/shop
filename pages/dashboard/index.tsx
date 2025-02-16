import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import ChartComponent from "@/components/Chart";
import DataTable from "@/components/DataTable";
import Spinner from "@/components/Spinner";

const DashboardPage = () => {
  const dataSource = [
    { key: "1", name: "John Doe", salary: "$120,000" },
    { key: "2", name: "Jane Smith", salary: "$150,000" },
  ];

  const tableColumns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Salary", dataIndex: "salary", key: "salary" },
  ];

  return (
    <div className="bg-gray-100 h-full">
      <>
        <Spinner />
        <Cards />
        <ChartComponent />
        <DataTable
          dataSource={dataSource}
          title="Dashboard Table"
          tableColumns={tableColumns}
        />
      </>
    </div>
  );
};

export default DashboardPage;
