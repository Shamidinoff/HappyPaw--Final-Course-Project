import React from 'react'
import cl from './ReviewCards.module.scss'

const ReviewCards = () => {
    
      return (
        <section class="section4-views">
          <div class="container">
            <div class="wrapper-all">
              <div class="views-sum">
                <h1>Отзывы (8)</h1>
              </div>
              <div class="views-wrapper">
                {reviewCardsItems}
              </div>
            </div>
          </div>
        </section>

      );
  }
  
  export default ReviewCards