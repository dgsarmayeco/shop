import Title from "@/components/Title";
import Container from "@/components/Container";
import cn from "classnames";
import React, { useState } from "react";
import { Button, message, Carousel, theme } from "antd";
import Image from "next/image";

const steps = [
    {
        title: "مرحله اول",
        images: [
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
        ],
    },
    {
        title: "مرحله دوم",
        images: [
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
        ],
    },
    {
        title: "مرحله نهایی",
        images: [
            { src: "/images/hero-section/picture-placeholder.svg" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-2" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
            { src: "/images/hero-section/picture-placeholder.svg", cols: "col-span-1 row-span-1" },
        ],
    },
];

const BestProducts = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const handleCarouselChange = (index: number) => {
        setCurrent(index);
    };

    return (
        <Container tag="section">
            {/* Section Title */}
            <div className="pt-14">
                <Title
                    text="محصولات منتخب"
                    icon="medal-star"
                    link={{ text: "مشاهده بیشتر", to: "/" }}
                />
            </div>

            {/* Carousel Component */}
            <div className="mt-6" >
                {/* Product Images Grid inside Carousel */}
                <Carousel
                    current={current}
                    beforeChange={handleCarouselChange}
                    dots
                    arrows
                    autoplay
                >
                    {steps.map((step, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4 mt-6">
                                {step.images.map((image, idx) => (
                                    <div key={idx} className={`relative ${image.cols}`}>
                                        <Image
                                            src={image.src}
                                            width={150}
                                            height={150}
                                            objectFit="cover"
                                            alt={`Product ${idx + 1}`}
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>


            </div>
        </Container>
    );
};

export default BestProducts;
