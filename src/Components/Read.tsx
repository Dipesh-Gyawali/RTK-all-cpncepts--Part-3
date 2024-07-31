import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Read = () => {
  return (
    <div>
      <h2>All data</h2>
      <div>
        <div className="card w-50 mx-auto my-2">
          <div className="card-body">
            <h5 className="card-title">Name: </h5>
            <h6 className="card-subtitle mb-2 text-muted">Email: </h6>
            <p className="card-text">Gender: </p>
            <button className="card-link">View</button>
            {/* <Link className="card-link">Edit</Link> */}
            <button className="card-link">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
