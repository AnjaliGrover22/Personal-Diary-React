import "./AddEntry.css";
import data from "../../data/data.json";
import { useState } from "react";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { format } from "date-fns";
import validateForm from "../../utils/validateForm";

const AddEntry = () => {
  const [dateTime, setDateTime] = useState(null);

  //Adding Date Events
  const handleDateTimeChange = (date) => {
    setDateTime(date);
  };

  const formatDateTime = (date) => {
    if (!date) return "";
    const formatted = format(new Date(date), "d MMMM, yyyy h:mm a");
    return formatted;
  };

  //Adding Dropdown Events
  const [selectedOption, setSelectedOption] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = [];
  let titleName;
  data.map((option) => {
    titleName = option.title;
    options.push(titleName);
  });

  console.log("check all titles", options);

  //Image Events

  const images = [];
  let currentimage;
  data.map((im) => {
    currentimage = im.image;
    images.push(currentimage);
  });

  console.log(images, "images");

  const [image, setImage] = useState(null);

  //Edit image

  const [editImage, setEditImage] = useState(false);

  //handling image function

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setEditImage(true);
    }
  };

  //handling message input

  const [content, setContent] = useState("");
  const [finish, setFinish] = useState(true);

  const handleMessageContent = (event) => {
    const message = event.target.value;
    setContent(message);
    setFinish(false);
    console.log("message", message);
  };

  //Form Submission

  const [formData, setFormData] = useState("");

  const handleSubmit = () => {
    console.log("I am in handle submit");
    const missingFields = validateForm({
      dateTime,
      selectedOption,
      content,
    });

    if (missingFields.length === 0) {
      setFormData("Form saved Successfully");
    } else {
      alert(
        `Please fill out the following fields: ${missingFields.join(", ")}`
      );
    }
  };

  return (
    <>
      {/* header part */}
      <div className="container mx-auto h-auto p-4  w-full max-w-3xl">
        <div className="flex items-center justify-between custom-header-bg-color text-white p-4 w-full max-w-4xl ">
          <div>
            {" "}
            <svg
              width="38"
              height="33"
              viewBox="0 0 38 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.25977 14.5029L6.94241 13.683L15.4121 3.50999L6.25977 14.5029ZM6.25977 14.5029H7.32667M6.25977 14.5029H7.32667M7.32667 14.5029H35C35.4862 14.5029 35.9525 14.6961 36.2964 15.0399C36.6402 15.3837 36.8333 15.85 36.8333 16.3363C36.8333 16.8225 36.6402 17.2888 36.2964 17.6326C35.9525 17.9764 35.4862 18.1696 35 18.1696H7.32667H6.25977L6.94241 18.9895L15.4124 29.1628L15.4125 29.163C15.5669 29.3483 15.6832 29.5621 15.7548 29.7924C15.8264 30.0227 15.8518 30.2648 15.8297 30.505C15.8076 30.7451 15.7383 30.9785 15.6258 31.1918C15.5133 31.405 15.3599 31.594 15.1743 31.7479C14.8445 32.0212 14.4293 32.1704 14.001 32.1696L13.9992 32.1696C13.7299 32.17 13.4637 32.1111 13.2197 31.997C12.9758 31.883 12.7599 31.7165 12.5875 31.5096L12.5874 31.5095L0.934356 17.5258C0.874421 17.4392 0.820558 17.3486 0.773161 17.2545L0.717649 17.1444L0.663334 17.1056V17.081L0.628319 16.9924C0.545688 16.7834 0.502202 16.561 0.500019 16.3363C0.501812 16.1517 0.531474 15.9686 0.58781 15.7933C0.656447 15.7272 0.719977 15.6464 0.764329 15.545C0.79832 15.4673 0.81396 15.3906 0.821078 15.328C0.85597 15.2658 0.893769 15.2053 0.934352 15.1467L12.5874 1.16301L12.5879 1.16252M7.32667 14.5029L12.5879 1.16252M12.5879 1.16252C12.8991 0.787998 13.3465 0.552473 13.8314 0.507762C14.3164 0.46305 14.7992 0.612815 15.1737 0.924108C15.5483 1.2354 15.7838 1.68272 15.8285 2.16767C15.8732 2.65248 15.7235 3.13519 15.4124 3.50967L12.5879 1.16252Z"
                fill="#F5F5F5"
                stroke="black"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold ">Add New Entry</h1>
          </div>
          <div>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.71202 25.8638L6.80627 23.958L14.4293 16.335L6.80627 8.71202L8.71202 6.80627L16.335 14.4293L23.958 6.80627L25.8638 8.71202L18.2408 16.335L25.8638 23.958L23.958 25.8638L16.335 18.2408L8.71202 25.8638Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </div>
        {/* Form Container */}
        <div className=" add-entry w-full max-w-3xl rounded-none flex-col justify-center items-center ">
          <form className="bg-white p-8 rounded-xl m-5 flex-col justify-center items-center">
            {/* Date Starts here */}
            <div className="m-4">
              <label
                htmlFor="date"
                className="block mb-2  font-semibold text-lg bg-custom-lighter-pink max-w-full text-custom-header-bg-color"
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
                className="w-64 border-b border-gray-300 focus:border-gray-700 rounded-none p-2 text-gray-800"
              />
              {dateTime && (
                <div className="text-center mt-1">
                  <p className="mt-2 text-white custom-header-bg-color text-center ">
                    Selected Date:-{formatDateTime(dateTime)}
                  </p>
                </div>
              )}
            </div>
            {/* Dropdown Starts here:- */}

            <div className="m-4">
              <label
                htmlFor="dropdown"
                className="block mb-2 text-gray-700 font-semibold text-lg bg-custom-lighter-pink max-w-full"
              >
                Title
              </label>
              <select
                id="dropdown"
                value={selectedOption}
                onChange={handleDropdownChange}
                className="w-64 border border-gray-300 rounded-lg p-2 text-gray-800"
              >
                <option value="" disabled>
                  Select an Option
                </option>
                {options.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              {selectedOption && (
                <div className="text-center mt-4">
                  <p className="mt-2 text-white custom-header-bg-color text-center ">
                    Selected Title: {selectedOption}
                  </p>
                </div>
              )}
            </div>
            {/* Image section */}
            <div>
              <div className="m-4">
                <label
                  htmlFor="imageUpload"
                  className="block mb-2 text-gray-700 font-semibold text-lg bg-custom-lighter-pink max-w-full"
                >
                  Update Image
                </label>
                <input
                  type="file"
                  id="imageUpload"
                  name="imageUpload"
                  accept="image/*"
                  onChange={handleImageChange}
                  placeholder="Update Image"
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
              {/* shows the updated image here */}
              <div className="flex justify-center items-center">
                {image && (
                  <div>
                    <img
                      src={image}
                      alt="Selected Preview"
                      className="w-80 h-60 border rounded-lg mt-4"
                    />
                    <p className="mt-5 text-white custom-header-bg-color text-center ">
                      Image Updated Successfully
                    </p>
                  </div>
                )}
              </div>{" "}
              {/* Shows only those images which matches to the title */}
              <div className="flex justify-center items-center">
                {!editImage &&
                  selectedOption &&
                  // Find the first item where title matches selectedOption
                  (() => {
                    const item = data.find((i) => i.title === selectedOption);
                    return item ? (
                      <div key={item.title}>
                        <img
                          src={item.image}
                          alt="Selected Preview"
                          className="w-80 h-60 border rounded-lg mt-4"
                        />
                      </div>
                    ) : null;
                  })()}
              </div>
            </div>
            {/* Text Area */}
            <div className="m-4">
              <label
                htmlFor="content"
                className="block mb-2 text-gray-700 bg-custom-lighter-pink font-semibold text-lg  max-w-full"
              >
                Your Content
              </label>
              <textarea
                name="content"
                id="content"
                value={content}
                onChange={handleMessageContent}
                placeholder="Today I went into the....."
                className="w-full mt-4  rounded-lg p-2 font-medium text-black custom-textarea border-slate-800  "
              ></textarea>

              {!finish && content && (
                <p className="mt-5 text-white custom-header-bg-color text-center ">
                  You can write upto 500 words
                </p>
              )}
            </div>
            <div className="flex  justify-between p-4 w-full max-w-4xl">
              <button className="button rounded-full text-white" type="button">
                Cancel
              </button>
              <button
                className="button rounded-full text-white"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div>
              {formData && (
                <div className="mt-4 justify-center">
                  <p className="mt-5 text-white custom-header-bg-color w-56 text-center ">
                    Your Diary is filled Successfully.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEntry;
