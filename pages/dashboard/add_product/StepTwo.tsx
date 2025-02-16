import { Button, Form, Input, Switch } from "antd";
import React, { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import JaliliDatePicker from "@/components/JaliliDatePicker";

function StepTwo({ lastStep, nextStep }: any) {
  const [isSpecialActive, setIsSpecialActive] = useState(false);
  const [specialDate, setSpecialDate] = useState<string | null>("");

  const handleSwitchChange = (checked: boolean) => {
    setIsSpecialActive(checked);
    if (!checked) {
      setSpecialDate(""); // Set empty string if switch is off
    }
  };

  return (
    <div className="w-11/12 mx-auto gap-6 p-6 min-h-screen">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log("Form Values:", { ...values, specialDate });
            nextStep();
          }}
          className="flex flex-col gap-5"
        >
          <div className="grid lg:grid-cols-2 gap-7">
            {/* Form fields for price and order */}
            <Form.Item
              rules={[
                { required: true, message: "قیمت قبل از تخفیف را وارد کنید" },
              ]}
              label=":قیمت قبل از تخفیف (تومان)"
              name="price_before_off"
            >
              <Input
                size="large"
                placeholder="قیمت قبل از تخفیف محصول را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>
            <Form.Item
              label=":قیمت (تومان)"
              name="product_price"
              rules={[{ required: true, message: "قیمت محصول را وارد کنید" }]}
            >
              <Input
                size="large"
                placeholder="قیمت محصول را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>
          </div>
          <div className="grid lg:grid-cols-2 gap-7">
            {/* Form fields for order min and max */}
            <Form.Item
              label=":حداقل سفارش"
              name="min_sell"
              rules={[{ required: true, message: "حداقل سفارش را وارد کنید" }]}
            >
              <Input
                size="large"
                placeholder="حداقل سفارش را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>
            <Form.Item
              label=":حداکثر سفارش"
              name="max_sell"
              rules={[{ required: true, message: "حداکثر سفارش را وارد کنید" }]}
            >
              <Input
                size="large"
                placeholder="حداکثر سفارش را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>
          </div>
          <div className="grid lg:grid-cols-2 gap-7">
            <Form.Item
              // name="special"
              label="پیشنهاد ویژه"
              valuePropName="checked"
            >
              <div className="flex flex-col items-end">
                <Switch
                  onChange={handleSwitchChange}
                  checked={isSpecialActive}
                  className="w-12 h-6 bg-gray-300"
                />
                {isSpecialActive && (
                  <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-50 text-right">
                    <JaliliDatePicker setValue={setSpecialDate} />
                  </div>
                )}
              </div>
            </Form.Item>
            <Form.Item
              label=":موجودی انبار"
              name="warehouse"
              rules={[{ required: true, message: "موجودی انبار را وارد کنید" }]}
            >
              <Input
                size="large"
                placeholder="موجودی انبار را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>
          </div>

          <Form.Item>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-1/2 mx-auto mt-10">
              <Button
                htmlType="submit"
                type="primary"
                className="w-full sm:w-1/2 flex items-center justify-center"
                size="large"
              >
                <MdOutlineArrowBackIosNew />
                تایید
              </Button>

              <Button
                className="w-full sm:w-1/2 flex items-center justify-center"
                size="large"
                onClick={lastStep}
              >
                قبل
                <MdOutlineArrowForwardIos />
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default StepTwo;
