import { useState, useEffect } from "react";
import "./DiaryList.css";
import { FaCog } from "react-icons/fa"; // Import the settings icon
import { getDiaryEntries } from "../../utils/entryCardUtils";
import AddEntryBottun from "../AddEntryBottun/AddEntryBottun.jsx";
import logoImage from "../../assets/photo_2024-08-01_14-40-31.jpg";
import JoggingImage from "../../assets/istockphoto-1142900322-1024x1024.jpg";
import ShoppingImage from "../../assets/images.jpeg";
import EntryModal from "../EntryModal/EntryModal.jsx";

// const entries = [
//   {
//     title: "Market Visit",
//     date: "2024-07-30",
//     text: "Today I went into the market and bought some fresh vegetables.",
//     imageUrl: ShoppingImage, // Market image
//   },
//   {
//     title: "Morning Jog",
//     date: "2024-07-31",
//     text: "I went jogging in the park today.",
//     imageUrl: JoggingImage, // Jogging image
//   },
//   {
//     title: "Book Reading",
//     date: "2024-08-01",
//     text: "Read a fascinating book in the afternoon.",
//     imageUrl: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d", // Book reading image
//   },
// ];

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

  // useEffect(() => {
  //   // const storedEntries = JSON.parse(localStorage.getItem("diaryEntries"));
  //   // if (!storedEntries || storedEntries.length === 0) {
  //   //   localStorage.setItem("diaryEntries", JSON.stringify(entries));
  //   // }
  //   getDiaryEntries();
  // }, []);

  useEffect(() => {
    const storedEntries = getDiaryEntries();
    setEntries(storedEntries);
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
            <div className="text">{entry.text}</div>
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
