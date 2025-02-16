import { Steps, ConfigProvider } from "antd";
import React from "react";

function StepsComponent({ current }: { current: number }) {
  return (
    <ConfigProvider direction="rtl">
      {" "}
      {/* Apply RTL globally */}
      <div className="mt-5 p-4 rounded-lg col-span-1 lg:w-5/6 mx-auto">
        <Steps
          direction="horizontal"
          current={current}
          items={[
            {
              title: "اطلاعات اولیه",
            },
            {
              title: "تنوع و قیمت گذاری",
            },
            {
              title: "ارسال و پردازش",
            },
          ]}
        />
      </div>
    </ConfigProvider>
  );
}

export default StepsComponent;
