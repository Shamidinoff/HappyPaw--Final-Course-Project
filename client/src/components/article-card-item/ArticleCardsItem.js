import React from 'react'
import cl from './ArticleCardsItem.module.scss'
// import { useNavigate } from 'react-router-dom'

const ArticleCardsItem = ({ img, title, content }) => {
      // const navigate = useNavigate()

      // function openPost(){
      //   navigate("/posts/" + id)
      // }
    
      return (
        <div class="card-item">
          <img
            src="/images-main/6.1-cat-our-last-posts.png"
            alt="cat-our-last-posts"
          />

          <div class="date-content">
            <div class="date-item">
              <img
                src="/images-main/6.0.1-calendar-icon.svg"
                alt="calendar-icon"
              />
              <p>25 Августа, 2022</p>
            </div>
            <div class="date-item">
              <img src="/images-main/6.0.2-eye-icon.svg" alt="eye-icon" />
              <p>181</p>
            </div>
          </div>

          <h3>Зачем кошке стрижка?</h3>
          <p>
            Кошачьи стрижки бывают двух видов: гигиенические и модельные.
            Выполняют их обученные...
          </p>
          <button>Читать &#8594;</button>
        </div>
      );
  }
  
  export default ArticleCardsItem