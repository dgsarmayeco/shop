import Title from "@/components/Title";
import Container from "@/components/Container";
import React, { useState } from "react";
import { Tabs } from "antd";
import Image from "next/image";

const steps = [
    {
        title: "تب اول",
        images: [
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" }, // Row 1, Col 1
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-40 md:h-52 lg:h-60", cols: "col-span-2 md:col-span-1 lg:col-span-2" }, // Row 2, Col 2
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" }, // Row 3, Col 3
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-40 md:h-52 lg:h-60", cols: "col-span-2 md:col-span-2 lg:col-span-2" }, // Row 4, Col 4
        ],
    },
    {
        title: "تب دوم",
        images: [
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-40 md:h-52 lg:h-60", cols: "col-span-2 md:col-span-1 lg:col-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-40 md:h-52 lg:h-60", cols: "col-span-2 md:col-span-2 lg:col-span-2" },
        ],
    },
    {
        title: "تب سوم",
        images: [
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-40 md:h-52 lg:h-60", cols: "col-span-2 md:col-span-1 lg:col-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-32 md:h-40 lg:h-52", cols: "col-span-1 md:col-span-1 lg:col-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", size: "w-full h-40 md:h-52 lg:h-60", cols: "col-span-2 md:col-span-2 lg:col-span-2" },
        ],
    },
];

const BestProducts = () => {
    const [activeTab, setActiveTab] = useState("0");

    return (
        <Container tag="section">
            {/* Section Title */}
            <div className="pt-14">
                <Title text="محصولات منتخب" icon="medal-star" link={{ text: "مشاهده بیشتر", to: "/" }} />
            </div>

            {/* Tabs Component */}
            <div className="mt-6">
                <Tabs
                    activeKey={activeTab}
                    onChange={setActiveTab}
                    centered
                    size="large"
                    tabBarGutter={50} // Space between tab texts
                    items={steps.map((step, index) => ({
                        key: index.toString(),
                        label: step.title,
                        children: (
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 mt-6">
                                {step.images.map((image, idx) => (
                                    <div key={idx} className={`relative flex justify-center ${image.cols}`}>
                                        <Image
                                            src={image.src}
                                            width={150}
                                            height={150}
                                            alt={`Product ${idx + 1}`}
                                            className={`rounded-lg shadow-md transition-transform duration-200 hover:scale-105 ${image.size}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        ),
                    }))}
                />
            </div>
        </Container>
    );
};

export default BestProducts;
