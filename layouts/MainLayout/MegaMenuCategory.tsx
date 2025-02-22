import React, { useState } from 'react';
import InlineSVG from "react-inlinesvg";
import Container from "@/components/Container";
import cn from "classnames";

const menuData = [
    {
        key: "fashion",
        title: "مد و پوشاک",
        icon: "/icons/bag.svg",
        icon2: "<InlineSVG src='/icons/arrow-left-2.svg' />",
        children: [
            {
                key: "1-1",
                title: "زنانه",
                children: [
                    { key: "1-1-1", title: "لباس ورزشی زنانه" },
                    { key: "1-1-2", title: "کفش مجلسی زنانه" }
                ]
            },
            {
                key: "1-2",
                title: "مردانه",
                children: [
                    { key: "1-2-1", title: "نیم لوت مردانه" },
                    { key: "1-2-2", title: "کت شلوار مردانه" }
                ]
            }
        ]
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
                    { key: "2-1-2", title: "کیف دستی" }
                ]
            },
            {
                key: "2-2",
                title: "کفش",
                children: [
                    { key: "2-2-1", title: "کفش پیاده روی" },
                    { key: "2-2-2", title: "کفش پاشنه بلند" }
                ]
            }
        ]
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
                    { key: "3-1-2", title: "آباژور" }
                ]
            },
            {
                key: "3-2",
                title: "پذیرایی",
                children: [
                    { key: "3-2-1", title: "شمعدان" },
                    { key: "3-2-2", title: "گلدان" }
                ]
            }
        ]
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
                    { key: "4-1-2", title: "چراغ مطالعه" }
                ]
            },
            {
                key: "4-2",
                title: "نقاشی",
                children: [
                    { key: "4-2-1", title: "نقاشی سیاه قلم" },
                    { key: "4-2-2", title: "لوازم التحریر" }
                ]
            }
        ]
    }
];

const MegaMenu = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(null);  // Track which category is open
    const [selectedItem, setSelectedItem] = useState<string | null>(null);  // Track selected item

    // Toggle visibility of the submenus
    const toggleCategory = (key: string) => {
        // Close menu if clicking the currently opened category, otherwise open the new category
        setOpenCategory(openCategory === key ? null : key);
    };

    // Handle item selection
    const handleItemClick = (key: string) => {
        setSelectedItem(key);  // Set selected item
        setOpenCategory(null);  // Close the menu when an item is selected
    };

    // Recursive function to generate menu items
    const generateMenuItems = (items: any[]) => {
        return items.map(item => (
            <div key={item.key} className="relative group">
                <button
                    onClick={(e) => {
                        e.stopPropagation();  // Prevent click from closing the parent
                        toggleCategory(item.key);
                    }}
                    className="w-full text-right px-4 py-2 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
                >
                    {item.icon && <InlineSVG src={item.icon} className="w-5 h-5 inline-block mr-2" />}
                    {item.title}
                    {item.children && <InlineSVG src="/icons/arrow-left-2.svg" className="w-5 h-5 ml-2" />}
                </button>
                {item.children && openCategory === item.key && (
                    <div className="absolute right-full top-0 pr-6 bg-white shadow-lg rounded-md mt-2 z-10 min-h-full flex flex-col">
                        {generateMenuItems(item.children)}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <Container tag="section">
            <div className="flex justify-center">
                <div className="relative group">
                    <button className="flex items-center text-gray-500 hover:text-black">
                        <InlineSVG src="/icons/hambergur-menu.svg" className="w-6 h-6 mr-2" />
                        <span className="text-xs">دسته بندی محصولات</span>
                    </button>
                    <div className={cn("absolute right-0 w-48 mt-2 bg-white shadow-lg rounded-xl z-10 opacity-0",
                        "group-hover:opacity-100 transition-opacity duration-200 ease-in-out")}>
                        <div className="p-2  min-h-full">
                            {generateMenuItems(menuData)}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default MegaMenu;
