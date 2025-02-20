import cn from 'classnames';
import Image from 'next/image';
import Container from "@/components/Container";

const categories = [
    {text: "مبلمان", image: "images/hero-section/furniture.svg"},
    {text: "هدیه", image: "images/hero-section/gift.svg"},
    {text: "دکوراسیون", image: "images/hero-section/home-decor.svg"},
    {text: "جواهرات", image: "images/hero-section/jewelry.svg"},
    {text: "پوشاک", image: "images/hero-section/clothe.svg"},
    {text: "فروش ویژه", image: "images/hero-section/special-offer.svg"},
    {text: "فروش ویژه", image: "images/hero-section/special-offer.svg"}
];

const HeroSection = () => {
    return (

        <div className="w-full bg-footer-light h-[12.5rem] md:h-24 lg:h-[12.5rem]">
            <Container tag="section">
                <div className={cn("grid grid-cols-3 grid-rows-2 justify-items-center items-center py-4 gap-2",
                    " md:grid-cols-7 md:grid-rows-1 md:pl-16 md:pr-16 md:pt-9 lg:pt-14 xl: ")}>
                    {categories.map((category, index) => (
                        <div className="flex flex-col justify-center items-center px-4 " key={index}>
                            {/* Image size for small screens */}
                            <Image
                                src={category.image}
                                width={60}
                                height={60}
                                alt={`category-image-${category.text}`}
                                className={cn("rounded-full bg-white shadow-md cursor-pointer transition-transform duration-200 hover:scale-105 ",
                                    "lg:w-28 lg:h-28 xl:w-40 xl:h-40")}
                            />
                            <span className="text-xs font-thin mt-2 text-center">{category.text}</span>
                        </div>
                    ))}
                </div>
            </Container>

        </div>

    );
};

export default HeroSection;
