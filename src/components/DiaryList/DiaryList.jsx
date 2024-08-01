import { useState, useEffect } from "react";
import "./DiaryList.css";
import { FaCog } from "react-icons/fa"; // Import the settings icon
import { getDiaryEntries } from "../../utils/entryCardUtils";
import AddEntryBottun from "../AddEntryBottun/AddEntryBottun.jsx";

const DiaryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const storedEntries = getDiaryEntries();
    setEntries(storedEntries);
  }, []);

  return (
    <div className="diary-list">
      <header>
        <h1>My Diary</h1>
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
