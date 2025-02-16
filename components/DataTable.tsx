import React, { useState } from "react";
import { Table, TableColumnsType } from "antd";

interface DataTableProps {
  dataSource?: Record<string, any>[];
  title?: string;
  tableColumns?: TableColumnsType<any>;
}

const DataTable: React.FC<DataTableProps> = ({
  dataSource = [],
  title = "",
  tableColumns = [],
}) => {
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | null>(null);

  // Function to remove the currency symbols and commas
  const parseSalary = (salary: string) => {
    return parseInt(salary.replace(/[^0-9.-]+/g, ""));
  };

  // Handle the sorting toggle
  const handleSort = () => {
    const newSortOrder = sortOrder === "ascend" ? "descend" : "ascend";
    setSortOrder(newSortOrder);
  };

  return (
    <div className="p-6 px-12">
      <h2 className="text-xl font-bold mb-4 float-right">{title}</h2>
      <Table dataSource={dataSource} columns={tableColumns} direction="rtl" />
    </div>
  );
};

export default DataTable;
