import React, { Component } from "react";
import Nav from "./Nav";
import Header from "./Header";
import "./App.css";

class App extends Component {
  state = {
    projects: [
      {
        title: "Project title",
        image: "Project Picture",
        url: "https://fallencloud.github.io/Build-an-Interactive-Form/",
        tech: ["jquery", "React", "JavaScript"]
      }
    ]
  };
  render() {
    return (
      <div class="container-fluid px-0">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;
