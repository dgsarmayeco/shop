import cn from 'classnames';
import Image from 'next/image';
import Container from "@/components/Container";
import { Carousel } from 'antd';

const categories = [
    { text: "مبلمان", image: "/images/hero-section/sofa.png" },
    { text: "هدیه", image: "/images/hero-section/gift.png" },
    { text: "دکوراسیون", image: "/images/hero-section/home-decor.png" },
    { text: "جواهرات", image: "/images/hero-section/jewelry.jpg" },
    { text: "پوشاک", image: "/images/hero-section/dress.png" },
    { text: "فروش ویژه", image: "/images/hero-section/offer.jpg" },
    { text: "فروش ویژه", image: "/images/hero-section/offer1.jpg" }
];

const HeroSection = () => {
    return (
        <div className="w-full bg-footer-light h-[12.5rem] md:h-24 lg:h-[10.39rem] xl:h-[12.5rem] " id="tahzib">

            <Container tag="section">
                {/* Carousel for Mobile and MD sizes */}
                <div className="pt-5 md:hidden">
                    <Carousel autoplay arrows={true} dots={false} infinite>
                        {categories.map((category, index) => (
                            <div key={index} className="flex justify-center items-center ">
                                <div className="flex flex-col justify-center items-center">
                                        <Image
                                            src={category.image}
                                            width={100}
                                            height={100}
                                            alt={`category-image-${category.text}`}
                                            className={cn(
                                                "rounded-full w-36 h-36 bg-white shadow-md cursor-pointer",
                                                "transition-transform duration-200 object-none hover:scale-105",
                                                "lg:w-28 lg:h-28 xl:w-40 xl:h-40"
                                            )}
                                        />

                                    <span className="text-xs font-thin mt-2 text-center">{category.text}</span>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Grid Layout for MD and Larger Screens */}
                <div className="hidden md:grid grid-cols-3 grid-rows-2 justify-items-center items-center py-4 gap-2 md:grid-cols-7 md:grid-rows-1  md:pt-9 ">
                    {categories.map((category, index) => (
                        <div className="flex flex-col justify-center items-center " key={index}>
                            <Image
                                src={category.image}
                                width={90}
                                height={90}
                                alt={`category-image-${category.text}`}
                                className={cn(
                                    "rounded-full bg-white shadow-md cursor-pointer",
                                    "transition-transform duration-200 object-none hover:scale-105",
                                    "w-20 h-20 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
                                )}
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
