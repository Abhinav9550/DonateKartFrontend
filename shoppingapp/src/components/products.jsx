import React, { Component } from "react";
import Product from "./product";
import Data from "../data.json";
import "../bootstrap.min.css";
import axios from "axios";
import { Dropdown, Container } from "react-bootstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Data.forEach((x) => {
      x.currency = "₹";
    });
    this.setState({ data: Data });
  }

  async changeCurrency(key) {
    const { data } = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=INR`
      // `http://data.fixer.io/api/convert?access_key=06600041ccdb6f4f790f91ff380c0169&from=${id}&to=${id}&amount=25/`
    );
    console.log(data);
  }

  selectedKey(key) {
    Data.forEach((x) => {
      x.price =
        x.currency !== key
          ? key === "$"
            ? x.price / 74
            : x.price * 74
          : x.price;
    });
    Data.forEach((x) => {
      x.currency = key;
    });
    this.setState({ data: Data });
    //this.changeCurrency(key);
  }

  render() {
    var i = 1;
    return (
      <Container
        className="my-5"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {this.state.data.map((x) => (
            <Product key={i++} product={x} />
          ))}
        </div>
        <div>
          <Dropdown
            className="px-1 py-5 mx-5"
            variant="pills"
            defaultactivekey="₹"
            onSelect={(keyvalue) => this.selectedKey(keyvalue)}
          >
            <Dropdown.Toggle
              id="dropdown-button-dark-example1 "
              variant="secondary"
            >
              Select Currency
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item eventKey="₹">INR</Dropdown.Item>
              <Dropdown.Item eventKey="$">USD</Dropdown.Item>
              <Dropdown.Divider />
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    );
  }
}

export default Products;
