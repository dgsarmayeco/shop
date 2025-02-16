import React, { useState } from "react";
import { Avatar, Dropdown, Input, Menu, Layout, Button } from "antd";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline, IoChatbubbleOutline } from "react-icons/io5";
import { GoSignOut } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { PiBasketLight } from "react-icons/pi";
import { CiHeart, CiBellOn } from "react-icons/ci";
import logo from "../../assets/images/logo-removebg.png";

const { Header } = Layout;
const { Search } = Input;

interface HeaderProps {
  onButtonClick: () => void;
  isButtonClicked: boolean;
  activeMenuItem: string;
  onMenuItemClick: (key: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({
  onButtonClick,
  isButtonClicked,
  activeMenuItem,
  onMenuItemClick,
}) => {
  const [openDropdown, setOpenDropdown] = useState<
    "profile" | "notification" | null
  >(null);

  const toggleDropdown = (
    dropdown: "profile" | "notification",
    isOpen: boolean
  ) => {
    setOpenDropdown(isOpen ? dropdown : null);
  };

  const notificationMenu = (
    <Menu>
      <Menu.Item>
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

  const dropItems = (
    <Menu direction="rtl">
      <Menu.Item key="1">
        <Link href="/dashboard/profile" className="flex gap-2 items-center">
          <Avatar size="default" icon={<FaRegUser />} />
          <div className="flex flex-col">
            <h6 className="font-medium">Parsa Farahani</h6>
            <p className="text-xs text-gray-500">lalala@gmail.com</p>
          </div>
        </Link>
      </Menu.Item>
      <Menu.Item
        className="text-right"
        dir="rtl"
        key="2"
        icon={<IoChatbubbleOutline />}
        onClick={() => onMenuItemClick("2")}
      >
        سفارشات و خرید ها
      </Menu.Item>
      <Menu.Item
        className="text-right"
        dir="rtl"
        key="3"
        icon={<IoIosNotificationsOutline />}
        onClick={() => onMenuItemClick("3")}
      >
        اعتبار حساب : 0
      </Menu.Item>
      <Menu.Item
        className="text-right"
        dir="rtl"
        key="4"
        icon={<IoSettingsOutline />}
        onClick={() => onMenuItemClick("4")}
      >
        پیام ها
      </Menu.Item>
      <Menu.Item
        className="text-right"
        dir="rtl"
        key="5"
        icon={<GoSignOut />}
        onClick={() => onMenuItemClick("5")}
      >
        تنظیمات حساب
      </Menu.Item>
      <Menu.Item
        className="text-right"
        dir="rtl"
        key="6"
        icon={<GoSignOut />}
        onClick={() => onMenuItemClick("6")}
      >
        فروش در دست آرت
      </Menu.Item>
      <Menu.Item
        className="text-right"
        dir="rtl"
        key="7"
        icon={<GoSignOut />}
        onClick={() => onMenuItemClick("7")}
      >
        خروج از حساب
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="bg-white flex justify-between items-center w-2/3 mx-auto !p-10 gap-20">
      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <div>
            <PiBasketLight size={26} />
          </div>
          <div>
            <CiHeart size={26} />
          </div>
          <div>
            <CiBellOn size={26} />
          </div>
          <Dropdown
            overlay={notificationMenu}
            trigger={["click"]}
            onVisibleChange={(visible) =>
              toggleDropdown("notification", visible)
            }
          ></Dropdown>
          <Dropdown
            overlay={dropItems}
            trigger={["click"]}
            onVisibleChange={(visible) => toggleDropdown("profile", visible)}
          >
            <Avatar
              size="default"
              icon={<FaRegUser />}
              className="cursor-pointer"
            />
          </Dropdown>
        </div>
      </div>

      <Search
        placeholder="Search..."
        allowClear
        className="w-5/6 !rounded-full"
      />

      <Image alt="Logo" src={logo} width={150} height={40} />
    </Header>
  );
};

export default HeaderComponent;
