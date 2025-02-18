import React, {useState, useEffect} from "react";
import {Avatar, Dropdown, Input, Menu, Layout} from "antd";
import {FaRegUser} from "react-icons/fa";
import {GoSignOut} from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import InlineSVG from "react-inlinesvg";
import logo from "../../assets/images/logo-removebg.png";

const {Header} = Layout;
const {Search} = Input;

interface HeaderProps {
    onMenuItemClick: (key: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({onMenuItemClick}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const dropItems = (
        <Menu>
            <Menu.Item key="1">
                <Link href="/dashboard/profile" className="flex gap-2 items-center">
                    <Avatar size="default" icon={<FaRegUser/>}/>
                    <div className="flex flex-col">
                        <h6 className="font-medium">Parsa Farahani</h6>
                        <p className="text-xs text-gray-500">lalala@gmail.com</p>
                    </div>
                </Link>
            </Menu.Item>
            {[{key: "7", label: "Logout", icon: <GoSignOut/>}].map((item) => (
                <Menu.Item key={item.key} onClick={() => onMenuItemClick(item.key)} icon={item.icon}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <Header
            className="bg-white flex justify-evenly items-center px-4 py-3 shadow-md sticky md:px-10 xl:px-32 top-0 z-50">
            {/* Icons Section */}
            <div className="flex items-center gap-4">
                <InlineSVG src="/icons/heart.svg" className="w-5 cursor-pointer hidden md:block"/>
                <InlineSVG src="/icons/shopping-bag.svg" className="w-5 cursor-pointer hidden md:block"/>

                <Dropdown overlay={dropItems} trigger={["click"]}>
                    <InlineSVG src="/icons/user.svg" className="w-6 cursor-pointer hidden md:block"/>
                </Dropdown>
            </div>
            <Search
                placeholder="...جستجو"
                className="w-full md:px-10 xl:px-52 rounded text-right"
                prefix={
                    isMobile && (
                        <Image alt="Logo" src={logo} width={85} height={85} className="mr-2"/>
                    )
                }
            />

            <div className="hidden md:block">
                <Image alt="Logo" src={logo} width={150} height={40}/>
            </div>
        </Header>
    );
};

export default HeaderComponent;
