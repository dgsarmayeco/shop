import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import Image from "next/image";
import signinIllu from "../../assets/images/auth/signin-image.svg";
import logo from "../../assets/images/logo-removebg.png";

const SignInPage: React.FC = () => {
  const [step, setStep] = useState(0);

  const nextStep = (values: { user_phone: string }) => {
    if (/^\d{11}$/.test(values.user_phone)) {
      setStep(1);
    } else {
      alert("شماره موبایل باید 11 رقم باشد");
    }
  };

  const prevStep = () => setStep(0);

  // Function to show success alert with custom style
  const handleConfirm = () => {
    message.success({
      content: "کد تایید با موفقیت ارسال شد",
      style: {
        fontSize: "18px",
        padding: "15px",
      },
    });
  };

  const handleError = () => {
    message.error({
      content: "کاربر در سیستم وجود ندارد",
      style: {
        fontSize: "18px",
        padding: "15px",
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <main className="w-4/5 lg:p-5">
        <div className="flex flex-wrap bg-white rounded-lg justify-between h-full shadow-lg overflow-hidden">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 bg-blue-100 flex flex-col items-center justify-center p-10">
            <div className="text-center flex flex-col justify-center items-center gap-2">
              <Image src={logo} alt="Logo" className="lg:w-56 w-32" />
              <p className="text-gray-700 mb-6">ورود به سامانه</p>
            </div>
            <div className="w-3/4">
              <Image src={signinIllu} alt="Sign In" className="w-full" />
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 p-10 h-full flex flex-col justify-between gap-10">
            <div className="flex flex-col mb-6">
              <h6 className="text-2xl font-medium mb-2 flex justify-center">
                فرم ورود به سامانه
              </h6>
              <p className="text-md text-gray-600 flex justify-center text-center mt-3 lg:mt-0">
                شروع به ایجاد بهترین تجربه کاربری ممکن برای شما کنید مشتریان
              </p>
            </div>

            {/* Sliding Form */}
            <div className="relative overflow-hidden h-auto">
              <div
                className={`flex transition-transform duration-500 ${
                  step === 1 ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                {/* Step 1 - Phone Input */}
                <div className="w-full flex-shrink-0 p-5">
                  <Form
                    name="signInForm"
                    onFinish={nextStep}
                    layout="vertical"
                    className="w-full"
                  >
                    <Form.Item
                      label="تلفن همراه"
                      name="user_phone"
                      rules={[
                        {
                          required: true,
                          message: "!لطفا تلفن خود را وارد کنید",
                        },
                        {
                          pattern: /^\d{11}$/,
                          message: "شماره موبایل باید 11 رقم باشد",
                        },
                      ]}
                    >
                      <Input
                        onKeyDown={(event) => {
                          if (
                            !/[0-9]/.test(event.key) &&
                            ![
                              "Backspace",
                              "Delete",
                              "ArrowLeft",
                              "ArrowRight",
                              "Enter",
                            ].includes(event.key)
                          ) {
                            event.preventDefault();
                          }
                        }}
                        placeholder="09XXXXXXXXX"
                        className="w-full px-4 py-3 text-md bg-gray-100 border rounded-md"
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        htmlType="submit"
                        className="w-full py-4 rounded-md bg-blue-500 text-white hover:bg-[#2d4fd4]"
                        size="large"
                        type="primary"
                        onClick={handleConfirm}
                      >
                        مرحله بعد
                      </Button>
                    </Form.Item>
                  </Form>
                </div>

                {/* Step 2 - OTP Input with Back Button */}
                <div className="w-full flex-shrink-0 text-center p-5">
                  <p className="text-lg font-medium mb-4 text-center">
                    لطفا کد ارسال شده را وارد کنید
                  </p>

                  <Input.OTP
                    size="large"
                    onKeyDown={(event) => {
                      if (
                        !/[0-9]/.test(event.key) &&
                        ![
                          "Backspace",
                          "Delete",
                          "ArrowLeft",
                          "ArrowRight",
                          "Enter",
                        ].includes(event.key)
                      ) {
                        event.preventDefault();
                      }
                    }}
                  />

                  <div className="flex gap-4 mt-6">
                    <Button
                      onClick={prevStep}
                      className="w-1/2 py-4 rounded-md"
                      size="large"
                    >
                      بازگشت
                    </Button>
                    <Button
                      className="w-1/2 py-4 rounded-md bg-blue-500 text-white hover:bg-[#2d4fd4]"
                      size="large"
                      type="primary"
                      onClick={handleError}
                    >
                      تایید
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
