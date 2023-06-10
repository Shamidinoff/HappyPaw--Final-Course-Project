import React from 'react'
import cl from './ReviewMainCardsItem.module.scss'


const ReviewMainCardsItem = () => {
    
    
      return (
        <div class="card-item">
          <div class="user-picture">
            <img src="/images-main/7.1-veronika.png" alt="veronika" />
          </div>

          <div class="user-content">
            <h3>Вероника </h3>
            <p>
              Огромное спасибо! Каждый день были фото-и видеоотчеты! Микки не
              скучал, у него была прекрасная компания и блестящий уход! Мы были
              спокойны, пока находились в отъезде. Еще раз спасибо!
            </p>

            <div class="user-location">
              <div class="map-city">
                <img
                  src="/images-main/7.0.1-location-icon.svg"
                  alt="location-icon"
                />
                <p>Минск</p>
              </div>
              <div class="review-date">
                <p>Август, 2022</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default ReviewMainCardsItem