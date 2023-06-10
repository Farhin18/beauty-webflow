import React from "react";
import { Button } from "react-bootstrap";

export default ({ title, subTitle, imageUrl }) => {
  return (
    <div
      style={{
        width: "440px",
        height: "500px",
        marginTop: "4rem",
      }}
    >
      <img
        src={imageUrl}
        alt="Photo"
        style={{
          height: 350,
          width: "440px",
        }}
      />
      <h1
        style={{
          fontWeight: 700,
          fontSize: "26px",
          textAlign: "left",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: "#555555",
          fontWeight: 400,
          fontSize: "18px",
          textAlign: "left",
        }}
      >
        {subTitle}
      </p>
      <Button
        style={{
          display: "flex",
          padding: "18px",
          "43px": "19px",
          border: "2px solid #5C8692",
          fontWeight: "800",
          fontSize: "14px",
        }}
      >
        Read More
      </Button>
    </div>
  );
};
