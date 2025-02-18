// MainLayout.tsx
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
    <div className="flex h-full w-screen">
      <div className="flex-1 flex flex-col">
        <Header
          onButtonClick={handleButtonClick}
          isButtonClicked={isButtonClicked}
          activeMenuItem={activeMenuItem}
          onMenuItemClick={handleMenuItemClick}
        />
        {/*<SubNavbar/>*/}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;