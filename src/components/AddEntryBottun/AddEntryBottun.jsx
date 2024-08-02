import { FaPlus } from "react-icons/fa"; //Import the plus icon
import "./AddEntryButton.css";
const AddEntryBottun = () => {
  return (
    <button className="add-entry-button" onClick={onclick}>
      <FaPlus className="add-entry-icon" />
    </button>
  );
};
export default AddEntryBottun;
