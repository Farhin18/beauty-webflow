import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import ReadMore from "./component/ReadMore";
import { Button } from "react-bootstrap";
import AboutUs from "./component/AboutUs";
import Appointment from "./component/Appointment";
import Benefits from "./component/Benefits";
import TopBar from "./component/TopBar";
import Home from "./Screen/Home";
import About from "./Screen/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
