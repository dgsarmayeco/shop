import { Button, Result } from "antd";
import Link from "next/link";
import React from "react";

function SuccessAlert() {
  return (
    <Result
      status="success"
      title="!عملیات با موفقیت انجام شد"
      subTitle="محصول شما ثبت شد"
      extra={[
        <Button key="console">ویرایش محصول</Button>,
        <Button type="primary" key="buy">
          مشاهده ی محصول
        </Button>,
      ]}
    />
  );
}

export default SuccessAlert;
