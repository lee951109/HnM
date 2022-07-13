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
  const [selected, setSelected] = useState("사이즈 선택");

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/lee951109/HnM/products/${id}`;
    // let url = `http://localhost:5000/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
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
        <Col className="product-info">
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <select
            className="product-select"
            onChange={handleSelect}
            value={selected}
          >
            {product?.size.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>

          <button className="add-btn">담기</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
