import React, { Component } from "react";
import LoadingImg from "./giphy.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="container text-center">
        <img src={LoadingImg} alt="loading" />
      </div>
    );
  }
}
