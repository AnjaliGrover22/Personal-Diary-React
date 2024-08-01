import { useState, useEffect } from "react";
import "./DiaryList.css";
import { FaCog } from "react-icons/fa"; // Import the settings icon
import { getDiaryEntries } from "../../utils/entryCardUtils";
import AddEntryBottun from "../AddEntryBottun/AddEntryBottun.jsx";
import logoImage from "../../assets/photo_2024-08-01_14-40-31.jpg";

const entries = [
  {
    date: "2024-07-30",
    text: "Today I went into the market and bought some fresh vegetables.",
  },
  {
    date: "2024-07-31",
    text: "I went jogging in the park today.",
  },
  {
    date: "2024-08-01",
    text: "Read a fascinating book in the afternoon.",
  },
];

const DiaryList = () => {
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryEntries"));
    if (!storedEntries || storedEntries.length === 0) {
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
    }
  }, []);

  return (
    <div className="diary-list">
      <header>
        <img className="logo-image" src={logoImage}></img>
        <h1 className="title">My Personal Diary</h1>
        <button className="settings-btn">
          <FaCog className="settings-icon" />
        </button>
      </header>
      <div className="entries">
        {entries.map((entry, index) => (
          <div className="entry" key={index}>
            <div className="date">{entry.date}</div>
            <div className="text">{entry.text}</div>
          </div>
        ))}
      </div>
      <AddEntryBottun />
    </div>
  );
};

export default DiaryList;
