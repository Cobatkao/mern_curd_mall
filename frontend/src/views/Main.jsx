import React, { useState, useEffect } from 'react'
import { Badge, Row, Col } from 'react-bootstrap';
import ProductItem from '../components/ProductItem';
import axios from 'axios';

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, [])

  return (
    <main>
      <h1><Badge variant="primary">New</Badge> 产品列表</h1>
      <Row>
        {
          products.map((item, index) => (
            <Col sm={12} md={6} lg={4} xl={3} key={index}>
              <ProductItem info={item} key={index} />
            </Col>
          ))
        }
      </Row>
    </main>
  )
}

export default Main
