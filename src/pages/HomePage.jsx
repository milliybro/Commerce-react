import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ProductsCard from "../components/card/ProductsCard";
import "./Home.css";
import { LIMIT } from "../components/constants/index";

export class HomePage extends Component {
  state = {
    products: [],
    total: 0,
    activePage: 1,
    loading: false,
  };
  async getProducts(page = 1) {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get("https://fakestoreapi.com/products", {
        params: { _page: page, _limit: LIMIT },
      });

      this.setState({ products: data, total: data.length });
    } catch (err) {
      console.log(err);
      toast.error("Error");
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const { products, total, activePage } = this.state;
    const getPage = (page) => {
      this.setState({ activePage: page });
      this.getProducts(page);
    };
    const pages = Math.ceil(total / LIMIT);
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="mt-5">All products ({total})</h1>
            <div className="products-row my-3">
              {products.map((product) => (
                <ProductsCard key={product.title} {...product} />
              ))}
            </div>
            <div className="my-5 mx-auto d-flex justify-content-center gap-3">
              {Array(pages)
                .fill(1)
                .map((_, i) => (
                  
                  <button
                    className={
                      i + 1 === activePage ? "bg-danger active-btn" : "pgn-btn"
                    }
                    onClick={() => getPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default HomePage;
