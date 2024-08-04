const validateForm = ({ date, selectedOption, content }) => {
  let missingFields = [];
  if (date === null) missingFields.push("Date");
  if (selectedOption === "") missingFields.push("Title");
  if (content === "") missingFields.push("Your Content");

  return missingFields;
};

export default validateForm;

export const processFormData = ({ date, selectedOption, content, image }) => {
  try {
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];

    const isDuplicate = storedEntries.some((entry) => entry.date === date);

    if (isDuplicate) {
      alert("Please come back again the next day.");
    } else {
      // Save new data
      const newEntry = {
        date,
        selectedOption,
        content,
        image,
      };

      storedEntries.push(newEntry);

      localStorage.setItem("diaryEntries", JSON.stringify(storedEntries));

      alert("Form saved successfully.");
    }
  } catch (error) {
    console.error("Error processing form data:", error);
    alert("An error occurred while saving the form. Please try again.");
  }
};
