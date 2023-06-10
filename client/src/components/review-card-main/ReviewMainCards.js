import React, { useEffect, useState } from 'react'
import cl from './ArticleCards.module.scss'
import ReviewMainCards from '../review-card-item-main/ReviewMainCards'

const ReviewMainCards = () => {
    

    return (
      <section class="section7-reviews">
          <div class="container">
            <h2>Отзывы</h2>
            <div class="reviews-cards">
              {}
            </div>
          </div>
      </section>
    );
}

export default ReviewMainCards