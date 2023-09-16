import { useEffect, useState } from "react";
import Friend from "./Friend";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [friendData, setFriedData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriedData(data));
  }, []);

  const handleClick = (friendId) => {
    navigate(`/about/${friendId}`);
  };

  return (
    <div>
      {friendData.map((singleData) => (
        <Friend
          key={singleData.id}
          handleClick={handleClick}
          singleData={singleData}
        />
      ))}
    </div>
  );
};

export default Home;
