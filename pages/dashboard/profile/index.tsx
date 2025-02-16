import React from "react";
import { Card, Avatar, Form, Input, Button } from "antd";
import { FaRegUser } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import Spinner from "@/components/Spinner";

const AdminProfile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <Spinner />
      {/* Profile Avatar, Name, and Role */}
      <div className="flex w-full text-center p-6 shadow-md justify-end items-center gap-4 bg-white rounded-lg">
        <div className="text-left">
          <h2 className="text-2xl font-semibold">پارسا فراهانی</h2>
          <p className="text-gray-600 float-right mt-2">ادمین</p>
        </div>
        <Avatar size={90} icon={<FaRegUser />} />
      </div>

      {/* Personal Information */}
      <Card className="w-full mt-6 p-6 shadow-md">
        <div className="flex justify-between mb-5">
          <Button
            type="primary"
            icon={<FiEdit3 />}
            dir="rtl"
            className="!text-sm !font-normal"
          >
            ویرایش
          </Button>
          <h3 className="text-xl font-semibold mb-4">اطلاعات کاربر</h3>
        </div>
        <Form layout="vertical">
          <div className="grid grid-cols-2 gap-3">
            <Form.Item label="نام خانوادگی">
              <Input
                placeholder="فراهانی"
                size="large"
                disabled
                dir="rtl"
                className="!text-sm !font-normal"
              />
            </Form.Item>
            <Form.Item label="نام">
              <Input
                placeholder="پارسا"
                size="large"
                disabled
                dir="rtl"
                className="!text-sm !font-normal"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Form.Item label="تلفن همراه">
              <Input
                placeholder="091080802"
                size="large"
                disabled
                dir="rtl"
                className="!text-sm !font-normal"
              />
            </Form.Item>

            <Form.Item label="ایمیل">
              <Input
                placeholder="parsaforwork84@gmail.com"
                type="email"
                size="large"
                disabled
                dir="rtl"
                className="!text-sm !font-normal"
              />
            </Form.Item>
          </div>

          <Form.Item label="تاریخ تولد">
            <Input type="date" size="large" disabled dir="rtl" />
          </Form.Item>
        </Form>
      </Card>

      {/* Address Information */}
      <Card className="w-full mt-6 p-6 shadow-md">
        <h3 className="text-xl font-semibold flex justify-end mb-7">
          آدرس کاربر
        </h3>
        <Form layout="vertical" className="grid grid-cols-3 gap-3">
          <Form.Item label="شهر">
            <Input
              placeholder="تهران"
              disabled
              dir="rtl"
              size="large"
              className="!text-sm !font-normal"
            />
          </Form.Item>
          <Form.Item label="کشور">
            <Input
              placeholder="ایران"
              disabled
              dir="rtl"
              size="large"
              className="!text-sm !font-normal"
            />
          </Form.Item>
          <Form.Item label="ID">
            <Input
              placeholder="fc223"
              disabled
              dir="rtl"
              size="large"
              className="!text-sm !font-normal"
            />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AdminProfile;
