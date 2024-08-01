import "../App.css";
import { useState } from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { format } from "date-fns";

const AddEntry = () => {
  const [dateTime, setDateTime] = useState(null);

  const handleDateTimeChange = (date) => {
    setDateTime(date);
  };

  const formatDateTime = (date) => {
    if (!date) return "";
    const formatted = format(new Date(date), "d MMMM, yyyy h:mm a");
    return formatted;
  };
  return (
    <>
      <div className=" flex items-center justify-center custom-header-bg-color text-white p-4">
        <h1>Add New Entry</h1>
      </div>
      <div>
        <form className="w-full max-w-md">
          <div className="mb-4 mt-10 ml-10">
            <label
              htmlFor="date"
              className="mb-2 text-gray-700 font-semibold text-lg "
            >
              Date & Time
            </label>
            <DateTime
              id="datetime"
              name="datetime"
              value={dateTime}
              onChange={handleDateTimeChange}
              dateFormat="D MMMM,YYYY"
              timeFormat="h:mm A"
              className="w-full border border-gray-700 rounded-lg p-3  text-gray-800"
            />
            {dateTime && (
              <div className="text-center">
                <p className="mt-5 text-white custom-header-bg-color text-center ">
                  Selected Date and Time: {formatDateTime(dateTime)}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEntry;
