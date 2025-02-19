import React, {useState, useEffect} from "react";
import {Input, Layout, Modal, Form} from "antd";
import Image from "next/image";
import InlineSVG from "react-inlinesvg";
import ButtonStyle from "@/components/ButtonStyle";
import logo from "../../assets/images/logo-removebg.png";

const {Header} = Layout;
const {Search} = Input;

interface HeaderProps {
    onMenuItemClick: (key: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({onMenuItemClick}) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // For mobile number input modal
    const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false); // For verification code input modal

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
        setIsCodeModalOpen(false); // Close both modals if canceled
    };

    const handleSignUp = () => {
        setIsModalOpen(false); // Close the mobile number input modal
        setIsCodeModalOpen(true); // Open the verification code modal
    };

    return (
        <Header className="bg-white flex justify-evenly items-center px-4 py-3 sticky md:px-10 xl:px-32 top-0 z-50">
            <div className="hidden md:block">
                <Image alt="Logo" src={logo} width={150} height={40}/>
            </div>
            <div className="relative w-full md:px-10 xl:px-52">
                <input
                    type="text"
                    placeholder="جستجو..."
                    className="w-full h-9 border-2 py-1 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
                />
                {/* Search Icon inside the input */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <InlineSVG src="/icons/search.svg" className="w-5 h-5 text-gray-500" />
                </div>
            </div>
                {/* Logo Prefix (only visible on mobile) */}
                {isMobile && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <Image alt="Logo" src={logo} width={40} height={40} />
                    </div>
                )}

            {/* Icons Section */}
            <div className="flex items-center gap-4">
                <InlineSVG src="/icons/heart.svg" className="w-5 cursor-pointer hidden md:block"/>
                <InlineSVG src="/icons/shopping-bag.svg" className="w-5 cursor-pointer hidden md:block"/>
                <InlineSVG src="/icons/user.svg" className="w-6 cursor-pointer hidden md:block" onClick={showModal}/>
            </div>

            {/* Mobile Number Input Modal */}
            <Modal
                title="ورود/ثبت نام"
                open={isModalOpen}
                onCancel={handleCancel}
                maskClosable={false}
                footer={null}
            >
                <Form layout="vertical">
                    <Form.Item
                        label="لطفا شماره موبایل خود را وارد کنید."
                        name="name"
                        rules={[{required: true, message: 'لطفا شماره موبایل خود را وارد کنید.'}]}
                    >
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
            <Modal
                title="کد تایید"
                open={isCodeModalOpen}
                onCancel={handleCancel}
                maskClosable={false}
                footer={null}
            >
                <Form layout="vertical">
                    <Form.Item
                        label="لطفا کد تایید ارسال شده به شماره موبایل خود را وارد کنید."
                        name="verificationCode"
                        rules={[{required: true, message: 'لطفا کد تایید را وارد کنید.'}]}
                    >
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
    );
};

export default HeaderComponent;
