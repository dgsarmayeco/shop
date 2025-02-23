import React, { useState } from "react";
import InlineSVG from "react-inlinesvg";
import Container from "@/components/Container";
import cn from "classnames";

const menuData = [
    {
        key: "fashion",
        title: "مد و پوشاک",
        icon: "/icons/bag.svg",
        children: [
            {
                key: "1-1",
                title: "زنانه",
                children: [
                    { key: "1-1-1", title: "لباس ورزشی زنانه" },
                    { key: "1-1-2", title: "کفش مجلسی زنانه" },
                ],
            },
            {
                key: "1-2",
                title: "مردانه",
                children: [
                    { key: "1-2-1", title: "نیم بوت مردانه" },
                    { key: "1-2-2", title: "کت شلوار مردانه" },
                ],
            },
        ],
    },
    {
        key: "bags&shoes",
        title: "کیف و کفش",
        icon: "/icons/bag.svg",
        children: [
            {
                key: "2-1",
                title: "کیف",
                children: [
                    { key: "2-1-1", title: "کیف چرمی" },
                    { key: "2-1-2", title: "کیف دستی" },
                ],
            },
            {
                key: "2-2",
                title: "کفش",
                children: [
                    { key: "2-2-1", title: "کفش پیاده روی" },
                    { key: "2-2-2", title: "کفش پاشنه بلند" },
                ],
            },
        ],
    },
    {
        key: "homedecor",
        title: "دکوراسیون",
        icon: "/icons/shapes.svg",
        children: [
            {
                key: "3-1",
                title: "اتاق خواب",
                children: [
                    { key: "3-1-1", title: "چراغ خواب" },
                    { key: "3-1-2", title: "آباژور" },
                ],
            },
            {
                key: "3-2",
                title: "پذیرایی",
                children: [
                    { key: "3-2-1", title: "شمعدان" },
                    { key: "3-2-2", title: "گلدان" },
                ],
            },
        ],
    },
    {
        key: "supplies",
        title: "لوازم",
        icon: "/icons/ruler&pen.svg",
        children: [
            {
                key: "4-1",
                title: "برقی",
                children: [
                    { key: "4-1-1", title: "لوستر" },
                    { key: "4-1-2", title: "چراغ مطالعه" },
                ],
            },
            {
                key: "4-2",
                title: "نقاشی",
                children: [
                    { key: "4-2-1", title: "نقاشی سیاه قلم" },
                    { key: "4-2-2", title: "لوازم التحریر" },
                ],
            },
        ],
    },
];

const MegaMenu = () => {
    const [openSubCategory, setOpenSubCategory] = useState<{ [key: string]: boolean }>({
        "fashion": true, // Set "fashion" as the default opened category
    });

    const toggleSubCategory = (key: string) => {
        setOpenSubCategory((prev) => ({
            ...prev,
            [key]: !prev[key], // Toggle only the specific subcategory
        }));
    };

    const generateMenuItems = (items: any[], level = 0) => {
        return items.map((item) => (
            <div key={item.key} className="relative group">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        if (item.children) {
                            toggleSubCategory(item.key); // Toggle only if there are children
                        }
                    }}
                    className="w-full text-right px-2 py-2 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                >
                    {item.icon && <InlineSVG src={item.icon} className="w-5 h-5 inline-block mr-2" />}
                    {item.title}
                    {item.children && (
                        <InlineSVG
                            src="/icons/arrow-left-2.svg"
                            className={`w-4 h-4 transition-transform ${
                                openSubCategory[item.key] ? "rotate-90" : ""
                            }`}
                        />
                    )}
                </button>
                {item.children && openSubCategory[item.key] && (
                    <div
                        className="absolute right-full top-0 pr-4 bg-white shadow-lg rounded-md mt-2 z-10 min-w-[150px]"
                        style={{ marginTop: `${level * 10}px`, marginRight: `${level * 20}px` }}
                    >
                        {generateMenuItems(item.children, level + 1)} {/* Pass the level to adjust the indentation */}
                    </div>
                )}
            </div>
        ));
    };

    return (

            <div className="flex justify-center">
                <div className="relative group">
                    <button className="flex items-center text-gray-500 hover:text-black">
                        <InlineSVG src="/icons/hambergur-menu.svg" className="w-6 h-6 mr-2" />
                        <span className="text-xs">دسته بندی محصولات</span>
                    </button>
                    <div
                        className={cn(
                            "absolute right-0 w-48 mt-2 bg-white shadow-lg rounded-xl z-10 opacity-0 group-hover:opacity-100",
                            "transition-opacity duration-200 ease-in-out"
                        )}
                    >
                        {generateMenuItems(menuData)}
                    </div>
                </div>
            </div>

    );
};

export default MegaMenu;
