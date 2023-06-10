import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cl from './ServiceCards.module.scss'
import ServiceCardsItem from '../service-card-item/ServiceCardsItem'

const ServiceCards = () => {
    
        
    return (
      <section className={cl.section2_services}>
        <div className={cl.container}>
          <h2>Наши услуги</h2>
          <div className={cl.service_cards}>
                {}
          </div>
        </div>
      </section>
    );
}

export default ServiceCards