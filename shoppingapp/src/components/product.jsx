import React from "react";
import { Card, Container } from "react-bootstrap";

function Product({ product }) {
  return (
    <>
      <Container className="px-3 py-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "10rem" }}
          />
          <Card.Body>
            <Card.Title className="text-primary ">{product.name}</Card.Title>
            <Card.Text className="text-secondary ">
              {product.currency} {product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default Product;
