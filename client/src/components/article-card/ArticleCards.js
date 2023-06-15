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
      for (let i=0; i < 10; i++){
        getPost(postIds[i]);
      }
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

  const options = {  day: 'numeric', month: 'long', year: 'numeric'}
  const postsItems = posts.map((post) => {
      const dateForm = new Date(post.createdAt).toLocaleString("ru", options).split(" ");
      const date = dateForm[0] + " " + dateForm[1].charAt(0).toUpperCase() + dateForm[1].slice(1) + ", " + dateForm[2];
      
      return (
        <ArticleCardsItem
          img={post.postImage}
          title={post.title}
          content={post.content[0].substring(0, 101) + "..."}
          date={date}
          like={post.like}
          id={post._id}
        />
      );
  });

  return (
    <section className={cl.section6_article}>
      <div className={cl.container}>
        <h2>Наши последние статьи</h2>
        <div className={cl.article_cards}>
          {posts.length === 0 ? <p>Данные загружаются...</p> : postsItems}
        </div>

        <div className={cl.read_more_button}>
          <button className={cl.read_more_btn}>Читать больше &#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default ArticleCards;
