import React, { useState } from "react";
import Header from "@/layouts/MainLayout/Header";
import SubNavbar from "@/layouts/MainLayout/SubNavbar";

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
      <div className="flex h-full w-screen flex-col">
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
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
  );
};

export default MainLayout;
