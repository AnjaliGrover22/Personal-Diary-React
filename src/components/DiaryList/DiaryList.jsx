import { useState, useEffect } from "react";
import "./DiaryList.css";
import { FaCog } from "react-icons/fa"; // Import the settings icon
import { getDiaryEntries, saveDiaryEntries } from "../../utils/entryCardUtils";
import AddEntryBottun from "../AddEntryBottun/AddEntryBottun.jsx";
import logoImage from "../../assets/photo_2024-08-01_14-40-31.jpg";
import EntryModal from "../EntryModal/EntryModal.jsx";

// const entries = [
//   {
//     id: 1,
//     date: "2024-07-31",
//     title: "Read a fascinating book in the afternoon",
//     image: "./src/assets/book.jpeg",
//   },
//   {
//     id: 2,
//     date: "2024-07-30",
//     title: "Went jogging in the park today",
//     image: "./src/assets/jogging.jpg",
//   },
//   {
//     id: 3,
//     date: "2024-07-29",
//     title: "Went for shopping",
//     image: "./src/assets/shopping.jpeg",
//   },
//   {
//     id: 4,
//     date: "2024-07-28",
//     title: "Cooked a delicious homemade meal",
//     image: "./src/assets/cooking.jpeg",
//   },
//   {
//     id: 5,
//     date: "2024-07-27",
//     title: "Worked on a new hobby project",
//     image: "./src/assets/hobby.jpeg",
//   },
//   {
//     id: 6,
//     date: "2024-07-26",
//     title: "Had a relaxing yoga session",
//     image: "./src/assets/yoga.jpeg",
//   },
//   {
//     id: 7,
//     date: "2024-07-25",
//     title: "Caught up with an old friend over coffee",
//     image: "./src/assets/coffee.jpeg",
//   },
//   {
//     id: 8,
//     date: "2024-07-24",
//     title: "Went to work",
//     image: "./src/assets/work.jpeg",
//   },
//   {
//     id: 9,
//     date: "2024-07-23",
//     title: "Answer Emails",
//     image: "./src/assets/email.png",
//   },
//   {
//     id: 10,
//     date: "2024-07-22",
//     title: "Went for a bike ride around the neighborhood",
//     image: "./src/assets/bike.jpeg",
//   },
// ];

const DiaryList = () => {
  //If you uncomment the initial entries then you have commented line 74 and 87-95 out!
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
