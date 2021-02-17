import React from 'react'
import propTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span className="inline-block">
        <i style={{ color: color }} className={
          value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
        }></i>
      </span>
      <span className="inline-block">
        <i style={{ color: color }} className={
          value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
        }></i>
      </span>
      <span className="inline-block">
        <i style={{ color: color }} className={
          value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
        }></i>
      </span>
      <span className="inline-block">
        <i style={{ color: color }} className={
          value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
        }></i>
      </span>
      <span className="inline-block">
        <i style={{ color: color }} className={
          value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
        }></i>
      </span>
      <span className="inline-block ml-2">{ value && `${value}分` }</span>
      <span className="inline-block ml-2">{ text && text }</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
  value: 0
}

Rating.propTypes = {
  value: propTypes.number,
  text: propTypes.string.isRequired,
  color: propTypes.string
}

export default Rating
