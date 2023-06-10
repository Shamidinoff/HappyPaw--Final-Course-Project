import React, { useEffect, useState } from "react";
import cl from "./ArticleCards.module.scss";
import axios from "axios";
import ArticleCardsItem from "../article-card-item/ArticleCardsItem";

const ArticleCards = () => {
  const [postIds, setPostIds] = useState([]);
  const [posts, setPosts] = useState([]);

  //get all post when js loads
  useEffect(() => {
    getAllPosts();
  }, []);

  //get every post when all postIds are ready (postIds.length!==0)
  useEffect(() => {
    if (postIds.length !== 0) {
      postIds.forEach((postId) => {
        getPost(postId);
      });
    }
  }, [postIds]);

  async function getAllPosts() {
    try {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPostIds(response.data);
    } catch (err) {
      console.error("GET ALL POSTS ERROR: " + err);
    }
  }

  async function getPost(postId) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/posts/${postId}`
      );
      console.log(response.data);
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (err) {
      console.error("GET POST ERROR: " + err);
    }
  }

  const postsItems = posts.map((post) => {
    return (
      <ArticleCardsItem
        img={post.postImage}
        title={post.title}
        content={post.content[0]}
      />
    );
  });

  return (
    <section className="section6-article">
      <div className="container">
        <h2>Наши последние статьи</h2>
        <div className="article-cards">
          {posts.length === 0 ? <p>Здесь пусто</p> : postsItems}
        </div>

        <div className="read-more-button">
          <button className="read-more-btn">Читать больше &#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default ArticleCards;
