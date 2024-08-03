import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddEntry from "../AddNewEntries/AddEntry";
import AddEntryModal from "../AddEntryModel/AddEntryModel"; // Fixed import path
import "./AddEntryButton.css";

const AddEntryButton = () => {
  const [isAddEntryModalOpen, setIsAddEntryModalOpen] = useState(false);

  const handlePlusButtonClick = () => {
    setIsAddEntryModalOpen(true); // Open the AddEntry modal
  };

  const handleCloseAddEntryModal = () => {
    setIsAddEntryModalOpen(false); // Close the AddEntry modal
  };

  return (
    <div>
      <button className="add-entry-button" onClick={handlePlusButtonClick}>
        <FaPlus className="add-entry-icon" />
      </button>

      <AddEntryModal
        isOpen={isAddEntryModalOpen}
        onRequestClose={handleCloseAddEntryModal}
      >
        <AddEntry />
      </AddEntryModal>
    </div>
  );
};

export default AddEntryButton;
