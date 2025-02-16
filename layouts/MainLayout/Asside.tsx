import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";
import { FaHouse, FaChartPie, FaBoxOpen, FaChartSimple } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { BiSolidCommentDots } from "react-icons/bi";
import { IoMdSettings, IoMdPricetags } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.jpg";

interface AssideProps {
  isButtonClicked: boolean;
}

const Asside: React.FC<AssideProps> = ({ isButtonClicked }) => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  type MenuItem = Required<MenuProps>["items"][number];

  // Define menu routes with title and link
  const menuRoutes = [
    {
      key: "sub1",
      title: "خانه",
      link: "/dashboard",
      icon: <FaHouse size={16} />,
    },
    {
      key: "sub2",
      title: "مدیریت کاربران",
      icon: <MdManageAccounts size={20} />,
      children: [
        { key: "5", title: "لیست کاربران", link: "/dashboard/users" },
        { key: "6", title: "گزارش ورود", link: "/dashboard/login-report" },
        { key: "7", title: "تعریف کاربر", link: "/dashboard/create-user" },
      ],
    },
    {
      key: "sub3",
      title: "مدیریت فروشندگان",
      icon: <RiCustomerService2Fill size={16} />,
      children: [
        { key: "8", title: "لیست فروشندگان", link: "/dashboard/vendors" },
        { key: "9", title: "افزودن فروشگاه", link: "/dashboard/add-store" },
        {
          key: "10",
          title: "پلن های فروشندگی",
          link: "/dashboard/vendor-plans",
        },
      ],
    },
    {
      key: "sub5",
      title: "مدیریت محصولات",
      icon: <FaChartPie size={16} />,
      children: [
        { key: "13", title: "لیست محصولات", link: "/dashboard/all_products" },
        { key: "14", title: "افزودن محصول", link: "/dashboard/add_product" },
        {
          key: "15",
          title: "دسته بندی محصولات",
          link: "/dashboard/categories",
        },
        { key: "16", title: "مشخصات فنی محصول", link: "/dashboard/specs" },
        { key: "17", title: "مدیریت برندها", link: "/dashboard/brands" },
      ],
    },
    {
      key: "sub6",
      title: "کارتابل انبار",
      icon: <FaBoxOpen size={16} />,
      children: [
        { key: "18", title: "انبار محصولات", link: "/dashboard/warehouse" },
      ],
    },
    {
      key: "sub7",
      title: "سفارشات",
      icon: <FaChartSimple size={16} />,
      children: [
        { key: "sub7-1", title: "لیست سفارشات", link: "/dashboard/orders" },
        { key: "sub7-2", title: "ایجاد فاکتور", link: "/dashboard/invoice" },
        { key: "sub7-3", title: "سفارشات مرجوعی", link: "/dashboard/returns" },
        {
          key: "sub7-4",
          title: "روشهای ارسال محصول",
          link: "/dashboard/shipping",
        },
      ],
    },
    {
      key: "sub8",
      title: "کوپون و تخفیفات",
      link: "/dashboard/coupons",
      icon: <IoMdPricetags size={16} />,
    },
    {
      key: "sub9",
      title: "دیدگاه شما",
      link: "/dashboard/comments",
      icon: <BiSolidCommentDots size={16} />,
    },
    {
      key: "sub10",
      title: "تنظیمات",
      link: "/dashboard/settings",
      icon: <IoMdSettings size={16} />,
    },
  ];

  // Convert menuRoutes array to Ant Design Menu format
  const items: MenuItem[] = menuRoutes.map((menu) => ({
    key: menu.key,
    label: menu.link ? <Link href={menu.link}>{menu.title}</Link> : menu.title,
    icon: menu.icon,
    children: menu.children?.map((child) => ({
      key: child.key,
      label: <Link href={child.link}>{child.title}</Link>,
    })),
  }));

  // Find active item and parent menu based on URL
  useEffect(() => {
    const currentPath = router.pathname;

    let newSelectedKey = "";
    let newOpenKeys: string[] = [];

    menuRoutes.forEach((menu) => {
      if (menu.children) {
        menu.children.forEach((subMenu) => {
          if (subMenu.link === currentPath) {
            newSelectedKey = subMenu.key;
            newOpenKeys = [menu.key];
          }
        });
      } else if (menu.link === currentPath) {
        newSelectedKey = menu.key;
      }
    });

    setSelectedKey(newSelectedKey);
    setOpenKeys((prevKeys) =>
      newOpenKeys.length
        ? [...new Set([...prevKeys, ...newOpenKeys])]
        : prevKeys
    );
  }, [router.pathname]);

  // Handle opening and closing of menus
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <aside
      className={`bg-[#001529] text-white min-h-screen transition-all duration-500 ease-in-out
        ${isButtonClicked ? "w-24" : "w-72"}`}
    >
      <Link
        href="/dashboard"
        className="flex items-center justify-center mb-8 mt-4"
      >
        <Image
          src={logo}
          alt="Logo"
          width={128}
          height={64}
          className={`transition-all duration-300 ${
            isButtonClicked ? "w-0" : "w-32"
          }`}
        />
      </Link>
      <nav>
        <Menu
          selectedKeys={[selectedKey]}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
          mode="inline"
          theme="dark"
          items={items}
          style={{ direction: "rtl" }}
          inlineCollapsed={isButtonClicked}
          className="!p-5"
        />
      </nav>
    </aside>
  );
};

export default Asside;
