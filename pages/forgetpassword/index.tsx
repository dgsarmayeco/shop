import React from "react";
import { Form, Input, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/logo-removebg.png";
import signinIllu from "../../assets/images/auth/signin-image.svg";

const ForgetPasswordPage: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Form Values: ", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <main className="w-4/5 lg:p-5">
        <div className="flex flex-wrap bg-white rounded-lg justify-between h-full shadow-lg overflow-hidden">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 bg-blue-100 flex flex-col items-center justify-center p-10">
            <div className="text-center flex flex-col justify-center items-center gap-2">
              <Image src={logo} alt="Logo" className="lg:w-56 w-32" />
              <p className="text-gray-700 mb-6">فراموشی رمز عبور</p>
            </div>
            <div className="w-3/4">
              <Image
                src={signinIllu}
                alt="Forgot Password"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 p-10 h-full flex flex-col justify-between gap-20">
            <div className="flex flex-col mb-6">
              <h6 className="text-2xl font-medium mb-2 flex justify-center">
                بازیابی رمز عبور
              </h6>
              <p className="text-md text-gray-600 flex justify-center">
                لطفاً ایمیل خود را وارد کنید تا دستورالعمل‌های بازیابی رمز عبور
                را دریافت کنید.
              </p>
            </div>

            {/* Ant Design Form */}
            <Form
              name="forgetPasswordForm"
              onFinish={onFinish}
              layout="vertical"
              className="space-y-4"
            >
              <Form.Item
                label="ایمیل"
                name="email"
                rules={[
                  { required: true, message: "!لطفا ایمیل خود را وارد کنید" },
                  { type: "email", message: "ایمیل وارد شده معتبر نیست" },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="w-full px-4 py-3 text-md bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  htmlType="submit"
                  className="w-full py-6 rounded-md bg-[#365CF5] text-white hover:bg-[#2d4fd4] focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  ارسال لینک بازیابی رمز عبور
                </Button>
              </Form.Item>
            </Form>

            <div className="flex justify-center">
              <Link
                href="/signin"
                className="text-md text-[#365CF5] hover:underline"
              >
                بازگشت به صفحه ورود
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgetPasswordPage;
