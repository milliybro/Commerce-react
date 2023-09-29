import React, { Component, Fragment } from 'react'
import { toast } from 'react-toastify';
import axios from "axios";
import Loading from '../components/shares/Loading';

export class ElectronicsPage extends Component {
  state = {
    post: null,
    loading: false,
  };
  async getPost() {
    // let postId = window.location.pathname.split("/").at(-1);
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        `https://fakestoreapi.com/products/category/jewelery`
      );
      this.setState({ post: data });
    } catch (err) {
      toast.error("Error");
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    const { post, loading } = this.state;
    console.log(post);
    return (
      <Fragment>
        <section>
          <div className="container">
            {loading ? (
              <Loading />
            ) : (
              <Fragment>
                <h1>{post?.title}</h1>
                <p>{post?.description}</p>
              </Fragment>
            )}
          </div>
        </section>
      </Fragment>
    )
  }
}

export default ElectronicsPage