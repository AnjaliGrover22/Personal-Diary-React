export const getDiaryEntries = () => {
  try {
    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries"));
    //"!storedEntries" checks if storedEntries is null, undefined, or falsy (an empty string, 0, false, or NaN). If storedEntries is any of these, the condition will be true.
    //Or if storedEntries is not an array.
    if (!storedEntries || !Array.isArray(storedEntries)) {
      return [];
    }
    return storedEntries;
  } catch (error) {
    console.error("Failed to parse diary entries from localStorage:", error);
    return [];
  }
};

export const saveDiaryEntries = (entries) => {
  localStorage.setItem("diaryEntries", JSON.stringify(entries));
};
