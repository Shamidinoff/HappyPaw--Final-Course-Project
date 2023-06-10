import React, { useEffect, useState } from 'react'
import cl from './QuestionCards.module.scss'
import QuestionCardsItem from '../question-card-item/QuestionCardsItem'

const QuestionCards = () => {
    

    
        
    return (
      <section class="section5-question">
        <div class="container">
          <h2>Часто задаваемые вопросы</h2>

          <div class="question-cards">
            <div class="question-item">
              <div class="question-paragraph">
                {}
              </div>
            </div>

            <div class="question-item-img">
              <img
                src="/images-main/5.1-dog-with-glasses.png"
                alt="hand-cat-girl"
              />

              <div class="contact-us">
                <p>Не нашли интересующий вас вопрос?</p>
                <button class="contact-btn">Свяжитесь с нами!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default QuestionCards