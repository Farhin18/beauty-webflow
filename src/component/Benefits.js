import React, { Component } from "react";

export default ({ tick, title, subTitle }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: 330,
        height: 243,
      }}
    >
      <img
        src={tick}
        alt="Photo"
        style={{
          height: 90,
          width: 90,
          display: "flex",
          alignItems: "left",
        }}
      />

      <h1
        style={{
          textAlign: "left",
          backgroundColor: "white",
          fontSize: "26px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          textAlign: "left",
          backgroundColor: "white",
          fontSize: "18px",
        }}
      >
        {subTitle}
      </p>
    </div>
  );
};
