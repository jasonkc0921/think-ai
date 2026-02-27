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
    padding: 5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.1rem;
    width: 80%;
  }
  
  
  .single-blog {
    // margin-top: 30px;
    // margin-left: 20px;
    display: flex;
    flex-direction: column;
    // align-content: center;
    // align-items: center;
    background: var(--white);
    position: relative;
    width: 80%;
    height: 600px;
    padding: 20px;
  }
  
  // .single-blog:hover {
  //   box-shadow: var(--shadow-3);
  // }

  .single-blog .img {
    height: 220px;
    width: 100%;
    border: none;
    border-top-right-radius: var(--borderRadius);
    border-top-left-radius: var(--borderRadius);
  }
  
  .blog-info {
    // padding: 1rem 1rem;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  
  .blog-info a {
    text-align: start;
    margin-top: 0.5rem;
    margin:-bottom: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
  }
  .blog-info p {
    margin-top: 0.5rem;
    line-height: 1.5;
    color: var(--grey-500);
  }
  

  @media only screen and (max-width: 760px) {

    .blogs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content:center;
        align-items: center;
        width: 100%;
    }

    .img {
        // width: 100%;
        object-fit: cover;
        // width: 30%
    }

  }

  

`;
