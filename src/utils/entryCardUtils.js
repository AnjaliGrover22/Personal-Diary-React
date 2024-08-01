export const getDiaryEntries = () => {
  const storedEntries = JSON.parse(localStorage.getItem("diaryEntries"));
  //Handle invalid or empty localStorage data..
  if (!storedEntries) {
    return [];
  }
  try {
    return storedEntries;
  } catch (error) {
    console.error("Failed to parse diary entries from localStorage:", error);
    // return [];
  }
  return storedEntries;
};
