import React, { Component } from "react";
import Admincontent from "./AdminContent";
import HeadNavFoot from "../HeadNavFoot";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Sidebar /> */}
        <HeadNavFoot />
        <Admincontent />
        {/* <DashFooter /> */}
      </div>
    );
  }
}
