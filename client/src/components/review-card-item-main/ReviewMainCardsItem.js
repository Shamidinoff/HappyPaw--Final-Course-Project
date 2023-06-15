import React from 'react'
import cl from './ReviewMainCardsItem.module.scss'


const ReviewMainCardsItem = ({ userName, createdAt, comment, avatar}) => {
    
      return (
        <div className={cl.card_item}>
          <div className={cl.user_picture}>
            <img src={avatar} alt="avatar" />
          </div>

          <div className={cl.user_content}>
            <h3>{userName}</h3>
            <p>
              {comment}
            </p>

            <div className={cl.user_location}>
              <div className={cl.map_city}>
                <img
                  src="/images-main/7.0.1-location-icon.svg"
                  alt="location-icon"
                />
                <p>Минск</p>
              </div>
              <div className={cl.review_date}>
                <p>{createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default ReviewMainCardsItem