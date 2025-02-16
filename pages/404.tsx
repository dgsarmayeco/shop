import { Button, Result } from "antd";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Result
        status="404"
        title="404"
        subTitle="!صفحه ی مورد نظر پیدا نشد"
        extra={
          <Link href="/dashboard">
            <Button type="primary">بازگشت به خانه</Button>
          </Link>
        }
      />
    </div>
  );
}
