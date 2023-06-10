import React, { useEffect, useState } from 'react'
import cl from './ArticleCards.module.scss'
import axios from 'axios'
import ArticleCardsItem from '../article-card-item/ArticleCardsItem'

const ArticleCards = () => {
  const [postIds, setPostIds] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
      getPostsIds();
  }, [])

  useEffect(() => {
      console.log(postIds);
  }, [postIds])


  useEffect(() => {
      getPost("");
  }, []) 

  useEffect(() => {
      console.log(posts);
  }, [posts])

  async function getPostsIds(){
      const response = await axios.get("http://localhost:5000/api/posts");
      console.log(response.data);
      setPostIds(response.data)
  }

  async function getPost(postId){
      const response = await axios.get("http://localhost:5000/api/posts/" + postId);
      return response.data
  }

  postIds.forEach(async (postId) => {
      try {
          const post = await getPost(postId)
          setPosts([ ...posts, post ]) 
      } catch (err){
          console.error("GetPost error: " + err);
      }
  })
  

  const postItems = posts.map((post) => {
      return <ArticleCardsItem img={post.postImage} 
                      title={post.title} 
                      content={post.content} 
                      // id={post._id}
              />
  })

    
        
    return (
      <section class="section6-article">
          <div class="container">
            <h2>Наши последние статьи</h2>
            <div class="article-cards">
              {postItems}
            </div>

            <div class="read-more-button">
              <button class="read-more-btn">Читать больше &#8594;</button>
            </div>
          </div>
        </section>
    );
}

export default ArticleCards