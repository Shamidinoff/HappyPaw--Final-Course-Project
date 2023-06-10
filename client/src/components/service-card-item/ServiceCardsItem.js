import React from 'react'
import cl from './ServiceCardsItem.module.scss'


const ServiceCardsItem = () => {
    
    
      return (
        <div className={cl.card_item}>
          <img src={} alt="post-img" />
          <h3>{}</h3>
          <p>
            {}
          </p>
          <button >Подробнее &#8594;</button>
        </div>
      );
  }
  
  export default ServiceCardsItem