import React, { Component } from "react";

export default ({ imageV, main, mainSub }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: " 590px",
        height: "124px",
        marginTop: 60,
        borderBottom: "1px solid #D3D3D3",
        display: "flex",
      }}
    >
      <img
        src={imageV}
        alt="Photo"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "#F2FCFF",
          border: "1px solid #1E2C30",
        }}
      />
      <div
        style={{
          marginLeft: "2rem",
          marginTop: "-1rem",
          width: " 458px",
          height: "124px",
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "flex-start",
        }}
      >
        <h1
          style={{
            width: " 157px",
            height: "26px",
            fontSize: "22px",
            fontWeight: 700,
            // marginTop: "1rem",
          }}
        >
          {main}
        </h1>
        <p
          style={{
            width: " 458px",
            height: "90px",
            fontSize: "18px",
            fontWeight: 400,
            marginTop: "0.5rem",
          }}
        >
          {mainSub}
        </p>
      </div>
    </div>
  );
};
