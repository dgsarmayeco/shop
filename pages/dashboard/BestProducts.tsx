import Title from "@/components/Title";
import Container from "@/components/Container";
import React, { useState } from "react";
import { Tabs } from "antd";
import Image from "next/image";

const steps = [
    {
        title: "برند ایکیا",
        images: [
            { src: "/images/best-product/1.webp", name: "محصول 1", price: "100 تومان", size: "w-full h-32 md:h-40 lg:h-60 lg:w-80", cols: "col-span-1" },
            { src: "/images/best-product/2.webp", name: "محصول 2", price: "200 تومان", size: "w-full h-32 md:h-40 lg:h-[30rem] ", cols: "col-span-1 lg:row-span-2" },
            { src: "/images/best-product/3.webp", name: "محصول 3", price: "300 تومان", size: "w-full h-60 md:h-40 lg:h-60 lg:w-80", cols: "col-span-2 md:col-span-1" },
            { src: "/images/best-product/4.webp", name: "محصول 4", price: "400 تومان", size: "w-full h-32 md:h-40 lg:h-[30rem]", cols: "col-span-1 lg:row-span-2" },
            { src: "/images/best-product/5.webp", name: "محصول 5", price: "500 تومان", size: "w-full h-32 md:h-60 md:w-80 lg:h-60 lg:w-80", cols: "col-span-1 md:col-span-2 lg:col-span-1" },
            { src: "/images/best-product/6.webp", name: "محصول 6", price: "600 تومان", size: "w-full h-60 md:h-60 md:w-80 lg:h-60 lg:w-80", cols: "col-span-2 md:col-span-2 lg:col-span-1" },
        ],
    },
    {
        title: "برند هوم لند",
        images: [
            { src: "/images/best-product/6.webp", name: "محصول 7", price: "700 تومان", size: "w-full h-32 md:h-40 lg:h-60 lg:w-80", cols: "col-span-1" },
            { src: "/images/best-product/5.webp", name: "محصول 8", price: "800 تومان", size: "w-full h-32 md:h-40 lg:h-[30rem] ", cols: "col-span-1 lg:row-span-2" },
            { src: "/images/best-product/4.webp", name: "محصول 9", price: "900 تومان", size: "w-full h-60 md:h-40 lg:h-60 lg:w-80", cols: "col-span-2 md:col-span-1" },
            { src: "/images/best-product/3.webp", name: "محصول 10", price: "1,000 تومان", size: "w-full h-32 md:h-40 lg:h-[30rem]", cols: "col-span-1 lg:row-span-2" },
            { src: "/images/best-product/2.webp", name: "محصول 11", price: "1,100 تومان", size: "w-full h-32 md:h-60 md:w-80 lg:h-60 lg:w-80", cols: "col-span-1 md:col-span-2 lg:col-span-1" },
            { src: "/images/best-product/1.webp", name: "محصول 12", price: "1,200 تومان", size: "w-full h-60 md:h-60 md:w-80 lg:h-60 lg:w-80", cols: "col-span-2 md:col-span-2 lg:col-span-1" },
        ],
    },
    {
        title: "برند لوکس دکور",
        images: [
            { src: "/images/best-product/3.webp", name: "محصول 13", price: "1,300 تومان", size: "w-full h-32 md:h-40 lg:h-60 lg:w-80", cols: "col-span-1" },
            { src: "/images/best-product/1.webp", name: "محصول 14", price: "1,400 تومان", size: "w-full h-32 md:h-40 lg:h-[30rem] ", cols: "col-span-1 lg:row-span-2" },
            { src: "/images/best-product/5.webp", name: "محصول 15", price: "1,500 تومان", size: "w-full h-60 md:h-40 lg:h-60 lg:w-80", cols: "col-span-2 md:col-span-1" },
            { src: "/images/best-product/6.webp", name: "محصول 16", price: "1,600 تومان", size: "w-full h-32 md:h-40 lg:h-[30rem]", cols: "col-span-1 lg:row-span-2" },
            { src: "/images/best-product/4.webp", name: "محصول 17", price: "1,700 تومان", size: "w-full h-32 md:h-60 md:w-80 lg:h-60 lg:w-80", cols: "col-span-1 md:col-span-2 lg:col-span-1" },
            { src: "/images/best-product/2.webp", name: "محصول 18", price: "1,800 تومان", size: "w-full h-60 md:h-60 md:w-80 lg:h-60 lg:w-80", cols: "col-span-2 md:col-span-2 lg:col-span-1" },
        ],
    },
];

const BestProducts = () => {
    const [activeTab, setActiveTab] = useState("0");

    return (
        <Container tag="section">
            <div className="pt-14">
                <Title text="محصولات منتخب" icon="medal-star" link={{ text: "مشاهده بیشتر", to: "/" }} />
            </div>

            <div className="mt-6">
                <Tabs
                    activeKey={activeTab}
                    onChange={setActiveTab}
                    centered
                    size="large"
                    items={steps.map((step, index) => ({
                        key: index.toString(),
                        label: step.title,
                        children: (
                            <div className="flex justify-center">
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 mt-6">
                                    {step.images.map((image, idx) => (
                                        <div key={idx} className={`relative flex items-center justify-evenly ${image.cols} group`}>
                                            <Image
                                                src={image.src}
                                                width={150}
                                                height={150}
                                                alt={image.name}
                                                className={`rounded-lg shadow-md transition-transform duration-200 hover:scale-105 ${image.size}`}
                                            />
                                            {/* Price and Name Overlay */}
                                            <div className="absolute inset-16 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                                                <span className="text-white text-lg font-bold">{image.name}</span>
                                                <span className="text-white text-lg font-bold">{image.price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ),
                    }))}
                />
            </div>
        </Container>
    );
};

export default BestProducts;
