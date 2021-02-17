import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ info }) => {
  return (
    <Card className="my-3 shadow-sm p-3 mb-5 bg-white rounded">
      <Link to={`/product/${info._id}`}>
        <Card.Img variant="top" src={info.image} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${info._id}`}>
            <div title={ info.name }>
              { info.name }
            </div>
          </Link>
        </Card.Title>
        <Card.Text>
          <span className="over-h4" title={ info.description }>
            { info.description }
          </span>
        </Card.Text>
        <Card.Text as="div">
          <div className="my-3">
            <Rating value={ info.rating } text={ `${info.numReviews}评论` } />
          </div>
        </Card.Text>
        <Card.Text as="div" as="h4">
          <div>
            ￥{ info.price }
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
