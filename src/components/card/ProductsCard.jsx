import React, { Component } from "react";
import star from "../../assets/star.png";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class ProductsCard extends Component {
  render() {
    const { id, title, price, category, image, rating } =
      this.props;
    const {rate, count} = rating;

    return (
      <div className="container bg-white p-3">
      <Link to={`products/${id}`} className="product-card w-100">
        <div className="product-img w-100">
          <img
            className="card-img"
            src={image}
            alt={title}
          />
          <div className="product-category">
            <p>{category}</p>
          </div>
        </div>
        <div className="product-content">
          <h3 className="product-title">
            {title}
          </h3>
          <div className="product-price">
            <p className="product-price">${price}</p>
          </div>
          <div className="product-rating mt-2 d-flex justify-content-between align-items-center">
            <div className="product-star d-flex gap-2 my-3">
              <img src={star} alt="star" />
              <p className="rating">{rate}</p>
            </div>
            <p className="product-stock">
              Count: <span>{count}</span>
            </p>
          </div>
            <Button className="m-auto d-flex w-100 d-flex justify-content-center" variant="danger">Add to Cart</Button>
        </div>
      </Link>
      </div>
    );
  }
}

export default ProductsCard;