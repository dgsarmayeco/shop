import Container from "@/components/Container";
import React from "react";
import { Card } from "antd";

const Introduction: React.FC = () => {
    return (
        <Container tag="section" className="flex justify-center items-center min-h-screen text-center">
            <div className="flex justify-center items-center w-full">
                <Card className="w-full max-w-4xl shadow-lg rounded-2xl p-6 text-center">
                    <h2 className="text-xl font-bold mb-4">معرفی دست آرت</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                            <h2>اهداف کوتاه مدت و بلند مدت دست آرت</h2>
                            <p className="text-gray-700">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                            <h2>اهداف کوتاه مدت و بلند مدت دست آرت</h2>
                            <p className="text-gray-700">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex flex-col items-center">
                            <h2>اهداف کوتاه مدت و بلند مدت دست آرت</h2>
                            <p className="text-gray-700">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </Container>
    );
};

export default Introduction;