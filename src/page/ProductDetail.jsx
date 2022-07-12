import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicde.com/lee951109/HnM/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
            {product?.size.map((item, index) => (
              <Dropdown.Item href="#" key={index}>
                {item}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Button variant="outline-secondary">담기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
