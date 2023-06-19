/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import About from "../Screen/About";
import { useNavigate } from "react-router-dom";

export default ({ Home, About, Pages, Services, Contact }) => {
  let navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "90%",
        height: 125,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "5rem",
        paddingRight: "5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={require("../asset/Logo.png")}
          alt="Photo"
          style={{
            height: 33,
            width: 33,
          }}
        />

        <h1
          style={{
            marginLeft: "1rem",
          }}
        >
          Beautyness
        </h1>

        <img
          src={require("../asset/Vector_one.png")}
          alt="Photo"
          style={{
            height: 20,
            width: 20,
            marginLeft: "5rem",
          }}
        />

        <p
          style={{
            height: 23,

            marginLeft: 10,
            fontWeight: "600",
          }}
        >
          Call Us-(+22)123 456 7890
        </p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",

            height: "23,%",

            display: "flex",
            alignItems: "center",
            wordSpacing: 40,
            marginLeft: "10rem",
            textAlign: "right",
          }}
        >
          <p
            style={{
              color: "#555555",
              fontWeight: "400",
              marginLeft: "5rem",
            }}
          >
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              Home
            </p>
          </p>
          <p
            style={{
              color: "#555555",
              fontWeight: "400",
              marginLeft: "5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ cursor: "pointer" }}>Pages</p>
            <img
              src={require("../asset/chevron-down.png")}
              alt="Photo"
              style={{
                height: 16,
                width: 16,
                cursor: "pointer",
              }}
            />
          </p>
          <p
            style={{
              color: "#555555",
              fontWeight: "400",
              marginLeft: "5rem",
              cursor: "pointer",
            }}
          >
            <p onClick={() => navigate("/about")}>About</p>
          </p>
          <p
            style={{
              color: "#555555",
              fontWeight: "400",
              marginLeft: "5rem",
            }}
          >
            <p style={{ cursor: "pointer" }}>Services</p>
          </p>
          <p
            style={{
              color: "#555555",
              fontWeight: "400",
              marginLeft: "5rem",
            }}
          >
            <p style={{ cursor: "pointer" }}>Contact</p>
          </p>
        </div>

        <img
          src={require("../asset/f.png")}
          alt="Photo"
          style={{
            height: 16,
            width: 19,
            marginLeft: "2rem",
          }}
        />
        <img
          src={require("../asset/logo_two.png")}
          alt="Photo"
          style={{
            height: 16,
            width: 19,
            marginLeft: "2rem",
          }}
        />
        <img
          src={require("../asset/in.png")}
          alt="Photo"
          style={{
            height: 16,
            width: 19,
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        />

        <div
          style={{
            backgroundColor: "#7A9CA5",

            height: 50,
            display: "flex",
            alignItems: "center",
            padding: 10,
          }}
        >
          <img
            src={require("../asset/Reservation_logo.png")}
            alt="Photo"
            style={{
              height: 13,
              width: 13,
            }}
          />
          <h1
            style={{
              // height: 18,
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              color: "white",
              marginLeft: "1rem",
            }}
          >
            Reservation
          </h1>
        </div>
      </div>
    </div>
  );
};
