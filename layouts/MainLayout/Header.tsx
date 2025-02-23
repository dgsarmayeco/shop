import React, {useState, useEffect} from "react";
import {Input, Layout, Modal, Form} from "antd";
import Image from "next/image";
import InlineSVG from "react-inlinesvg";
import ButtonStyle from "@/components/ButtonStyle";
import logo from "../../assets/images/logo-removebg.png";
import Container from "@/components/Container";
import cn from "classnames";
import MegaMenuCategory from "@/layouts/MainLayout/MegaMenuCategory";

const {Header} = Layout;

interface HeaderProps {
    onMenuItemClick: (key: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({onMenuItemClick}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);

    // Search Dropdown State
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [recentSearches, setRecentSearches] = useState<string[]>(["آینه و کنسول", "میز تلوزیون", "انگشتر زمرد"]);
    const popularSearches = ["هدیه تولد", "ماگ دستساز", "آینه دفرمه", "گلدان سرامیکی"];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsCodeModalOpen(false);
    };

    const handleSignUp = () => {
        setIsModalOpen(false);
        setIsCodeModalOpen(true);
    };

    const handleSearchSelect = (item: string) => {
        setSearchQuery(item);
        setIsDropdownOpen(false);
        setRecentSearches((prev) => [item, ...prev.filter((s) => s !== item)].slice(0, 5));
    };

