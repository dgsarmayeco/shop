import React from "react";
import Image from "next/image";
import Container from "@/components/Container";

const FooterStyle: React.FC = () => {
    return (
        <div className="w-full">
            {/* Top Wave Image */}
            <Image
                src="/images/dark-blue-waves.svg"
                alt="wave"
                height={100}
                width={3000}
            />
            <div className="w-full bg-[#2F466C] h-full">

                {/* Main Footer Content */}
                <Container tag="section">
                    <div className="flex justify-center items-center mb-4">
                        <Image
                            src="/images/logo/logo.svg"
                            alt="logo"
                            height={100}
                            width={200}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Logo Section - Positioned at top for md size */}


                        {/* Contact Information */}
                        <div className="text-white">
                            <ul>
                                <li>آدرس: تهران، سهروردی، کوچه، پلاک 2</li>
                                <li>تلفن 1: 0214445566</li>
                                <li>تلفن 2: 4216669988</li>
                                <li>فکس: 02100669988</li>
                                <li>ایمیل: Contact@daastart.ir</li>
                            </ul>
                        </div>

                        {/* User Links */}
                        <div className="text-white flex justify-between">
                            <div>
                                <ul>
                                    <li>حساب من</li>
                                    <li>سبد خرید</li>
                                    <li>پرداخت</li>
                                    <li>تماس با ما</li>
                                    <li>لیست علاقه مندی ها</li>
                                </ul>
                            </div>

                            {/* Information Links */}
                            <div>
                                <ul>
                                    <li>اطلاعات ما</li>
                                    <li>قوانین</li>
                                    <li>سیاست حفظ حریم خصوصی</li>
                                    <li>شرایط و ضوابط</li>
                                    <li>نقشه سایت</li>
                                    <li>ساعت فروشگاه</li>
                                </ul>
                            </div>
                        </div>

                        {/* About Us Links */}
                        <div className="text-white">
                            <ul>
                                <li>درباره ما</li>
                                <li>مرکز پشتیبانی</li>
                                <li>پشتیبانی مشتری</li>
                                <li>کپی رایت</li>
                                <li>کمپین محبوب</li>
                            </ul>
                        </div>

                        {/* Download App Section - Adjusted for md */}
                        <div className="md:grid md:grid-cols-2 md:gap-4">
                            <div className="flex flex-col justify-center items-center md:flex-row">
                                <Image alt="bazar" src="/images/bazar.svg" height={150} width={150} />
                                <Image alt="google-play" src="/images/app-store.svg" height={150} width={150} />
                                <Image alt="app-store" src="/images/google-play.svg" height={150} width={150} />
                            </div>
                        </div>

                        {/* Trust Icons - Adjusted for md */}

                            <div className="flex justify-center items-center md:justify-end">
                                <Image alt="samaneh" src="/samaneh.png" className="bg-white m-1 rounded" width={50} height={50} />
                                <Image alt="namad" src="/namad.png" className="bg-white m-1 rounded" width={50} height={50} />
                            </div>

                    </div>

                </Container>
            </div>
                {/* Footer Bottom Section */}
                <div className="bg-footer-deepDark mb-14 lg:mb-0 h-16 flex items-center justify-center text-white">
                    <span>کپی رایت © تمامی حقوق برای فروشگاه دست آرت محفوظ می باشد.</span>
                </div>

        </div>
    );
};

export default FooterStyle;
