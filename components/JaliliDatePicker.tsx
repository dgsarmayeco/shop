import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function JaliliDatePicker({ setValue }: any) {
  const [value, setLocalValue] = useState<any>(null);

  const handleChange = (newValue: any) => {
    setLocalValue(newValue);
    setValue(newValue ? newValue.format("YYYY/MM/DD HH:mm") : "");
  };

  return (
    <div className="flex flex-col justify-end space-y-4">
      <h3 className="flex justify-end">
        :زمان اتمام پیشنهاد ویژه را انتخاب کنید
      </h3>
      <DatePicker
        value={value}
        onChange={handleChange}
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD HH:mm"
        plugins={[<TimePicker position="bottom" key="time" />]}
        className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-md focus:outline-none"
      />
    </div>
  );
}
