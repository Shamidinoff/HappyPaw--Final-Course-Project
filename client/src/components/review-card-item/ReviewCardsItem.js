import React from 'react'
import cl from './ReviewCardsItem.module.scss'

const ReviewCardsItem = () => {
    
      return (
        <div class="view">
          <div class="item1">
            <img src="images-main/p5-view-inga.png" alt="inga" />
          </div>
          <div class="item2">
            <h3>Инга</h3>
            <div class="stars">
              <img src="images-main/p5-star.svg" alt="star" />
              <img src="images-main/p5-star.svg" alt="star" />
              <img src="images-main/p5-star.svg" alt="star" />
              <img src="images-main/p5-star.svg" alt="star" />
              <img src="images-main/p5-star.svg" alt="star" />
              <p>5/5</p>
            </div>
            <p>
              Маргарита - профессионал своего дела, с ней не страшно оставить
              животных. Я уезжала на неделю в коммандировку и Маргарита
              прекрасно справилась с моим псом Матильдой и даже покормила рыбок)
            </p>
            <div class="view-date">
              <p>5 Августа, 2022</p>
            </div>
          </div>
        </div>
      );
  }
  
  export default ReviewCardsItem