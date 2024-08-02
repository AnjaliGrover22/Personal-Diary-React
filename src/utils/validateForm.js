const validateForm = ({ dateTime, selectedOption, content }) => {
  let missingFields = [];
  if (dateTime === null) missingFields.push("Date & Time");
  if (selectedOption === "") missingFields.push("Title");
  if (content === "") missingFields.push("Your Content");

  return missingFields;
};

export default validateForm;
