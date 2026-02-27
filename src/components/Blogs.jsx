import React, { useState } from "react";
import styled from "styled-components";
import { blogposts } from "../data";

const Blogs = () => {
  const [blog, setblog] = useState(blogposts);

  return (
    <BlogsContainer>
      <section className="blogs-header">
        <h1 className="blogs-h1">Insights &amp; Resources</h1>
        <h2 className="blogs-h2">
          Stay updated with the latest AI automation trends, tips, and case studies
        </h2>
        <div className="underline"></div>
      </section>

      <section className="blogs-container">
        <div className="blogs">
          {blogposts.map((blogpost) => {
            const { id, image, title, info, url } = blogpost;
            return (
              <div className="single-blog" key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  <img src={image} alt={title} className="img" />
                </a>

                <div className="blog-info">
                  <a href={url}>{title}</a>
                  <p>{info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </BlogsContainer>
  );
};

export default Blogs;

const BlogsContainer = styled.nav`

.blogs-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 60px 20px 20px;
    background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%);
  }

  .blogs-h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #111827;
    margin-bottom: 0.75rem;
  }

  .blogs-h2 {
    font-size: 1.1rem;
    font-weight: 400;
    color: #6b7280;
    max-width: 540px;
    line-height: 1.6;
  }

.blogs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content:center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 50px;
    padding: 20px;
  }

  .blogs-container h5{
    width: 100%;
    text-align: center;
  }

  .underline{
    width: 10%;
    height: 0px;
    margin-top: 30px;
    border-bottom: 2px solid grey;
  }
  
  .blogs {
    padding: 3rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    width: 90%;
  }

  .single-blog {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    width: 100%;
    height: auto;
  }

  .single-blog .img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    display: block;
  }

  .blog-info {
    padding: 1.25rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .blog-info a {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.4;
    text-transform: uppercase;
    color: #111827;
    text-decoration: none;
  }

  .blog-info a:hover {
    color: #16a34a;
  }

  .blog-info p {
    margin-top: 0.25rem;
    line-height: 1.6;
    color: #6b7280;
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 1024px) {
    .blogs {
      grid-template-columns: repeat(2, 1fr);
      width: 95%;
    }
  }

  @media only screen and (max-width: 600px) {
    .blogs {
      grid-template-columns: 1fr;
      width: 100%;
      padding: 1.5rem 0;
    }

    .single-blog .img {
      height: 180px;
    }

    .blogs-h1 {
      font-size: 1.8rem;
    }

    .blogs-h2 {
      font-size: 1rem;
    }
  }

  

`;
