import React from 'react';
import './Blogs.css';

function Blogs() {
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Latest News</p>
        <h2 className="h2 section-title">Checkout My Recent Blogs</h2>
        <p className="section-text">
          Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate
        </p>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img 
                    src={`${process.env.PUBLIC_URL}/blog-1.jpg`} 
                    width="1181" 
                    height="843" 
                    loading="lazy"
                    alt="Jim Morisson Says when the musics over turn off the light" 
                    className="img-cover"
                  />
                </a>
              </figure>
              <a href="#" className="card-tag">Web Development</a>
              <h3 className="card-title">
                <a href="#">Jim Morisson Says when the musics over turn off the light</a>
              </h3>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img 
                    src={`${process.env.PUBLIC_URL}/blog-2.jpg`} 
                    width="1181" 
                    height="843" 
                    loading="lazy"
                    alt="Jim Morisson Says when the musics over turn off the light" 
                    className="img-cover"
                  />
                </a>
              </figure>
              <a href="#" className="card-tag">Web Development</a>
              <h3 className="card-title">
                <a href="#">Jim Morisson Says when the musics over turn off the light</a>
              </h3>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <a href="#">
                  <img 
                    src={`${process.env.PUBLIC_URL}/blog-3.jpg`} 
                    width="1181" 
                    height="843" 
                    loading="lazy"
                    alt="Jim Morisson Says when the musics over turn off the light" 
                    className="img-cover"
                  />
                </a>
              </figure>
              <a href="#" className="card-tag">Web Development</a>
              <h3 className="card-title">
                <a href="#">Jim Morisson Says when the musics over turn off the light</a>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
