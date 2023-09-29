import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
