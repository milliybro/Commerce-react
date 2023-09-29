import React, { Component, Fragment } from 'react'
import axios from "axios";
import ProductsCard from '../components/card/ProductsCard';


export class CartPage extends Component {
   state = {
      categories: [],
    };
    async getCart() {
      try {
        let { data } = await axios(
          `https://fakestoreapi.com/products/category/men's clothing`
        );
        this.setState({ categories: data });
      } catch (err) {
        console.log(err);
      }
    }
  
    componentDidMount() {
      this.getCart();
    }
  render() {
   const { categories } = this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="mt-5">Carts</h1>
            <div className="products-row my-3">
              {categories.map((category) => (
                <ProductsCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default CartPage