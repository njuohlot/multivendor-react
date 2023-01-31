import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { posts } from "../data";
import BlogItem from "../components/BlogItem";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="banner banner-inner">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-9 col-8">
              <div className="breadcrumb-txt">
                <h1>Blog Page</h1>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fa-regular fa-house"></i>
                    </a>
                  </li>
                  <li>/</li>
                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-3 col-4">
              <div className="part-img">
                <img src="assets/images/breadcrumb-img.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-page py-120">
        <div className="container">
          <div className="row g-4">
            {posts.map((item, key) => (
              <BlogItem
                id={item.id}
                tittle={item.tittle}
                date={item.date}
                image={item.image}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Blog;
