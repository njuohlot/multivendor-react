import React from 'react'

const BlogItem = ({id, tittle, image, desc, date}) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="single-blog" key={id}>
        <div className="part-img">
          <img src={image} alt="Image" />
        </div>
        <div className="part-txt">
          <div className="tag-n-date">
            <span>Shoping</span> <span>/</span> <span>{date}</span>
          </div>
          <h3>
            <a href="blog-details.html">{tittle}</a>
          </h3>
          <p>{desc}</p>
          <a href={`/blog/details/${id}`} className="continue">
            <span>
              <i className="fa-light fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogItem