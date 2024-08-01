import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showUser } from "../features/userDetailSlice";

export const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);
  if (loading) {
    return <h1>LOADING.......</h1>;
  }
  if (error === true) {
    return <h1>error error error.......</h1>;
  }

  return (
    <>
      <div>
        <h2>All data</h2>
        {users &&
          users.map((item) => {
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
                    <button className="card-link">Delete</button>
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
