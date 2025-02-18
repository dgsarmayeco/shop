import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

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
    }
];

const LatestNews: React.FC = () => {
    return (
        <Container tag="section">
            <div className="pt-14">
                <Title text="آخرین اخبار" icon="device-message" link={{ text: "مشاهده بیشتر", to: "/" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {cards.map((card, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">{card.title}</h3>
                            <p className="text-sm text-gray-600 mt-2">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default LatestNews;
