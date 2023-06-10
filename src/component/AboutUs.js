import React, { Component } from "react";

export default ({ imagePath, heading }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: " 165px",
        height: "180px",
        marginTop: 60,
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={imagePath}
        alt="Photo"
        style={{
          width: "48px",
          height: "72px",
          padding: "21px 11px",
          backgroundColor: "white",
        }}
      />

      <h1
        style={{
          backgroundColor: "white",
          fontSize: "22px",
          width: "40%",

          margin: 0,
        }}
      >
        {heading}
      </h1>
    </div>
  );
};
