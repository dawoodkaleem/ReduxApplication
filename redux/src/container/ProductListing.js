import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/action/productAction";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchFunction = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error");
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchFunction();
  }, []);
  console.log("Producsyt", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
