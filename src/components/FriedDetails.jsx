import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriedDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);

  const { name, email, phone } = friend;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1>Friend Details</h1>
        <h2 className="card-title">{name}</h2>
        <p>Email: {email}</p>
        <p>phone: {phone}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default FriedDetails;
