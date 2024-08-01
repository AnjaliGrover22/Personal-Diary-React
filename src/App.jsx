import "./App.css";
import DiaryList from "./components/DiaryList/DiaryList.jsx";
import "./components/DiaryList/DiaryList.css";
import { useState } from "react";
const App = () => {
  return (
    <div className="App">
      <DiaryList />
    </div>
  );
};

export default App;
