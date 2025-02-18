import { Menu } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import InlineSVG from "react-inlinesvg";

const SubNavbar = () => {
    const [current, setCurrent] = useState('home');

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };

    const dropdownItems = [
        { key: 'option1', label: 'پوشاک', href: '/' },
        { key: 'option2', label: 'کیف و کفش', href: '/option2' },
        { key: 'option3', label: 'دکوراسیون', href: '/option3' },
        { key: 'option4', label: 'لوازم', href: '/option4' },
    ];

    return (
        <nav className="bg-white shadow-md md:static md:block fixed bottom-0 w-full z-50 md:z-auto">
            {/* The Menu is only fixed at the bottom for mobile (below 768px) */}
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                className="flex justify-between p-2 border-none md:flex md:justify-start md:px-10 xl:px-32 md:space-x-6 items-center"
            >
                {/* For mobile, icons will be above the text */}
                <Menu.Item key="terms-and-conditions" className="flex text-xs items-center md:items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="text-gray-500 text-xs">
                            <Link href="/">شرایط و قوانین</Link>
                        </div>
                        <div className="">
                            <InlineSVG src="/icons/warning-2.svg" className="fill-gray-500 w-6 pl-1" />
                        </div>

                    </div>
                </Menu.Item>

                <Menu.Item key="create-a-booth" className="flex text-xs items-center md:items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="text-gray-500 text-xs">
                            <Link href="/">ایجاد غرفه</Link>
                        </div>
                        <div className="">
                            <InlineSVG src="/icons/shop-add.svg" className="fill-gray-500 w-6 pl-1" />
                        </div>
                    </div>
                </Menu.Item>

                <Menu.Item key="stores" className="flex text-xs items-center md:items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="text-gray-500 text-xs">
                            <Link href="/">فروشگاهها</Link>
                        </div>
                        <div className="">
                            <InlineSVG src="/icons/shop.svg" className="fill-gray-500 6 pl-1" />
                        </div>
                    </div>
                </Menu.Item>

                <Menu.Item key="daast-art-magazine" className="flex text-xs items-center md:items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="text-gray-500 text-xs">
                            <Link href="/">مجله دست آرت</Link>
                        </div>
                        <div className="">
                            <InlineSVG src="/icons/document-like.svg" className="fill-gray-500 w-6 pl-1" />
                        </div>
                    </div>
                </Menu.Item>
                <Menu.Item key="special-products" className="flex text-xs items-center md:items-center">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="text-gray-500 text-xs">
                            <Link href="/">محصولات ویژه</Link>
                        </div>
                        <div className="">
                            <InlineSVG src="/icons/star.svg" className="fill-gray-500 w-6 pl-1" />
                        </div>
                    </div>
                </Menu.Item>

                <Menu.SubMenu key="dropdown" title={<span className="text-gray-500 text-xs">دسته بندی محصولات <DownOutlined /></span>}>
                    {dropdownItems.map((item) => (
                        <Menu.Item key={item.key} className="flex flex-col items-center text-xs md:flex-row md:items-center">

                            <Link href={item.href} className="text-gray-500">{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu.SubMenu>
            </Menu>
        </nav>
    );
};

export default SubNavbar;
