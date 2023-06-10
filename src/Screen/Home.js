import React from "react";
import TopBar from "../component/TopBar";
import { Button } from "react-bootstrap";
import ReadMore from "../component/ReadMore";
import AboutUs from "../component/AboutUs";

export default ({ image }) => {
  return (
    <div>
      <TopBar />

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "#EBF3F5",
            width: "50%",
            height: 925,
            paddingRight: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              width: "60%",
              marginLeft: "30%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={require("../asset/Vector_two.png")}
                alt="Photo"
                style={{
                  height: 20,
                  width: 22,
                }}
              />
              <h1
                style={{
                  marginLeft: "1rem",
                  color: "#5C8692",
                  fontSize: 18,
                }}
              >
                WELCOME TO BEAUTYNESS!!!
              </h1>
            </div>

            <div
              style={{
                marginLeft: "1rem",
                color: " #141414",
                marginTop: "-3rem",
              }}
            >
              <h1
                style={{
                  width: "80%",
                  fontSize: 55,
                }}
              >
                Beauty is power a smile is its sword.
              </h1>
            </div>

            <p
              style={{
                marginTop: "-1rem",
                width: "50%",
              }}
            >
              There are many variation of passages are Ipsum available, majority
              have suffered alteration in some form.
            </p>

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
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#1E2C30",
            width: "50%",
            height: 925,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={require("../asset/Image.png")}
            alt="Photo"
            style={{
              height: 550,
              width: 550,
              position: "absolute",
              left: "45%",
              border: "10px solid #EBF3F5",
            }}
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#FFFFFF",

          width: "100%",
          height: 790,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingTop: "5%",
        }}
      >
        <ReadMore
          imageUrl={require("../asset/Photo.jpg")}
          alt="Photo"
          title="Spa & Massage"
          subTitle="If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text."
        />
        <ReadMore
          imageUrl={require("../asset/Photo_one.jpg")}
          alt="Photo"
          title="Hair & Beauty"
          subTitle="If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text."
        />
        <ReadMore
          imageUrl={require("../asset/Photo_two.jpg")}
          alt="Photo"
          title="Body  Treatments"
          subTitle="If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text."
        />
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            backgroundColor: "#EBF3F5",
            width: "100%",
            height: 914,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "75%",
              height: "614px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "560px",
                marginTop: "-5rem",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#5C8692",
                    fontWeight: "600",
                  }}
                >
                  About Us
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#141414",
                    fontWeight: "600",
                    fontSize: "55px",
                    marginTop: "1rem",
                  }}
                >
                  The Beauty is about being Comfortable in your own skin!
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "#555555",
                    fontWeight: "400",
                    fontSize: "18px",
                    marginTop: "-2rem",
                  }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, buying to injected humour, or randomised words which
                  don't look even many desktop publishing packages.
                </p>
              </div>
              <div
                style={{
                  marginTop: "-3rem",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AboutUs
                  imagePath={require("../asset/Icon.png")}
                  alt="Photo"
                  heading="Beauty Expert"
                />
                <AboutUs
                  imagePath={require("../asset/Icon_one.jpg")}
                  alt="Photo"
                  heading="Great Services"
                />
                <AboutUs
                  imagePath={require("../asset/Vector.png")}
                  alt="Photo"
                  heading="100% Genuine"
                />
              </div>
            </div>

            <img
              src={require("../asset/Image_one.png")}
              alt="Photo"
              style={{
                height: "670px",
                width: "55%",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFFFFF",
          width: "100%",
          height: 1769,
        }}
      >
        <div style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              paddingTop: 146,
            }}
          >
            <p
              style={{
                color: "#5C8692",
                fontWeight: 600,
                fontSize: "15px",
                width: "122px",
                height: "23px",
              }}
            >
              Our Services
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-2rem",
            }}
          >
            <h1
              style={{
                color: "#141414",
                fontWeight: 700,
                fontSize: "45px",
                width: 700,
                height: "116px",
                textAlign: "center",
              }}
            >
              We are Experienced in making you very Beautiful
            </h1>
          </div>
          <div
            style={{
              height: "1280px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "640px",
                width: "100%",
                display: "flex",

                justifyContent: "space-evenly",
              }}
            >
              <img
                src={require("../asset/Photo_three.jpg")}
                alt="Photo"
                style={{
                  height: "640px",
                  width: "45%",
                }}
              />
              <div
                style={{
                  height: "640px",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Face masks ....................................... from
                    $48.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Full body massage ............................. from $54.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Geothermal spa ................................. from $54.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Sauna relax ....................................... from
                    $73.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",
                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <Button
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    padding: "23px",
                    "34px": "24px",
                    border: "2px solid #5C8692",
                    fontWeight: "800",
                    fontSize: "14px",
                    width: "249px",
                    height: "65px",
                  }}
                >
                  GET AN APPOINTMENT
                </Button>
                <img
                  src={require("../asset/Background.jpg")}
                  alt="Photo"
                  style={{
                    height: "180px",
                    width: "180px",
                    position: "relative",
                    bottom: -50,
                    left: -150,
                    opacity: "25%",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                height: "640px",
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  height: "640px",
                  marginTop: "5rem",
                }}
              >
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Face masks ....................................... from
                    $48.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Full body massage ............................. from $54.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Geothermal spa ................................. from $54.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <div
                  style={{
                    height: "83px",
                    borderBottom: " 1px solid #9BB7BF",
                  }}
                >
                  <h1
                    style={{
                      height: "29px",
                      width: "529px",
                      fontWeight: 700,
                      fontSize: "22px",
                      paddingTop: 10,
                    }}
                  >
                    Sauna relax ....................................... from
                    $73.00
                  </h1>
                  <p
                    style={{
                      color: "#555555",

                      height: "27px",
                      width: "527px",
                      fontWeight: 400,
                      fontSize: "18px",
                      marginTop: "-1rem",
                    }}
                  >
                    The versions have evolved over the sometimes by accident.
                  </p>
                </div>
                <Button
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    padding: "23px",
                    "34px": "24px",
                    border: "2px solid #5C8692",
                    fontWeight: "800",
                    fontSize: "14px",
                    width: "249px",
                    height: "65px",
                  }}
                >
                  GET AN APPOINTMENT
                </Button>
              </div>
              <img
                src={require("../asset/Photo_four.jpg")}
                alt="Photo"
                style={{
                  height: "640px",
                  width: "45%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#EDF5F7",
          width: "100%",
          height: "776px",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "83px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          <p
            style={{
              Color: "#5C8692",
              width: "123px",
              height: "23px",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            TESTIMONIALS
          </p>
          <h1
            style={{
              width: "552pxpx",
              height: "58px",
              fontWeight: "700",
              fontSize: "45px",
              marginTop: "-1rem",
            }}
          >
            What our Customer says...
          </h1>
        </div>
        <div
          style={{
            width: "100%",
            height: "359px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            background: "yellow",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "582px",
              height: "359px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            <div
              style={{
                width: "48%",
                height: "234px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  width: "485px",
                  height: "136px",
                  fontWeight: 400,
                  fontSize: "19px",
                  lineHeight: "180%",
                  marginLeft: "-5rem",
                }}
              >
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </p>
            </div>
            <div
              style={{
                background: "#1E2C30",
                width: "582px",
                height: "125px",
              }}
            >
              <div
                style={{
                  background: "blue",
                  width: "232px",
                  height: "74px",
                }}
              >
                <img
                  src={require("../asset/Image_two.png")}
                  alt="Photo"
                  style={{
                    height: 74,
                    width: 74,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
