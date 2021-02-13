import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Container, Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const Product = ({ match }) => {
  console.log(match);
  const info = products.find(item => item._id === match.params.id)
  return (
    <main>
      <Link className="btn btn-dark my-3" to="/">返回主页</Link>
      <Container>
        <Row>
          <Col md={6}>
            <Image src={info.image} alt={info.name} fluid></Image>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-around">
            <ListGroup variant="flush">
              <ListGroup.Item><h3>{ info.name }</h3></ListGroup.Item>
              <ListGroup.Item><Rating value={ info.rating } text={ `${info.numReviews}条评论` } /></ListGroup.Item>
              <ListGroup.Item>价格：￥{ info.price }</ListGroup.Item>
              <ListGroup.Item>
                <p>描述：</p>
                <p className="mt-2">￥{ info.description }</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col md={6}>库存：</Col>
                  <Col md={6}><strong>￥{ info.countInStock }</strong></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col md={6}>价格：</Col>
                  <Col md={6}><strong>￥{ info.price }</strong></Col>
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
