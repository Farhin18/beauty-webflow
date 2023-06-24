import React, { Component } from "react";

export default ({ imageJ, headM, headS }) => {
  return (
    <div
      className=" m-3 pt-2"
      style={{
        width: " 582px",
        height: "359px",
        backgroundColor: "aqua",
      }}
    >
      <p className="text-center">
        “ It is a long established fact that a reader will be tracked distracted
        by the readable content of a page is when looking at its layout. The
        point of using Lorem of distribution it look like readable English “
      </p>
      <div
        // className="d-flex "
        style={{
          width: " 582px",
          height: "125px",
          backgroundColor: "#1E2C30",
        }}
      >
        <div className="d-flex mt-5 ">
          <img
            className="d-flex mt-4 mx-4"
            src={imageJ}
            alt="Photo"
            style={{
              width: " 74px",
              height: "74px",
            }}
          />
          <div className="mt-3">
            <img
              src={require("../asset/star.png")}
              alt="Photo"
              style={{
                width: " 16.38px",
                height: "16px",
              }}
            />
            <img
              src={require("../asset/star.png")}
              alt="Photo"
              style={{
                width: " 16.38px",
                height: "16px",
              }}
            />
            <img
              src={require("../asset/star.png")}
              alt="Photo"
              style={{
                width: " 16.38px",
                height: "16px",
              }}
            />
            <img
              src={require("../asset/star.png")}
              alt="Photo"
              style={{
                width: " 16.38px",
                height: "16px",
              }}
            />
            <img
              src={require("../asset/star_half.png")}
              alt="Photo"
              style={{
                width: " 13.65px",
                height: "13px",
              }}
            />
          </div>

          <h3 className="fw-bold text-white">{headM}</h3>
          <p className="fw-bpld text-white">{headS}</p>
        </div>

        <img
          src={require("../asset/Icon_two.png")}
          alt="Photo"
          style={{
            width: " 70px",
            height: "55px",
          }}
        />
      </div>
    </div>
  );
};
