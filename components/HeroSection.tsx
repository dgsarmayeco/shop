import cn from 'classnames';
import Image from 'next/image';
import Title from './Title';

const categories = [
    {text: "هدیه"},
    {text: "دکوراسیون"},
    {text: "پوشاک"},
    {text: "جواهرات"},
    {text: "مبلمان"},
    {text: "فروش ویژه"}
];

const HeroSection = () => {
    return (
        <div className="w-full bg-footer-light h-[12.5rem]">

            <div className="flex justify-center items-center gap-10 pt-9">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={cn(
                            "w-48 h-48 bg-white rounded-full shadow-lg transition-transform",
                            "duration-200 hover:scale-105 flex flex-col justify-end items-center pb-2"
                        )}>
                        <Image
                            src="/images/hero-section/picture-placeholder.svg"
                            width={120}
                            alt="category-image"
                            height={120}
                            className="rounded-full"
                        />
                        <span className="text-sm text-footer-deepDark mt-2">{category.text}</span>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default HeroSection;