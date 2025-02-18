import React from "react";
import { Carousel } from "antd";
import Image from "next/image";  // Import the Next.js Image component
import Container from "@/components/Container";  // Import the Container component
import Title from "@/components/Title";  // Import the Title component

const cards = [
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 1",
        description: "This is the first card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 2",
        description: "This is the second card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 3",
        description: "This is the third card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 4",
        description: "This is the fourth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 5",
        description: "This is the fifth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 6",
        description: "This is the sixth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 7",
        description: "This is the seventh card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 8",
        description: "This is the eighth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 9",
        description: "This is the ninth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 10",
        description: "This is the tenth card.",
    },
    // Next 10 cards
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 11",
        description: "This is the eleventh card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 12",
        description: "This is the twelfth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 13",
        description: "This is the thirteenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 14",
        description: "This is the fourteenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 15",
        description: "This is the fifteenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 16",
        description: "This is the sixteenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 17",
        description: "This is the seventeenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 18",
        description: "This is the eighteenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 19",
        description: "This is the nineteenth card.",
    },
    {
        image: "/images/hero-section/picture-placeholder.svg",
        title: "Card 20",
        description: "This is the twentieth card.",
    },
];

const LatestProduct: React.FC = () => {
    // Break the cards into chunks of 5 (for carousel)
    const chunkedCards = [];
    for (let i = 0; i < cards.length; i += 5) {
        chunkedCards.push(cards.slice(i, i + 5));
    }

    return (
        <Container tag="section">
            <div className="pt-14 px-3">
                <Title text="جدیدترین ها" icon="crown" link={{ text: "مشاهده بیشتر", to: "/" }} />
            </div>
            <div className="w-full">
                <Carousel autoplay arrows>
                    {chunkedCards.map((chunk, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-5 gap-4">
                                {chunk.map((card, cardIndex) => (
                                    <div key={cardIndex} className="relative text-center">
                                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                width={100}
                                                height={100}
                                                layout="responsive"
                                            />
                                            <div className="mt-4">
                                                <h3 className="text-lg font-semibold">{card.title}</h3>
                                                <p className="text-sm text-gray-600">{card.description}</p>
                                            </div>
                                        </div>
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

export default LatestProduct;
