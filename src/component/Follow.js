import React, { Component } from "react";

export default ({ imageJ, headM, headS, Button }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "1050px",
      }}
    >
      <div
        className="pt-5 mt-5"
        style={{
          width: "1201px",
          height: "1101px",

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "505px",
            height: "976px",
          }}
        >
          <p className="fw-bold text-secondary">Share Us</p>
          <h3 className="fw-bold ">Follow us on Instagram </h3>
          <p className="fs-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, buying to
            injected humour, or randomised words many desktop publishing
            packages.
          </p>
          <img
            src={require("../asset/Icon_three.png")}
            alt="Photo"
            style={{
              width: " 505px",
              height: "575px",
            }}
          />
        </div>
        <div>
          <img
            src={require("../asset/Icon_four.png")}
            alt="Photo"
            style={{
              width: " 644px",
              height: "976px",
            }}
          />
        </div>
      </div>
      {/* <Button
        style={{
          display: "flex",
          padding: "23px",
          "72px": "24px",
          background: "#5C8692",
          //   border: "2px solid #5C8692",
          fontWeight: "800",
          fontSize: "14px",
        }}
      >
        CONTACT US
      </Button> */}
    </div>
  );
};
