import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItems = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // const [rating, setRating] = useState(7);
  // const [text, setText] = useState("This is an example of a feedback item");

  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  );
};

FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItems;
