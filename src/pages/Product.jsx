import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { useParams } from "react-router-dom";
const Product = () => {
  const params = useParams();
  const {id} = params;
  return (
    <div>
      
      <Header/>
  
     <Footer/>
    </div>
  );
};

export default Product;
