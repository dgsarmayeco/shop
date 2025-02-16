import {
  Button,
  Card,
  Col,
  Collapse,
  CollapseProps,
  Form,
  Input,
  Row,
  Switch,
} from "antd";
import { useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function StepThree({ lastStep, nextStep }: any) {
  const [showDeliveryRangeInputs, setShowDeliveryRangeInputs] = useState(false);
  const [shippingCostChecked, setShippingCostChecked] = useState(false);
  const [dailyCapacityChecked, setDailyCapacityChecked] = useState(false);
  const [cityOrderChecked, setCityOrderChecked] = useState(false);
  const [form] = Form.useForm();

  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      title: "نام",
      haveIcon: false,
      descriptions: [{ text: "فلان" }, { text: "توضیح اضافه" }],
    },
    {
      id: 2,
      title: "هزینه",
      haveIcon: false,
      descriptions: [{ text: "42,000 تومان" }, { text: "42,000 تومان" }],
    },
    {
      id: 3,
      title: "فعال/غیر فعال",
      haveIcon: true,
      descriptions: [{ text: "فعال" }, { text: "فعال" }],
    },
  ]);

  const handleAddCard = async () => {
    try {
      const values = await form.validateFields();

      const shippingCostValue = shippingCostChecked
        ? "رایگان"
        : values.shipping_cost || 0;
      const dailyCapacityValue = dailyCapacityChecked
        ? "نامحدود"
        : values.daily_capacity || 0;
      const deliveryRangeValue = showDeliveryRangeInputs
        ? values.delivery_range
        : false;

      setCardsData((prevCards) =>
        prevCards.map((card) => {
          if (card.id === 1) {
            return {
              ...card,
              descriptions: [...card.descriptions, { text: values.name }],
            };
          }
          if (card.id === 2) {
            return {
              ...card,
              descriptions: [
                ...card.descriptions,
                {
                  text:
                    shippingCostValue == "رایگان"
                      ? "رایگان"
                      : shippingCostValue + " تومان",
                },
              ],
            };
          }
          if (card.id === 3) {
            return {
              ...card,
              descriptions: [...card.descriptions, { text: "فعال" }],
            };
          }
          return card;
        })
      );

      console.log("Form Values:", {
        ...values,
        shipping_cost: shippingCostValue,
        daily_capacity: dailyCapacityValue,
        delivery_range: deliveryRangeValue,

        city_order_limit: cityOrderChecked,
      });

      form.resetFields();
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: <p className="text-right">روش ارسال پستی (محاسبه قیمت خودکار)</p>,
      children: (
        <Form layout="vertical" className="flex flex-col gap-5 mt-5">
          <Form.Item
            className="flex justify-end mb-7 gap-3 items-center"
            name="active_auto"
          >
            <h1 className="text-lg font-semibold text-end flex gap-3 items-center justify-end">
              <Switch className="text-right" />
              روش ارسال پستی (محاسبه قیمت خودکار)
            </h1>
          </Form.Item>

          <div className="flex flex-col md:flex-row gap-7">
            <Form.Item
              name="free_shipping_min_price"
              label="حداقل قیمت ارسال رایگان پستی (تومان)"
              className="w-full md:w-1/2 text-end"
            >
              <Input
                size="large"
                dir="rtl"
                placeholder="مثال: 50,000 تومان"
                className="!text-sm"
              />
            </Form.Item>

            <Form.Item
              name="service_rate"
              label="نرخ خدمات (تومان)"
              className="w-full md:w-1/2"
            >
              <Input
                size="large"
                dir="rtl"
                placeholder="مثال: 10,000 تومان"
                className="!text-sm"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="tapi_api_enabled"
            label=" تاپین api فعال سازی"
            valuePropName="checked"
          >
            <Switch className="float-end" />
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "2",
      label: <p className="float-right">روش های دیگر ارسال</p>,
      children: (
        <Form
          layout="vertical"
          className="flex flex-col gap-5 mt-5"
          form={form}
        >
          <Form.Item
            className="flex justify-end mb-7 gap-3 items-center"
            // name="active_custome"
          >
            <div>
              <h1 className="text-lg font-semibold text-end flex gap-3 items-center justify-end">
                <Switch className="float-end" />
                روش دلخواه ارسال محصول
              </h1>
            </div>
          </Form.Item>
          <div className="grid lg:grid-cols-2 gap-7">
            <Form.Item
              name="post_description"
              label="توضیحات"
              rules={[{ required: true, message: "توضیحات را وارد کنید" }]}
            >
              <Input
                size="large"
                dir="rtl"
                placeholder="توضیحات خود را وارد کنید..."
                className="!text-sm"
              />
            </Form.Item>

            <Form.Item
              name="name"
              label="نام"
              rules={[{ required: true, message: "نام را وارد کنید" }]}
            >
              <Input
                size="large"
                dir="rtl"
                placeholder="نام روش ارسال را وارد کنید..."
                className="!text-sm"
              />
            </Form.Item>
          </div>

          <div className="grid lg:grid-cols-2 gap-7">
            <Form.Item
              name="shipping_cost"
              label="هزینه ارسال"
              initialValue={0}
            >
              <div>
                <div className="flex justify-end gap-2">
                  <h3>رایگان</h3>
                  <Switch
                    checked={shippingCostChecked}
                    onChange={(checked) => setShippingCostChecked(checked)}
                  />
                </div>
                {!shippingCostChecked && (
                  <Input
                    size="large"
                    dir="rtl"
                    className="mt-3 !text-sm"
                    placeholder="هزینه ارسال را وارد کنید"
                  />
                )}
              </div>
            </Form.Item>
            <Form.Item
              name="daily_capacity"
              label="ظرفیت روزانه"
              initialValue={0}
            >
              <div>
                <div className="flex justify-end gap-2">
                  <h3>نامحدود</h3>
                  <Switch
                    checked={dailyCapacityChecked}
                    onChange={(checked) => setDailyCapacityChecked(checked)}
                  />
                </div>
                {!dailyCapacityChecked && (
                  <Input
                    size="large"
                    dir="rtl"
                    className="mt-3 !text-sm"
                    placeholder="ظرفیت روزانه را وارد کنید"
                  />
                )}
              </div>
            </Form.Item>
          </div>
          <div className="grid lg:grid-cols-2 gap-7">
            <Form.Item
              name="min_order_price"
              label="حداقل مبلغ سفارش (تومان)"
              rules={[{ required: true, message: "حداقل مبلغ را وارد کنید" }]}
            >
              <Input
                size="large"
                dir="rtl"
                placeholder="مقدار حداقل سفارش را وارد کنید..."
                className="!text-sm"
              />
            </Form.Item>
            <Form.Item
              name="max_order_price"
              label="حداکثر مبلغ سفارش (تومان)"
              rules={[{ required: true, message: "حداکثر مبلغ را وارد کنید" }]}
            >
              <Input
                size="large"
                dir="rtl"
                placeholder="مقدار حداکثر سفارش را وارد کنید..."
                className="!text-sm"
              />
            </Form.Item>
          </div>

          <Form.Item name="delivery_range" label="بازه ارسال">
            <Switch
              className="float-end"
              onChange={(checked) => setShowDeliveryRangeInputs(checked)}
              checked={showDeliveryRangeInputs}
            />
          </Form.Item>

          {showDeliveryRangeInputs && (
            <div className="grid lg:grid-cols-2 gap-7">
              <Form.Item name="days" label="روز ها">
                <Input
                  size="large"
                  dir="rtl"
                  placeholder="روزهای قابل ارسال را وارد کنید..."
                  className="!text-sm"
                />
              </Form.Item>
              <Form.Item name="start_hour" label="ساعت ابتدا">
                <Input
                  size="large"
                  dir="rtl"
                  placeholder="ساعت شروع ارسال را وارد کنید..."
                  className="!text-sm"
                />
              </Form.Item>
              <Form.Item name="end_hour" label="ساعت انتها">
                <Input
                  size="large"
                  dir="rtl"
                  placeholder="ساعت پایان ارسال را وارد کنید..."
                  className="!text-sm"
                />
              </Form.Item>
              <Form.Item
                name="min_time_gap"
                label="حداقل فاصله زمانی برای انتخاب (ساعت)"
              >
                <Input
                  size="large"
                  dir="rtl"
                  placeholder="فاصله زمانی حداقل را وارد کنید..."
                  className="!text-sm"
                />
              </Form.Item>
            </div>
          )}
          <Form.Item
            name="city_order_limit"
            label="محدود برای سفارش های درون شهر فروشگاه"
            className="!text-sm float-right"
          >
            <Switch
              className="float-end"
              checked={cityOrderChecked}
              onChange={(checked) => setCityOrderChecked(checked)}
            />
          </Form.Item>

          <Form.Item className="float-right">
            <Button
              type="primary"
              size="large"
              className="w-1/4 flex mx-auto"
              onClick={handleAddCard}
            >
              <FaPlus />
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <div className="w-11/12 mx-auto gap-6 p-6 min-h-screen">
      <div className="bg-white lg:p-6 p-3 shadow-md rounded-lg">
        <Row gutter={16} className="w-full" dir="rtl">
          {cardsData.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8}>
              <Card
                title={item.title}
                bordered={false}
                className="flex flex-col justify-center items-center w-full"
              >
                {item.descriptions.map((desc, index) => (
                  <div key={index} className="w-full">
                    <div className="flex gap-2 justify-center items-center py-3 px-4">
                      <h2>{desc.text}</h2>
                      {item.haveIcon && (
                        <div className="flex gap-2">
                          <FaTrash
                            size={15}
                            className="text-red-600 cursor-pointer"
                          />
                          <FaPen
                            size={15}
                            className="text-green-700 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                    {index !== item.descriptions.length - 1 && (
                      <div className="w-full border-b border-gray-300" />
                    )}
                  </div>
                ))}
              </Card>
            </Col>
          ))}
        </Row>

        <Collapse
          items={items}
          className="mt-14"
          defaultActiveKey={["1"]}
          accordion
        />

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-1/2 mx-auto mt-10">
          <Button
            htmlType="submit"
            type="primary"
            className="w-full sm:w-1/2 flex items-center justify-center"
            size="large"
            onClick={nextStep}
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
      </div>
    </div>
  );
}

export default StepThree;
