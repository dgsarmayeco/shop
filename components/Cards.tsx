import React from "react";
import { FaCreditCard, FaShoppingCart, FaCheck } from "react-icons/fa";
import { HiMiniBuildingStorefront } from "react-icons/hi2";
import { IoPeople } from "react-icons/io5";
import BreadCrumb from "./BreadCrumb";

function Cards() {
  return (
    <div className="p-6 px-12">
      <div className="flex justify-between items-center w-11/12 mx-auto my-5 ">
        <BreadCrumb />
        <h1 className="text-2xl font-medium mb-3">داشبورد</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-5">
        {/* New Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center w-full justify-end">
          <div className="flex justify-end flex-col">
            <h2 className="text-md font-medium flex justify-end text-end">
              فروشگاه ها
            </h2>
            <p className="text-lg font-medium mt-2 flex justify-end">10</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
            <HiMiniBuildingStorefront size={25} className="text-blue-800" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center w-full justify-end">
          <div className="flex justify-end flex-col">
            <h2 className="text-md font-medium flex justify-end text-end">
              مشتریان
            </h2>
            <p className="text-lg font-medium mt-2 flex justify-end">34,567</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
            <IoPeople size={25} className="text-blue-800" />
          </div>
        </div>

        {/* Total Income */}
        <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center justify-end">
          <div className="flex justify-end flex-col">
            <h2 className="text-md font-medium flex justify-end text-end">
              دیدگاه های تایید شده
            </h2>
            <p className="text-lg font-medium mt-2 flex justify-end">74,567</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
            <FaCheck size={25} className="text-blue-800" />
          </div>
        </div>

        {/* Total Expense */}
        <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center justify-end">
          <div className="flex justify-end flex-col">
            <h2 className="text-md font-medium flex justify-end text-end">
              تراکنش های روز
            </h2>
            <p className="text-lg font-medium mt-2 flex justify-end">24,567</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
            <FaCreditCard size={25} className="text-blue-800" />
          </div>
        </div>

        {/* New User */}
        <div className="bg-white p-6 rounded-lg shadow-md flex gap-4 items-center justify-end">
          <div className="flex justify-end flex-col">
            <h2 className="text-md font-medium flex justify-end text-end">
              سفارش امروز
            </h2>
            <p className="text-lg font-medium mt-2 flex justify-end">34,567</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-full flex items-center justify-center">
            <FaShoppingCart size={25} className="text-blue-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
