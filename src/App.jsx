import "./App.css";
import AddEntry from "./components/AddNewEntries/AddEntry";
import DiaryList from "./components/DiaryList/DiaryList.jsx";
import "./components/DiaryList/DiaryList.css";
import { useState } from "react";
import AddEntryButton from "./components/AddEntryButton/AddEntryButton.jsx";
const App = () => {
  return (
    <div className="App">
      <DiaryList />
      <AddEntryButton />
    </div>
  );
};

export default App;
