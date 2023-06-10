import React from 'react'
import cl from './PettsitterCardsItem.module.scss'
// import { useNavigate } from 'react-router-dom'

const PettsitterCardsItem = ({ img, title, content }) => {
      // const navigate = useNavigate()

      // function openPost(){
      //   navigate("/posts/" + id)
      // }
    
      return (
        <article class="result-item__card">
          <img src="../../images-blog/people-1.jpg" alt="" />
          <div class="result-item__body">
            <div class="result-item__header">
              <h3 class="head3">Маргарита</h3>
              <span>От 25 BYN </span>
              <img src="../../images-blog/filled-heart.svg" alt="" />
            </div>
            <p>Минск, Первомайский р-н</p>
            <p>12 передержек, 6 выгулов</p>
            <div class="result-item__stars">
              <div>
                <img src="../../images-blog/filled-start.svg" alt="" />
                <img src="../../images-blog/filled-start.svg" alt="" />
                <img src="../../images-blog/filled-start.svg" alt="" />
                <img src="../../images-blog/filled-start.svg" alt="" />
                <img src="../../images-blog/filled-start.svg" alt="" />
              </div>
              <span>(8)</span>
            </div>
            <button type="button" class="primary-btn mt-auto">
              Выбрать
              <img src="../../images-blog/white-right.svg" alt="" />
            </button>
          </div>
        </article>
      );
  }
  
  export default PettsitterCardsItem