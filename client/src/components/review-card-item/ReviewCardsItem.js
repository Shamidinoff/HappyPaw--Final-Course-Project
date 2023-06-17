import React from 'react'
import cl from './ReviewCardsItem.module.scss'

const ReviewCardsItem = ({ userName, createdAt, star, comment, avatar}) => {

      return (
        <div className={cl.view}>
          <div className={cl.item1}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={cl.item2}>
            <h3>{userName}</h3>
            <div className={cl.stars}>
              <img src="/images-main/p5-star.svg" alt="star" />
              <img src="/images-main/p5-star.svg" alt="star" />
              <img src="/images-main/p5-star.svg" alt="star" />
              <img src="/images-main/p5-star.svg" alt="star" />
              <img src="/images-main/p5-star.svg" alt="star" />
              <p>{star}/5</p>
            </div>
            <p>
              {comment}
            </p>
            <div className={cl.view_date}>
              <p>{createdAt}</p>
            </div>
          </div>
        </div>
      );
  }

  export default ReviewCardsItem
