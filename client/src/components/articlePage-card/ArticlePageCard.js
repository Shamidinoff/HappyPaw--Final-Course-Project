import React, { useEffect, useState } from 'react'
import cl from './ArticlePageCard.module.scss'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ArticlePageTextItem from '../articlePage-text-item/ArticlePageTextItem'
import ArticlePageTickItem from '../articlePage-tick-item/ArticlePageTickItem'

const ArticlePageCard = () => {
    const [post, setPost] = useState({})
    const params = useParams()
    console.log(params.id);

    useEffect(()=>{
        getPost()
    }, [])


    const paragrItems = post.content?.map((paragr) => {
        return <ArticlePageTextItem>{paragr}</ArticlePageTextItem>
    })

    const tickItems = post.arguments?.map((arg) => {
        return <ArticlePageTickItem>{arg}</ArticlePageTickItem>
    })

    async function getPost(){
        const response = await axios.get(`http://localhost:5000/api/posts/${params.id}`)
        setPost(response.data)
        console.log(response);
    }
    const options = {  day: 'numeric', month: 'long', year: 'numeric'}
    const dateForm = new Date(post.createdAt).toLocaleString("ru", options).split(" ");
    const date = dateForm[0] + " " + dateForm[1].charAt(0).toUpperCase() + dateForm[1].slice(1) + ", " + dateForm[2];
    if (post.title) {
      return (
        <main>
          <div className={cl.nav1_blog}>
            <div className={cl.container}>
              <div>
                <a className={cl.main} href="http://localhost:3000/home">
                  Главная
                </a>
                <img
                  src="/images-blog/left1.svg"
                  alt="right1"
                />
                <a className={cl.blog} href="http://localhost:3000/posts">
                  Блог
                </a>
                <img
                  src="/images-blog/right1.svg"
                  alt="right1"
                />
                <a className={cl.post_topic} href="">
                  {post.title}
                </a>
              </div>
            </div>
          </div>

          <div className={cl.container}>
            <div className={cl.main_cat}>
              <img
                className={cl.cat_blog1}
                src={post.postImage}
                alt="cat_blog1"
              />
              <div className={cl.date}>
                <img
                  src="/images-blog/1.1-calendar-icon.svg"
                  alt="calendar"
                />
                <p>{date}</p>
              </div>
              {paragrItems}
              <h1></h1>
              <h2></h2>
              <h3>{post.questions && post.questions[0]}</h3>
              {tickItems}

              <button>Было полезно?</button>
            </div>
          </div>
        </main>
      );
    } else {
      return <h2 style={{ textAlign: "center", margin: "30px" }}>Идет загрузка данных...</h2>;
    }
}

export default ArticlePageCard
