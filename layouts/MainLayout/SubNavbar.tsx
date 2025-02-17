import { Menu } from 'antd';
import Link from 'next/link';
import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
const SubNavbar = () => {
    const [current, setCurrent] = useState('home');

    const handleClick = (e: any) => {
        setCurrent(e.key);
    };

    const dropdownItems = [
        { key: 'option1', label: 'پوشاک', href: '/' },
        { key: 'option2', label: 'کیف و کفش', href: '/option2' },
        { key: 'option3', label: 'دکوراسیون', href: '/option3' },
        { key: 'option4', label: 'لوازم', href: '/option4' }
    ];

    return (
        <nav className="p-3 bg-white shadow-md">
            <Menu
                onClick={handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                className="flex justify-center space-x-6  border-none"
            >
                <Menu.Item key="terms-and-conditions">
                    <Link href="/">شرایط و قوانین</Link>
                </Menu.Item>
                <Menu.Item key="create-a-booth">
                    <Link href="/">ایجاد غرفه</Link>
                </Menu.Item>
                <Menu.Item key="stores">
                    <Link href="/">فروشگاهها</Link>
                </Menu.Item>

                <Menu.Item key="daast-art-magazine">
                    <Link href="/">مجله دست آرت</Link>
                </Menu.Item>
                <Menu.Item key="special-products">
                    <Link href="/">محصولات ویژه</Link>
                </Menu.Item>
                <Menu.SubMenu key="dropdown" title={<span>دسته بندی محصولات <DownOutlined /></span>}>
                    {dropdownItems.map(item => (
                        <Menu.Item key={item.key}>
                            <Link href={item.href}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </Menu.SubMenu>
            </Menu>
        </nav>
    );
};

export default SubNavbar;
