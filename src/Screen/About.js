import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../component/TopBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Values from "../component/Values";

export default () => {
  const navigate = useNavigate();
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      <TopBar />
      <div
        style={{
          backgroundColor: "#1E2C30",
          display: "block",
          width: "100%",
          padding: 30,
        }}
      >
        <Container
        // className="text-align=center color=white"
        // style={{
        //   textAlign: "center",
        //   color: "white",
        // }}
        >
          <h6
            style={{
              fontSize: "15px",
              fontWeight: 600,
              marginTop: 20,
              paddingTop: 30,
            }}
          >
            SHORT STORY ABOUT US
          </h6>

          <h1
            style={{
              fontSize: "55px",
              fontWeight: 700,
            }}
          >
            The big story behind, our beautyness center
          </h1>
          <Button
            style={{
              width: 250,
              height: 65,
              color: "white",
              display: "flex",
              padding: "23px",
              backgroundColor: "#5C8692",
              fontWeight: "700",
              border: "#EBF3F5",
              fontSize: 18,
            }}
          >
            MAKE A RESERVATION
          </Button>
        </Container>
      </div>

      <h1
        className=""
        style={{
          fontSize: "55px",
          fontWeight: 700,
        }}
      >
        The big story behind, our beautyness center
      </h1>
    </div>
  );
};
