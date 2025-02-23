import React, { useState } from "react";
import { Carousel } from "antd";

import Image from "next/image";
import Container from "@/components/Container";
import Title from "@/components/Title";
import FavoriteIcon from "@/components/FavoriteIcon";

const cards = [
    {
        image: "/images/latest-product/1.webp",
        title: "Card 1",
        description: "This is the first card.",
        price: "100", // Added price
    },
    {
        image: "/images/latest-product/2.jpg",
        title: "Card 2",
        description: "This is the second card.",
        price: "150", // Added price
    },
    {
        image: "/images/latest-product/3.jpg",
        title: "Card 3",
        description: "This is the third card.",
        price: "120", // Added price
    },
    {
        image: "/images/latest-product/4.webp",
        title: "Card 4",
        description: "This is the fourth card.",
        price: "180", // Added price
    },
    {
        image: "/images/latest-product/5.jpeg",
        title: "Card 5",
        description: "This is the fifth card.",
        price: "200", // Added price
    },
    {
        image: "/images/latest-product/6.webp",
        title: "Card 6",
        description: "This is the sixth card.",
        price: "250", // Added price
    },
    {
        image: "/images/latest-product/7.jpg",
        title: "Card 7",
        description: "This is the seventh card.",
        price: "220", // Added price
    },
    {
        image: "/images/latest-product/8.webp",
        title: "Card 8",
        description: "This is the eighth card.",
        price: "170", // Added price
    },
    {
        image: "/images/latest-product/10.png",
        title: "Card 9",
        description: "This is the ninth card.",
        price: "130", // Added price
    },
    {
        image: "/images/latest-product/11.jpg",
        title: "Card 10",
        description: "This is the tenth card.",
        price: "تومان160", // Added price
    },
    {
        image: "/images/latest-product/12.jpg",
        title: "Card 11",
        description: "This is the eleventh card.",
        price: "$140", // Added price
    },
    {
        image: "/images/latest-product/13.webp",
        title: "Card 12",
        description: "This is the twelfth card.",
        price: "$210", // Added price
    },
    {
        image: "/images/latest-product/14.webp",
        title: "Card 13",
        description: "This is the thirteenth card.",
        price: "$190", // Added price
    },
    {
        image: "/images/latest-product/15.png",
        title: "Card 14",
        description: "This is the fourteenth card.",
        price: "$230", // Added price
    },
    {
        image: "/images/latest-product/16.jpg",
        title: "Card 15",
        description: "This is the fifteenth card.",
        price: "$250", // Added price
    },
    {
        image: "/images/latest-product/17.jpg",
        title: "Card 16",
        description: "This is the sixteenth card.",
        price: "$220", // Added price
    },
    {
        image: "/images/latest-product/17.jpg",
        title: "Card 17",
        description: "This is the seventeenth card.",
        price: "$200", // Added price
    },
    {
        image: "/images/latest-product/10.png",
        title: "Card 18",
        description: "This is the eighteenth card.",
        price: "$180", // Added price
    },
    {
        image: "/images/latest-product/5.jpeg",
        title: "Card 19",
        description: "This is the nineteenth card.",
        price: "$150", // Added price
    },
    {
        image: "/images/latest-product/21.jpeg",
        title: "Card 20",
        description: "This is the twentieth card.",
        price: "$170", // Added price
    },
];

const LatestProduct: React.FC = () => {

    const [favorites, setFavorites] = useState<boolean[]>(Array(cards.length).fill(false));

    const toggleFavorite = (index: number) => {
        const updatedFavorites = [...favorites];
        updatedFavorites[index] = !updatedFavorites[index];
        setFavorites(updatedFavorites);
    };
    return (
        <Container tag="section">
            <div className="pt-14 px-3">
                <Title text="جدیدترین ها" icon="crown" link={{ text: "مشاهده بیشتر", to: "/" }} />
            </div>
            <div className="w-full">
                <Carousel autoplay arrows={true} dots={false} infinite>
                    {cards.map((card, cardIndex) => (
                        <div key={cardIndex}>
                                <div className="relative text-center grid md:grid-cols-3 gap-4 px-4">
                                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                                        <div className="relative h-64 w-full">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 bg-black bg-opacity-50 p-4 text-white w-full">
                                            <h3 className="text-lg font-semibold">{card.title}</h3>
                                            <p className="text-sm">{card.description}</p>
                                            <p className="mt-2 text-xl font-bold">{card.price}</p> {/* Added price */}
                                            <FavoriteIcon
                                                isFavorited={favorites[cardIndex]}
                                                onClick={() => toggleFavorite(cardIndex)}
                                            />
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </Container>
    );
};

export default LatestProduct;