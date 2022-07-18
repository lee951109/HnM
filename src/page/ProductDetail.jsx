import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.product);
  const [selected, setSelected] = useState("사이즈 선택");
  let dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
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
