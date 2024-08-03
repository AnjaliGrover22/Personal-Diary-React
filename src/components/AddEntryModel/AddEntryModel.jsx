import Modal from "react-modal";
import "./AddEntryModal.css"; // Ensure this file exists and is correctly referenced

const AddEntryModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="add-entry-modal"
      overlayClassName="add-entry-modal-overlay"
    >
      <div>
        {children} {/* Render any content passed as children */}
        <button className="close-button" onClick={onRequestClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default AddEntryModal;
