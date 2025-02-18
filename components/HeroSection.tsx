import cn from 'classnames';
import Image from 'next/image';

const categories = [
    { text: "هدیه" },
    { text: "دکوراسیون" },
    { text: "پوشاک" },
    { text: "جواهرات" },
    { text: "مبلمان" },
    { text: "فروش ویژه" }
];

const HeroSection = () => {
    return (
        <div className="w-full bg-footer-light h-[12.5rem] md:h-24 lg:h-[12.5rem]">
            <div className="grid grid-cols-3 grid-rows-2 justify-items-center items-center py-4 gap-2 md:grid-cols-6 md:grid-rows-1 md:pl-16 md:pr-16 md:pt-9 lg:pt-14 xl:pl-40 xl:pr-40">
                {categories.map((category, index) => (
                    <div className="flex flex-col justify-center items-center px-4 " key={index}>
                        {/* Image size for small screens */}
                        <Image
                            src="/images/hero-section/picture-placeholder.svg"
                            width={60}
                            height={60}
                            alt={`category-image-${category.text}`}
                            className="rounded-full shadow-md transition-transform duration-200 hover:scale-105 lg:w-28 lg:h-28 xl:w-40 xl:h-40"
                        />
                        <span className="text-xs font-thin mt-2 text-center">{category.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
