import React, { useState } from "react";
import { Avatar, Dropdown, Input, Menu } from "antd";
import { FaRegUser, FaBell } from "react-icons/fa";
import { IoIosArrowForward, IoIosNotificationsOutline } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";

interface HeaderProps {
  onButtonClick: () => void;
  isButtonClicked: boolean;
  activeMenuItem: string;
  onMenuItemClick: (key: string) => void;
}

function Header({
  onButtonClick,
  isButtonClicked,
  activeMenuItem,
  onMenuItemClick,
}: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<
    "profile" | "notification" | null
  >(null);

  const toggleDropdown = (
    dropdown: "profile" | "notification",
    isOpen: boolean
  ) => {
    setOpenDropdown(isOpen ? dropdown : null);
  };

  // Custom Menu for Notifications with name, action, text, and time
  const notificationMenu = (
    <Menu className="text-md !p-3">
      <Menu.Item className="!text-[1.1rem] rounded-sm px-4 py-2 hover:bg-gray-100">
        <div className="flex gap-3">
          <Avatar size="default" icon={<FaRegUser />} />
          <div className="flex flex-col">
            <span className="font-medium">John Doe</span>
            <span className="text-sm">
              commented on your post "Amazing Photo!"
            </span>
            <span className="text-xs text-gray-500">2 minutes ago</span>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item className="!text-[1.1rem] rounded-sm px-4 py-2 hover:bg-gray-100">
        <div className="flex gap-3">
          <Avatar size="default" icon={<FaRegUser />} />
          <div className="flex flex-col">
            <span className="font-medium">John Doe</span>
            <span className="text-sm">
              commented on your post "Amazing Photo!"
            </span>
            <span className="text-xs text-gray-500">2 minutes ago</span>
          </div>
        </div>
      </Menu.Item>
    </Menu>
  );

  const dropItems = [
    {
      key: "1",
      label: (
        <div
          className="rounded-sm !px-2 py-2 hover:bg-gray-100"
          onClick={({ key }: any) => onMenuItemClick(key as string)}
        >
          <Link
            href="/dashboard/profile"
            className="flex justify-start items-center gap-2 cursor-pointer"
          >
            <Avatar size="default" icon={<FaRegUser />} />
            <div className="flex flex-col">
              <h6 className="!text-md font-medium">Parsa Farahani</h6>
              <p className="!text-xs text-gray-500">lalala@gmail.com</p>
            </div>
          </Link>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="!text-[1.1rem] rounded-sm px-4 py-2 hover:bg-gray-100"
          onClick={({ key }: any) => onMenuItemClick(key as string)}
        >
          <span className="!flex !items-center !gap-2">
            <IoChatbubbleOutline /> Messages
          </span>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="!text-[1.1rem] rounded-sm px-4 py-2 hover:bg-gray-100"
          onClick={({ key }: any) => onMenuItemClick(key as string)}
        >
          <span className="!flex !items-center !gap-2">
            <IoIosNotificationsOutline size={22} /> Notifications
          </span>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="!text-[1.1rem] rounded-sm px-4 py-2 hover:bg-gray-100"
          onClick={({ key }: any) => onMenuItemClick(key as string)}
        >
          <span className="!flex !items-center !gap-2">
            <IoSettingsOutline /> Settings
          </span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div
          className="!text-[1.1rem] rounded-sm px-4 py-2 hover:bg-gray-100"
          onClick={({ key }: any) => onMenuItemClick(key as string)}
        >
          <span className="!flex !items-center !gap-2">
            <GoSignOut /> Sign Out
          </span>
        </div>
      ),
    },
  ];

  return (
    <header className="bg-white shadow-md p-2 w-auto">
      <div className="w-full lg:px-10 px-5">
        <div className="flex justify-between items-center py-4">
          {/* Right Section */}
          <div className="flex gap-3 items-center space-x-4">
            {/* Profile Button */}
            <Dropdown
              menu={{ items: dropItems }}
              placement="bottom"
              arrow={{ pointAtCenter: true }}
              trigger={["click"]}
              open={openDropdown === "profile"}
              onOpenChange={(isOpen) => toggleDropdown("profile", isOpen)}
            >
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <Avatar size="large" icon={<FaRegUser />} />
                <div className="lg:flex hidden flex-col">
                  <h6 className="text-lg font-medium">Parsa Farahani</h6>
                  <p className="text-sm text-gray-500">Admin</p>
                </div>
              </div>
            </Dropdown>

            {/* Notification Button */}
            {/* <Dropdown
              placement="bottomRight"
              arrow={{ pointAtCenter: true }}
              overlay={notificationMenu}
              trigger={["click"]}
              open={openDropdown === "notification"}
              onOpenChange={(isOpen) => toggleDropdown("notification", isOpen)}
            >
              <button className="text-gray-700 hover:text-gray-900">
                <FaBell className="text-xl" />
              </button>
            </Dropdown> */}
          </div>

          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex">
              <Input
                size="large"
                placeholder="Search..."
                prefix={<RiSearch2Line />}
                allowClear
                className="border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-[#2d4fd4]"
              />
            </form>

            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2 "
              onClick={onButtonClick}
            >
              <p className="font-medium text-md">جستجو</p>
              {isButtonClicked ? (
                <HiOutlineMenuAlt1 size={23} />
              ) : (
                <IoIosArrowForward size={23} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