    return (
        <Container tag="section">
            <Header className="bg-white w-full px-0 flex justify-evenly items-center py-3 sticky md:px-10 z-50">
                <div className="hidden md:block">
                    <Image alt="Logo" src={logo} width={150} height={40}/>
                </div>

                {/* Mobile Search Input */}
                {isMobile && (
                    <div className="relative w-full flex-1 md:px-10 xl:px-52">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="جستجو در"
                                className={cn(
                                    "w-full bg-gray-100 h-9 pl-8 pr-9 rounded-full focus:outline-none ",
                                    "focus:ring-1 focus:ring-logo-primary text-gray-800 text-xs",
                                )}
                                value={searchQuery}
                                onFocus={() => setIsDropdownOpen(true)}
                                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <InlineSVG
                                src="/icons/search.svg"
                                className="absolute cursor-pointer right-3 fill-gray-500 top-1/2 -translate-y-1/2 w-5 h-5"/>
                            {!searchQuery && (
                                <>

                                    <Image
                                        alt="Logo"
                                        src="/images/logo/daastart-farsi-logo.svg"
                                        width={80}
                                        height={0}
                                        className="absolute right-24 top-1/2 -translate-y-1/2"
                                    />
                                </>
                            )}
                            <InlineSVG
                                src="/icons/camera.svg"
                                className="absolute cursor-pointer left-3 fill-gray-500 top-1/2 -translate-y-1/2 w-5 h-5"
                            />
                        </div>

                        {/* Dropdown for Mobile */}
                        {isDropdownOpen && (
                            <div className="absolute w-full bg-white border shadow-lg rounded-lg mt-1 p-3 z-50">
                                <div className="text-sm flex text-gray-600 mb-2">
                                    <InlineSVG
                                        src="/icons/like.svg"
                                        className=" fill-gray-500 ml-1 w-5 h-5"/>
                                    <span>جستجوهای پرطرفدار:</span>
                                </div>
                                <ul className="text-xs text-gray-800">
                                    {popularSearches.map((item, index) => (
                                        <li
                                            key={index}
                                            className="py-1 px-3 cursor-pointer hover:bg-gray-100 rounded"
                                            onMouseDown={() => handleSearchSelect(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-2"/>
                                <div className="text-sm flex text-gray-600 mb-2">
                                    <InlineSVG
                                        src="/icons/timer.svg"
                                        className=" fill-gray-500 ml-1 w-5 h-5"/>
                                    <span>جستجوهای اخیر:</span>
                                </div>
                                <ul className="text-xs text-gray-800">
                                    {recentSearches.map((item, index) => (
                                        <li
                                            key={index}
                                            className="py-1 px-3 cursor-pointer text-xs hover:bg-gray-100 rounded"
                                            onMouseDown={() => handleSearchSelect(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Desktop Search Box with Dropdown */}
                {!isMobile && (
                    <div className="relative w-full flex-1 md:px-10 xl:px-52">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="جستجوی محصول، دسته‌بندی یا برند..."
                                className="w-full bg-gray-100 h-9 pl-10 pr-9 rounded-full focus:outline-none
                                        focus:ring-1 focus:ring-logo-primary text-gray-800 text-xs placeholder-gray-400"
                                value={searchQuery}
                                onFocus={() => setIsDropdownOpen(true)}
                                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <InlineSVG
                                src="/icons/search.svg"
                                className="absolute cursor-pointer fill-gray-500 top-1/2 right-3 -translate-y-1/2 w-5 h-5"
                            />
                            <InlineSVG
                                src="/icons/camera.svg"
                                className="absolute cursor-pointer fill-gray-500 top-1/2 left-3 -translate-y-1/2 w-5 h-5"
                            />
                        </div>


                        {/* Dropdown for Desktop */}
                        {isDropdownOpen && (
                            <div
                                className={cn("absolute w-[20.125rem] lg:w-[35.625rem] xl:w-[33.625rem] ",
                                    "2xl:w-[49.625rem] bg-white border shadow-lg rounded-lg mt-1 p-3 z-50")}>

                                <div className="text-sm flex text-gray-400 mb-2">
                                    <InlineSVG
                                        src="/icons/like.svg"
                                        className=" fill-gray-500 ml-1 w-5 h-5"/>
                                    <span>جستجوهای پرطرفدار:</span>
                                </div>
                                <ul className="text-xs text-gray-800">
                                    {popularSearches.map((item, index) => (
                                        <li
                                            key={index}
                                            className="py-1 px-3 cursor-pointer hover:bg-gray-100 rounded"
                                            onMouseDown={() => handleSearchSelect(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <hr className="my-2"/>

                                <div className="text-sm flex text-gray-400 mb-2">
                                    <InlineSVG
                                        src="/icons/timer.svg"
                                        className=" fill-gray-500 ml-1 w-5 h-5"/>
                                    <span>جستجوهای اخیر:</span>

                                </div>
                                <ul className="text-xs text-gray-800">
                                    {recentSearches.map((item, index) => (
                                        <li
                                            key={index}
                                            className="py-1 px-3 cursor-pointer hover:bg-gray-100 rounded"
                                            onMouseDown={() => handleSearchSelect(item)}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* Icons Section */}
                <div
                    className={cn(
                        "flex items-center gap-4",
                        isMobile
                            ? "fixed bottom-0 w-full bg-white py-2 border-t z-50 justify-evenly"
                            : "hidden md:flex justify-evenly"
                    )}
                >
                    {/* Conditionally render MegaMenuCategory only for mobile */}
                    {isMobile && <MegaMenuCategory />}

                    <InlineSVG
                        src="/icons/heart.svg"
                        className="w-5 cursor-pointer"
                    />
                    <InlineSVG
                        src="/icons/shopping-bag.svg"
                        className="w-5 cursor-pointer"
                    />
                    <InlineSVG
                        src="/icons/user.svg"
                        className="w-6 cursor-pointer"
                        onClick={showModal}
                    />
                </div>

                {/* Mobile Number Input Modal */}
                <Modal title="ورود/ثبت نام" open={isModalOpen} onCancel={handleCancel} maskClosable={false}
                       footer={null}>
                    <Form layout="vertical">
                        <Form.Item label="لطفا شماره موبایل خود را وارد کنید." name="name"
                                   rules={[{required: true, message: 'لطفا شماره موبایل خود را وارد کنید.'}]}>
                            <Input placeholder="09*********"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-center items-center">
                                <ButtonStyle variant="fill" color="footerDark" className="w-1/2" onClick={handleSignUp}>
                                    ثبت نام
                                </ButtonStyle>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>

                {/* Verification Code Modal */}
                <Modal title="کد تایید" open={isCodeModalOpen} onCancel={handleCancel} maskClosable={false}
                       footer={null}>
                    <Form layout="vertical">
                        <Form.Item label="لطفا کد تایید ارسال شده به شماره موبایل خود را وارد کنید."
                                   name="verificationCode"
                                   rules={[{required: true, message: 'لطفا کد تایید را وارد کنید.'}]}>
                            <Input placeholder="کد تایید"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="flex justify-center items-center">
                                <ButtonStyle variant="fill" color="footerDark" className="w-1/2">
                                    تایید
                                </ButtonStyle>
                            </div>
                        </Form.Item>
                    </Form>
                </Modal>
            </Header>
        </Container>
    );
};

export default HeaderComponent;
