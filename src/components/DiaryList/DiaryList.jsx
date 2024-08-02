import { useState, useEffect } from "react";
import "./DiaryList.css";
import { FaCog } from "react-icons/fa"; // Import the settings icon
import { getDiaryEntries, saveDiaryEntries } from "../../utils/entryCardUtils";
import AddEntryBottun from "../AddEntryBottun/AddEntryBottun.jsx";
import logoImage from "../../assets/photo_2024-08-01_14-40-31.jpg";
import EntryModal from "../EntryModal/EntryModal.jsx";

const DiaryList = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCardClick = (entry) => {
    setSelectedEntry(entry);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEntry(null);
  };

  useEffect(() => {
    const storedEntries = getDiaryEntries();
    if (storedEntries.length === 0) {
      saveDiaryEntries(entries);
      setEntries(entries);
    } else {
      setEntries(storedEntries);
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
          <div
            className="entry"
            key={index}
            onClick={() => handleCardClick(entry)}
          >
            <div className="date">{entry.date}</div>
            <div className="text">{entry.title}</div>
          </div>
        ))}
      </div>
      <AddEntryBottun />
      <EntryModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        entry={selectedEntry}
      />
    </div>
  );
};

export default DiaryList;
