import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
export default ({}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h
        style={{
          color: "red",
          fontSize: "700%",
        }}
      >
        my about page
      </h>

      <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
        Go Back Home
      </p>
    </div>
  );
};
