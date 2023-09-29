import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

import "./Header.css";


export class Header extends Component {
  state = {
    category: [],
  };
  async getCategory() {
    try {
      let { data } = await axios(
        `https://fakestoreapi.com/products/categories`
      );
      this.setState({ category: data });
    } catch (err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getCategory();
  }
  render() {
    const { category } = this.state;
    return (
      <Fragment>
        <header className="">
          <nav className="container my-3 d-flex justify-content-between align-items-center">
            <ul className="nav d-flex justify-content-between">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/products/category/${category[0]}`}
                >
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/products/category/${category[1]}`}
                >
                  Jewelery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/products/category/${category[2]}`}
                >
                  Men's clothing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to={`/products/category/${category[3]}`}
                >
                  Women's clothing
                </NavLink>
              </li>
            </ul>
            <InputGroup className="w-25">
              <Form.Control
                placeholder="Search..."
              />
            </InputGroup>
            <NavLink to={`/carts`}>
              <Button className="btn-secondary">Cart</Button>
            </NavLink>
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Header;
