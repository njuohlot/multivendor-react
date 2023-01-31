import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Account from "./pages/Account";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Whishlist from "./pages/Wishlist";
import Register from "./pages/Register";

import Product from "./pages/Product";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/details/:id" element={<Product />} />
        <Route path="/wishlist" element={<Whishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details/:id" element={<BlogDetails />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
