import { useEffect, useState } from "react";
import cl from "./ArticleCardsItem.module.scss"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function ArticleCardsItem({ img, title, content, date, like, id }) {
  const navigate = useNavigate()

  function openPost() {
    navigate("/posts/" + id);
    updateLike(id)
  }

  const [postLike, setPostLike] = useState(like);
  
  async function updateLike(postId) {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/posts/${postId}`,
        {
          like: postLike + 1,
        }
      );
      console.log(response.data);
      setPostLike(response.data.like);
    } catch (err) {
      console.error("UPDATE POST LIKE ERROR: " + err);
    }
  }


  return (
    <div className={cl.card_item}>
      <img src={img} alt="cat-our-last-posts" />

      <div className={cl.date_content}>
        <div className={cl.date_item}>
          <img src="/images-main/6.0.1-calendar-icon.svg" alt="calendar-icon" />
          <p>{date}</p>
        </div>
        <div className={cl.date_item}>
          <img src="/images-main/6.0.2-eye-icon.svg" alt="eye-icon" />
          <p>{like}</p>
        </div>
      </div>

      <h3>{title}</h3>
      <p>{content}</p>
      <button onClick={openPost} >Читать &#8594;</button>
    </div>
  );
}

export default ArticleCardsItem;
