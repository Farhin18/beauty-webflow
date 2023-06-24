import React, { Component } from "react";

export default ({}) => {
  return (
    <div
      className="pt-5"
      style={{
        width: "100%",
        height: "560px",
        background: "#1E2C30",
      }}
    >
      <div
        className="mb-3 d-flex justify-content-around"
        style={{
          width: "100%",
          height: "65px",
          borderBottom: "2px solid ",
          borderBottomColor: "GrayText",
        }}
      >
        <div className=" d-flex">
          <img
            className="mt-2"
            src={require("../asset/Logo.png")}
            alt="Photo"
            style={{
              height: 55,
              width: 55,
            }}
          />

          <h1 className="mb-4 pt-2 text-white px-2">Beautyness</h1>
        </div>
        <div className="pt-2">
          <img
            src={require("../asset/Icon_six.png")}
            alt="Photo"
            style={{
              height: 55,
              width: 55,
              marginLeft: "2rem",
            }}
          />
          <img
            src={require("../asset/Icon_seven.png")}
            alt="Photo"
            style={{
              height: 55,
              width: 55,
              marginLeft: "2rem",
            }}
          />
          <img
            src={require("../asset/Icon_in.png")}
            alt="Photo"
            style={{
              height: 55,
              width: 55,
              marginLeft: "2rem",
            }}
          />
          <img
            src={require("../asset/Icon_five.png")}
            alt="Photo"
            style={{
              height: 55,
              width: 55,
              marginLeft: "2rem",
            }}
          />
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="text-white m-2 px-5">
          <h3>Explore</h3>
          <p>Home</p>
          <p>About US</p>
          <p>Services</p>
          <p>Appointments</p>
          <p>Blog</p>
          <p>Contact US</p>
        </div>
        <div className="text-white m-2 ">
          <h3>Utility Pages</h3>
          <p>Start here</p>
          <p>Style guide</p>
          <p>404 not found</p>
          <p>Password protected</p>
          <p>Licenses</p>
          <p>Changelog</p>
        </div>
        <div className="text-white m-2 ">
          <h3>Keep in Touch</h3>
          <p>Address: 24A Kingston St, Los Vegas NC 28202, USA.</p>
          <p>Mail: support@doctors.com</p>
          <p>Phone: (+22) 123 - 4567 - 900</p>
        </div>
        <div className="text-white m-2">
          <h3>Working Hours</h3>
          <p>Mon to Fri: 7am-6pm</p>
          <p>Sat: 9am-7pm</p>
          <p>Sun: 9am-6pm</p>
        </div>
      </div>
      <footer className="text-white bg-dark pt-3 pb-3 text-center ">
        © Copyright 2021. Drafted by Victor Themes.
      </footer>
    </div>
  );
};
