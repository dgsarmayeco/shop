import React, { useState } from "react";
import Header from "@/layouts/MainLayout/Header";
import SubNavbar from "@/layouts/MainLayout/SubNavbar";
import FooterStyle from "@/layouts/MainLayout/FooterStyle";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("sub1");

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    const handleMenuItemClick = (key: string) => {
        setActiveMenuItem(key);
    };

    return (
        <div className="flex flex-col min-h-screen w-screen">
            {/* Header Component */}
            <Header
                onButtonClick={handleButtonClick}
                isButtonClicked={isButtonClicked}
                activeMenuItem={activeMenuItem}
                onMenuItemClick={handleMenuItemClick}
            />

            {/* Sub Navbar */}
            <SubNavbar />

            {/* Main content area */}
            <main className="flex-1 overflow-auto">{children}</main>

            {/* Footer Component (Moved to the bottom) */}
            <FooterStyle />
        </div>
    );
};

export default MainLayout;
