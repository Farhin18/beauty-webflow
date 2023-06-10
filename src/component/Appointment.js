import React, { Component } from "react";

export default ({ imageNo }) => {
  return (
    <div
      style={{
        backgroundColor: "pink",
        width: 1920,
        height: 1769,
      }}
    >
      <img
        src={imageNo}
        alt="Photo"
        style={{
          width: 859,
          height: 1290,
        }}
      />
    </div>
  );
};
