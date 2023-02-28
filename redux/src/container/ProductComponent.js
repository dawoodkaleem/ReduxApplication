import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);
  const renderList = products.map((products) => {
    const { id, title, image, price, catagory } = products;
    return (
      <div className=" four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link card">
            <div className="ui card">
              <div className="image">
                <img
                  class="ui medium rounded image"
                  src={image}
                  alt={title}
                  height={400}
                  width={300}
                />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{catagory}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
