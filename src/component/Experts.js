import React, { Component } from "react";

export default ({
  imageE,
  head,
  para,
  subPara,
  imageF,
  imageLogo,
  imageIn,
}) => {
  return (
    <div
      className="pt-5 mt-5 "
      style={{
        width: " 370px",
        height: "668px",
      }}
    >
      <img
        src={imageE}
        alt="Photo"
        style={{
          width: "370px",
          height: "350px",
        }}
      />
      <h3 className="fw-bold pt-2 ">{head}</h3>
      <p className="text-secondary fs-6">{para}</p>
      <p className="text-dark ">{subPara}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src={imageF}
          alt="Photo"
          style={{
            height: 16,
            width: 19,
            marginLeft: "2rem",
          }}
        />
        <img
          src={imageLogo}
          alt="Photo"
          style={{
            height: 16,
            width: 19,
            marginLeft: "2rem",
          }}
        />
        <img
          src={imageIn}
          alt="Photo"
          style={{
            height: 16,
            width: 19,
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        />
      </div>
    </div>
  );
};
