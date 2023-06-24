import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../component/TopBar";
import { Container, Row, Col, Button } from "react-bootstrap";
import Values from "../component/Values";
import Experts from "../component/Experts";
import Testimonial from "../component/Testimonial";
import Follow from "../component/Follow";
import Footer from "../component/Footer";

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
          height: "495px",
          padding: 30,
        }}
      >
        <Container className="text-center text-white">
          <h6 className="fw-bold mt-5 p-1">SHORT STORY ABOUT US</h6>

          <h1 className="fw-bold fs-1 mt-5 ">
            The big story behind, our beautyness center
          </h1>
          <Button className="text-white fs-6 w-20 p-3 mt-5 mb-5 bg-secondary border border-secondary">
            MAKE A RESERVATION
          </Button>
        </Container>
      </div>

      <div
        style={{
          width: "100%",
          height: "756px",
        }}
      >
        <Container className="text-center d-flex flex-column justify-content-center">
          <h6 className="pt-5 mt-2 fw-bold text-dark-50">Our Values</h6>
          <h3 className="fs-1 fw-bold">The work values we thrive for</h3>
          <Values
            imageV={require("../asset/Icon.png")}
            alt="Photo"
            main="Beauty Experts"
            mainSub="The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages. "
          />
          <Values
            imageV={require("../asset/Icon_one.jpg")}
            alt="Photo"
            main="Great Services"
            mainSub="The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages. "
          />
          <Values
            imageV={require("../asset/Vector.png")}
            alt="Photo"
            main="100% Genuine"
            mainSub="The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages. "
          />
        </Container>
      </div>
      <div
        style={{
          width: "100%",
          height: "754px",
          background: "#EBF3F5",
        }}
      >
        <Container className="d-flex flex-row pt-5 text-white">
          <img
            className=""
            src={require("../asset/Image_four.png")}
            alt="Photo"
            style={{
              height: "610px",
              width: "547px",
            }}
          />
          <div
            className="mt-5 "
            style={{
              width: "653px",
              height: "500px",
              background: "#1E2C30",
            }}
          >
            <h6 className="fs-6 fw-bold px-5 pt-5">About Us</h6>
            <h1 className="fs-1 fw-bold px-5">
              Style is a Reflection of your Attitude & your Personality
            </h1>
            <p className="fs-4 px-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, buying to
              injected humour, or randomised words which don't look even many
              desktop publishing packages.
            </p>
          </div>
        </Container>
      </div>
      <div
        style={{
          width: "100%",
          height: "900px",
        }}
      >
        <Container className="text-center ">
          <p className="fw-bold text-secondary pt-5 m-3">MEET OUR EXPERTS</p>
          <h1 className="fw-bold ">The amazing women behind Beautyness</h1>
          <div className="d-flex ">
            <Experts
              imageE={require("../asset/Image_five.png")}
              alt="Photo"
              head="Sherlin D’Cruz"
              para="Beautyness Expert"
              subPara="I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
              imageF={require("../asset/f.png")}
              imageLogo={require("../asset/logo_two.png")}
              imageIn={require("../asset/in.png")}
            />
            <Experts
              imageE={require("../asset/Image_six.png")}
              alt="Photo"
              head="Maria Sharapova"
              para="Beautyness Expert"
              subPara="I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
              imageF={require("../asset/f.png")}
              imageLogo={require("../asset/logo_two.png")}
              imageIn={require("../asset/in.png")}
            />
            <Experts
              imageE={require("../asset/Image_seven.png")}
              alt="Photo"
              head="Angeline Jenifer"
              para="Beautyness Expert"
              subPara="I must explain to you how all this mistaken idea of denouncing pleasure that will araise praising pain"
              imageF={require("../asset/f.png")}
              imageLogo={require("../asset/logo_two.png")}
              imageIn={require("../asset/in.png")}
            />
          </div>
        </Container>
      </div>
      <div
        style={{
          width: "100%",
          height: "776px",
          background: "#EDF5F7",
        }}
      >
        <Container className="pt-5 text-center">
          <p className="fw-bold pt-5 text-secondary">Testimonials</p>
          <h1 className="fw-bold ">What our Customers says...</h1>
          <div className="d-flex justify-content-around pt-5 mt-3">
            <Testimonial
              imageJ={require("../asset/Image_two.png")}
              alt="Photo"
              headM="James Williams"
              headS="United States "
            />
            <Testimonial
              imageJ={require("../asset/Image_three.png")}
              alt="Photo"
              headM="Lico Jessica"
              headS="United Kingdom "
            />
          </div>
        </Container>
      </div>

      <Container className="pt-5 mt-5 ">
        <Follow />
        <Button
          className="fw-bold fs-6 d-flex p-4 m-5 bg-secondary border-secondary"
          // style={{
          //   display: "flex",
          //   padding: "23px",
          //   "72px": "24px",
          //   background: "#5C8692",
          //   fontWeight: "800",
          //   fontSize: "14px",
          // }}
        >
          CONTACT US
        </Button>
      </Container>
      <Footer />
    </div>
  );
};
