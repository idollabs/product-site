import React from 'react';
import { useFetch } from '../../hooks/useFetch';

const DisplayItems = () => {
  const getItems = useFetch('https://fakestoreapi.com/products?limit=5', {});

  return (
    <>
      {getItems.map(({ id, title, price, category, description, image }) => {
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{category}</p>
            <p>{description}</p>
            <img src={image} alt={title} />
          </div>
        );
      })}
    </>
  );
};

export default DisplayItems;
