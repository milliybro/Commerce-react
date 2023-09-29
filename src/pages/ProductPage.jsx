import React, { Component, Fragment } from "react";
import axios from "axios";

import "./Product.css";
import { Button } from "react-bootstrap";
import star from "../assets/star.png";

export class ProductPage extends Component {
  state = {
    product: null,
  };

  async getProduct() {
    let productId = window.location.pathname.split("/").at(-1);
    try {
      let { data } = await axios(
        `https://fakestoreapi.com/products/${productId}`
      );
      this.setState({ product: data });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;

    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="product-info d-flex">
              <img
                className="w-100 p-5 product-image"
                src={product?.image}
                alt=""
              />
              <div className="product-desc">
                <h4 className="product-title">{product?.title}</h4>
                <p className="product-text">
                  <img className="product-star" src={star} alt="" />
                  <span className="">{product?.rating.rate}</span>
                </p>
                <p className="product-text">
                  Price: <span className="">${product?.price}</span>
                </p>
                <p className="product-text">
                  Category: <span>{product?.category}</span>
                </p>
                <p className="product-text">
                  Count:
                  <span className="">{product?.rating.count}</span>
                </p>

                <Button variant="success">Add to Cart</Button>
              </div>
            </div>
              
            <h3>Product description</h3>
            <p className="product-text">
              <span>{product?.description}</span>
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ProductPage;
