import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";

export const Create = () => {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, "userData");
    dispatch(createUser(userData));
  };

  return (
    <div>
      <h2>Enter the data</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          <label>Female</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
