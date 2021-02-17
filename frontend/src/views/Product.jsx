import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const Product = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    }
    fetchProduct();
  }, [match])

  return (
    <main>
      <Link className="btn btn-dark my-3" to="/">返回主页</Link>
      <Container>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-around">
            <ListGroup variant="flush">
              <ListGroup.Item><h3>{ product.name }</h3></ListGroup.Item>
              <ListGroup.Item><Rating value={ product.rating } text={ `${product.numReviews}评论` } /></ListGroup.Item>
              <ListGroup.Item>价格：￥{ product.price }</ListGroup.Item>
              <ListGroup.Item>
                <p>描述：</p>
                <p className="mt-2">￥{ product.description }</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col md={6}>库存：</Col>
                  <Col md={6}><strong>￥{ product.countInStock }</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}>价格：</Col>
                  <Col md={6}><strong>￥{ product.price }</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className="btn-block" disabled={ Product.countInStock === 0 }>添加到购物车</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </main>
  )
  }

export default Product
