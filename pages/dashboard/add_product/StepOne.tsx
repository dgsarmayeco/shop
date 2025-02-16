import {
  Form,
  Input,
  Upload,
  Button,
  Radio,
  message,
  UploadProps,
  Select,
  Switch,
} from "antd";
import { IoImageOutline } from "react-icons/io5";
import TextArea from "antd/es/input/TextArea";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

import { useState } from "react";
import RichTextEditor from "@/components/QuillEditor";

function StepOne({ activeButton, setActiveButton, lastStep, nextStep }: any) {
  const { Dragger } = Upload;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Form
      layout="vertical"
      onFinish={(values) => {
        console.log("Form Values:", values);
        nextStep();
      }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 min-h-screen"
    >
      {/* Additional Forms & Radio Button */}
      <div className="bg-white p-6 shadow-md rounded-lg lg:col-span-1 col-span-3">
        <Form.Item
          label=":کد محصول"
          name="product_code"
          rules={[{ required: true, message: "کد محصول را وارد کنید" }]}
        >
          <Input
            placeholder="کد محصول را وارد کنید"
            size="large"
            dir="rtl"
            className="!text-sm"
          />
        </Form.Item>
        <Form.Item
          label=":کد انبار"
          name="warehouse_code"
          rules={[{ required: true, message: "کد انبار را وارد کنید" }]}
        >
          <Input
            placeholder="کد انبار را وارد کنید"
            size="large"
            dir="rtl"
            className="!text-sm"
          />
        </Form.Item>
        <Form.Item
          label=":طول (سانتی متر)"
          name="product_length"
          rules={[{ required: true, message: "طول محصول را وارد کنید" }]}
        >
          <Input
            placeholder="طول محصول را وارد کنید"
            size="large"
            dir="rtl"
            className="!text-sm"
          />
        </Form.Item>
        <Form.Item
          label=":عرض (سانتی متر)"
          name="produc_ width"
          rules={[{ required: true, message: "عرض محصول را وارد کنید" }]}
        >
          <Input
            placeholder="عرض محصول را وارد کنید"
            size="large"
            dir="rtl"
            className="!text-sm"
          />
        </Form.Item>
        <Form.Item
          label=":ارتفاع (سانتی متر)"
          name="product_height"
          rules={[{ required: true, message: "ارتفاع محصول را وارد کنید" }]}
        >
          <Input
            placeholder="ارتفاع محصول را وارد کنید"
            size="large"
            dir="rtl"
            className="!text-sm"
          />
        </Form.Item>
        <Form.Item
          label=":وزن (گرم)"
          name="product_weight"
          rules={[{ required: true, message: "وزن محصول را وارد کنید" }]}
        >
          <Input
            size="large"
            placeholder="وزن محصول را وارد کنید"
            dir="rtl"
            className="!text-sm !p-2"
          />
        </Form.Item>
        <Form.Item
          label=":متن اختصاصی محصول"
          name="about_product"
          rules={[{ required: true, message: "متن خود را وارد کنید" }]}
        >
          <TextArea
            rows={4}
            size="large"
            dir="rtl"
            placeholder="متن خود را وارد کنید"
            className="!text-sm !w-full"
          />
        </Form.Item>
      </div>

      {/* Form with Image Upload */}
      <div className="bg-white p-6 shadow-md rounded-lg col-span-3">
        <div className="flex flex-col gap-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            <Form.Item
              label=":عنوان انگلیسی"
              name="product_name_en"
              rules={[
                {
                  required: true,
                  message: "عنوان انگلیسی محصول را وارد کنید",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="عنوان انگلیسی محصول را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>

            <Form.Item
              label=":عنوان محصول"
              name="product_name"
              rules={[{ required: true, message: "عنوان محصول را وارد کنید" }]}
            >
              <Input
                size="large"
                placeholder="عنوان محصول را وارد کنید"
                dir="rtl"
                className="!text-sm"
              />
            </Form.Item>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            <Form.Item
              label=":برند"
              name="product_brand"
              rules={[{ required: true, message: "برند محصول را وارد کنید" }]}
            >
              <Select
                size="large"
                className="!text-sm"
                showSearch
                placeholder="برند محصول را انتخاب کنید"
                direction="rtl"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "Apple" },
                  { value: "2", label: "Gucci" },
                  { value: "3", label: "Dior" },
                ]}
              />
            </Form.Item>

            <Form.Item
              label=":گروه دسته بندی"
              name="product_category"
              rules={[
                { required: true, message: "گروه دسته بندی را وارد کنید" },
              ]}
            >
              <Select
                size="large"
                showSearch
                className="!text-sm"
                placeholder="دسته بندی محصول را انتخاب کنید"
                direction="rtl"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "کیف" },
                  { value: "2", label: "گوشی" },
                  { value: "3", label: "لباس" },
                ]}
              />
            </Form.Item>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            <Form.Item
              label=":فروشنده"
              name="product_seller"
              rules={[
                { required: true, message: "فروشنده محصول را وارد کنید" },
              ]}
            >
              <Select
                size="large"
                className="!text-sm"
                showSearch
                placeholder="فروشنده محصول را انتخاب کنید"
                direction="rtl"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "ف1" },
                  { value: "2", label: "ف2" },
                  { value: "3", label: "ف3" },
                ]}
              />
            </Form.Item>

            <Form.Item
              label=":گروه مشخصات"
              name="product_id_dec"
              rules={[{ required: true, message: "گروه مشخصات را وارد کنید" }]}
            >
              <Select
                size="large"
                className="!text-sm"
                showSearch
                placeholder="گروه مشخصات محصول را انتخاب کنید"
                direction="rtl"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "1", label: "ف1" },
                  { value: "2", label: "ف2" },
                  { value: "3", label: "ف3" },
                ]}
              />
            </Form.Item>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
            <Form.List name="product_group">
              {(fields, { add, remove }) => (
                <div className="w-full pt-3 bg-white rounded-lg lg:-mt-4">
                  <h3 className="text-right text-md mb-3 mr-2">
                    ویژگی های محصول
                  </h3>
                  {fields.map(({ key, name, ...restField }, index) => (
                    <div
                      key={key}
                      className="mb-4 p-4 border rounded-lg bg-gray-50 grid grid-cols-5 gap-4 items-center"
                    >
                      <Button
                        type="default"
                        danger
                        icon={<FiMinusCircle />}
                        onClick={() => remove(index)}
                        className="flex justify-center items-center lg:col-span-1 col-span-5 !w-full"
                      />
                      <Form.Item
                        {...restField}
                        name={[name, "explain"]}
                        rules={[
                          { required: true, message: "توضیحات را وارد کنید" },
                        ]}
                        className="lg:col-span-2 col-span-5 lg:mt-6 mb-0 lg:mb-5"
                      >
                        <Input placeholder="توضیحات" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, "title"]}
                        rules={[
                          { required: true, message: "اسم ویژگی را وارد کنید" },
                        ]}
                        className="lg:col-span-2 col-span-5 lg:mt-6 mb-0 lg:mb-5"
                      >
                        <Input placeholder="اسم ویژگی" />
                      </Form.Item>
                    </div>
                  ))}
                  <Button
                    type="primary"
                    onClick={() => add()}
                    className="w-full flex items-center justify-center"
                  >
                    اضافه کردن ویژگی
                    <FiPlus size={20} />
                  </Button>
                </div>
              )}
            </Form.List>

            <Form.Item
              label="تصویر محصول"
              valuePropName="fileList"
              rules={[{ required: true, message: "تصویر محصول را وارد کنید" }]}
            >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon flex justify-center">
                  <IoImageOutline size={32} />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </Form.Item>
          </div>

          <Form.Item
            label=":معرفی محصول"
            name="product_info"
            // Optional: Add validation rule if required
            rules={[{ required: true, message: "معرفی محصول را وارد کنید" }]}
          >
            <RichTextEditor />
          </Form.Item>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 justify-center items-center lg:mt-10 mt-20">
            <Form.Item></Form.Item>
            <Form.Item
              label=":وضعیت محصول"
              name="product_position"
              rules={[{ required: true, message: "وضعیت محصول را مشخص کنید" }]}
            >
              <div className="flex justify-end">
                <Radio.Group
                  value={activeButton}
                  onChange={(e) => setActiveButton(e.target.value)}
                  buttonStyle="solid"
                  defaultValue="3"
                >
                  <Radio.Button value="1">در انتظار تایید</Radio.Button>
                  <Radio.Button value="2">غیر فعال</Radio.Button>
                  <Radio.Button value="3">فعال</Radio.Button>
                </Radio.Group>
              </div>
            </Form.Item>
          </div>

          <Form.Item className="flex flex-col sm:flex-row gap-3 w-full sm:w-2/6 mx-auto mt-10">
            <Button
              htmlType="submit"
              type="primary"
              className="w-full flex items-center justify-center"
              size="large"
              // onClick={nextStep}
            >
              <MdOutlineArrowBackIosNew />
              تایید
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}

export default StepOne;
