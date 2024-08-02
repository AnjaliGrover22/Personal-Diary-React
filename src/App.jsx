import "./App.css";
import AddEntry from "./components/AddNewEntries/AddEntry";
import DiaryList from "./components/DiaryList/DiaryList.jsx";
import "./components/DiaryList/DiaryList.css";
import { useState } from "react";
const App = () => {
  return (
    <div className="App">
      <DiaryList />
      {/* <AddEntry /> */}
    </div>
  );
};

export default App;
