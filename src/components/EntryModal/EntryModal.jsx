import React from "react";
import Modal from "react-modal";
import "./EntryModal.css";

const EntryModal = ({ isOpen, onRequestClose, entry }) => {
  if (!entry) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="entry-modal"
      overlayClassName="entry-modal-overlay"
    >
      <p className="date">
        <strong>Date:</strong> {entry.date}
      </p>
      <h2 className="title">{entry.title}</h2>
      {entry.imageUrl && (
        <img src={entry.imageUrl} alt={entry.title} className="entry-image" />
      )}
      <p className="content">{entry.text}</p>
      <button className="close-btn" onClick={onRequestClose}>
        Close
      </button>
    </Modal>
  );
};

export default EntryModal;
