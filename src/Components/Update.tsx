import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Update = () => {
  const formRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState({});
  const { users, loading, error } = useSelector((state) => state.app);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(formRef.current);

  //   for (let item of formData) {                     //to see formData items
  //     console.log(item, "item");
  //     console.log(item[0], item[1]);
  //   }

  //   const res = Object.fromEntries(formData); //object ma convert garyo
  //   console.log(res, "rrrrrr");

  //   const payload = JSON.stringify(res);  //JSON format ma lageko
  //   console.log(payload, "ppppppp");
  // };

  const handleChange = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const singleUser = users.find((item) => item.id === id);
    setUpdateData(singleUser);
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser(updateData));
    navigate("/read");
  };

  return (
    <div>
      <h2 className="my-2">Edit the data</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto my-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={updateData && updateData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={updateData && updateData.email}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            onChange={handleChange}
            value={updateData && updateData.age}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={handleChange}
            checked={updateData && updateData.gender === "Male"}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={handleChange}
            checked={updateData && updateData.gender === "Female"}
          />
          <label className="form-check-label">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
