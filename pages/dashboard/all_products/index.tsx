import React from "react";
import DataTable from "@/components/DataTable";
import { FaTrash, FaPen } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import BreadCrumb from "@/components/BreadCrumb";
import Link from "next/link";
import { RiSearch2Line } from "react-icons/ri";
import { Input } from "antd";

function Index() {
  const dataSource = [
    {
      key: "1",
      name: "موبایل",
      price: "$120,000",
      publisher: "paghi",
      view: 23,
      sell: "100000",
      status: "فعال",
      cta: (
        <div className="flex gap-5">
          <FaTrash size={16} className="text-red-600 cursor-pointer" />
          <Link href="/dashboard/edit_product">
            {" "}
            <FaPen size={16} className="text-green-700" />
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      name: "هدفون",
      price: "$120,000",
      publisher: "paghi",
      view: 23,
      sell: "100000",
      status: "فعال",
      cta: (
        <div className="flex gap-5">
          <FaTrash size={16} className="text-red-600 cursor-pointer" />
          <Link href="/dashboard/edit_product">
            {" "}
            <FaPen size={16} className="text-green-700" />
          </Link>
        </div>
      ),
    },
  ];

  const tableColumns = [
    { title: "نام", dataIndex: "name", key: "name" },
    { title: "منتشر کننده", dataIndex: "publisher", key: "publisher" },
    { title: "قیمت", dataIndex: "price", key: "price" },
    { title: "بازدید", dataIndex: "view", key: "view" },
    { title: "فروش", dataIndex: "sell", key: "sell" },
    { title: "وضعیت", dataIndex: "status", key: "status" },
    { title: "عملیات", dataIndex: "cta", key: "cta" },
  ];

  return (
    <div>
      <Spinner />
      <div className="flex justify-between items-center w-11/12 mx-auto mt-10 ">
        <BreadCrumb />
        <h1 className="text-2xl font-medium">لیست محصولات</h1>
      </div>{" "}
      <form className="hidden md:flex w-1/5 mr-16 my-6 float-right">
        <Input
          dir="rtl"
          placeholder="جستجو..."
          prefix={<RiSearch2Line />}
          allowClear
          className="border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#2d4fd4] !text-md"
        />
      </form>
      <DataTable dataSource={dataSource} tableColumns={tableColumns} />
    </div>
  );
}

export default Index;
