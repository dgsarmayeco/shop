import {Menu} from "antd";
import Link from "next/link";
import {useState, useRef} from "react";
import InlineSVG from "react-inlinesvg";
import Container from "@/components/Container";
import MegaMenuCategory from "@/layouts/MainLayout/MegaMenuCategory";

const SubNavbar = () => {
    const [current, setCurrent] = useState("home");
    const [openCategory, setOpenCategory] = useState<string | null>(null); // Tracks the open category
    const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null); // Tracks the active subcategory
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };

    return (
        <Container tag="section">
            <nav className="bg-white hidden md:block w-full z-50 ">
                <Menu
                    onClick={handleClick}
                    mode="horizontal"
                    className="flex justify-between p-2 border-none  md:justify-start  items-center">
                    <MegaMenuCategory/>

                    {[{key: "special-products", icon: "/icons/star.svg", label: "محصولات ویژه"},
                        {key: "create-a-booth", icon: "/icons/shop-add.svg", label: "ایجاد غرفه"},
                        {key: "stores", icon: "/icons/shop.svg", label: "فروشگاه‌ها"},
                        {key: "daast-art-magazine", icon: "/icons/document-like.svg", label: "مجله دست آرت"},
                        {key: "terms-and-conditions", icon: "/icons/warning-2.svg", label: "شرایط و قوانین"}]
                        .map((item) => (
                            <Menu.Item key={item.key} className="flex text-xs items-center md:items-center">
                                <div className="flex flex-col md:flex-row items-center">
                                    <InlineSVG src={item.icon} className="fill-gray-500 w-6 pl-1"/>
                                    <span className="text-gray-500 text-xs">
                                        <Link href="/">{item.label}</Link>
                                    </span>
                                </div>
                            </Menu.Item>
                        ))}
                </Menu>
            </nav>
        </Container>
    );
};

export default SubNavbar;
