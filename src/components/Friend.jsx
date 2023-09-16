import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Friend = ({ singleData, handleClick }) => {
  const { name, email, id } = singleData;
  return (
    <div className="border-2 p-10 m-5 space-y-1">
      <h1>Friend Name: {name}</h1>
      <p>Email: {email}</p>
      <Link className="bg-red-400 p-1" to={`/about/${id} `}>
        Show Details 1 way
      </Link>

      <div>
        <button onClick={() => handleClick(id)} className="bg-green-400">
          Show Details 2 way method
        </button>
      </div>
    </div>
  );
};

Friend.propTypes = {
  singleData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Friend;
