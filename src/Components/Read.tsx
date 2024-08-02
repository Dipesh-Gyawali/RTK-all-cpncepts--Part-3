import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";

export const Read = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const dispatch = useDispatch();
  const { users, loading, error, searchData } = useSelector(
    (state) => state.app
  );

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h1>LOADING.......</h1>;
  }
  if (error === true) {
    return <h1>error error error.......</h1>;
  }

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const searchingUser = () => {
    const a = users.filter((item) => {
      if (searchData.length === 0) {
        return item;
      } else {
        return item.name.toLowerCase().includes(searchData.toLowerCase());
      }
    });
    return a;
  };
  let searchedItem = searchingUser();

  const handleGenderFilter = (gender) => {
    if (gender.toLowerCase() === "male") {
      setFilteredUsers(
        users.filter((item) => item.gender.toLowerCase() === "male")
      );
    } else if (gender.toLowerCase() === "female") {
      setFilteredUsers(
        users.filter((item) => item.gender.toLowerCase() === "female")
      );
    } else {
      setFilteredUsers(users);
    }
    setIsFiltered(true);
  };

  const usersToDisplay = isFiltered ? filteredUsers : searchingUser();

  return (
    <>
      <div>
        <h2>All data {users.length}</h2>
        <button
          onClick={() => handleGenderFilter("male")}
          style={{ background: "red" }}
        >
          Filter : Male
        </button>
        <button
          onClick={() => handleGenderFilter("female")}
          style={{ background: "red" }}
        >
          Filter : Female
        </button>
        <button
          onClick={() => handleGenderFilter("all")}
          style={{ background: "red" }}
        >
          Filter : Reset
        </button>

        {users &&
          usersToDisplay.map((item) => {
            return (
              <div key={item.id}>
                <div className="card w-50 mx-auto my-2">
                  <div className="card-body">
                    <h5 className="card-title">Name:{item.name} </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Email:{item.email}{" "}
                    </h6>
                    <p className="card-text">Gender:{item.gender} </p>
                    <button className="card-link">View</button>
                    {/* <Link className="card-link">Edit</Link> */}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="card-link"
                    >
                      Delete
                    </button>
                    <hr />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
