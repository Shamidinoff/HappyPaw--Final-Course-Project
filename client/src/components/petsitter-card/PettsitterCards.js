import React, { useEffect, useState } from 'react'
import cl from './PettsitterCards.module.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import PettsitterCardsItem from '../petsitter-card-item/PettsitterCardsItem';

const PettsitterCards = () => {
  const [petsitIds, setPetsitIds] = useState([]);
  const [petsitters, setPetsitters] = useState([]);

  useEffect(() => {
    getAllPetsits();
  }, []);

  useEffect(() => {
    if (petsitIds.length !== 0) {
      for (let i=0; i < 10; i++){
        getPetsitter(petsitIds[i]);
      }
    }
  }, [petsitIds]);

  async function getAllPetsits() {
    try {
      const response = await axios.get("http://localhost:5000/api/petsitters");
      setPetsitIds(response.data);
    } catch (err) {
      console.error("GET ALL POSTS ERROR: " + err);
    }
  }

  async function getPetsitter(petsitId) {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/petsitters/${petsitId}`
      );
      console.log(response.data);
      setPetsitters((prevPetsitters) => [...prevPetsitters, response.data]);
    } catch (err) {
      console.error("GET POST ERROR: " + err);
    }
  }
  
  const petsitterItems = petsitters.map((petsitter) => {
      return (
        <PettsitterCardsItem
          img={petsitter.avatars[0]}
          name={petsitter.name}
          address={petsitter.address}
          overstay={petsitter.overstaying}
          walk={petsitter.walk}
          star={petsitter.rating.star}
          reviewsNum={petsitter.rating.reviewCount}
          price={petsitter.price.petSitting}
          id={petsitter._id}
        />
      );
  });

      return (
        <div className={cl.content_container}>
          <div className={cl.result_items}>
            <div className={cl.result_item}>
              {petsitters.length === 0 ? <p style={{ textAlign:"center", margin:"20px" }}>Данные загружаются...</p> : petsitterItems}
            </div>

            <div className={cl.result_item+" "+cl.ymap_container}>
              <img src="../../images-blog/mapmap2for.png" alt="" />
            </div>
          </div>
        </div>
      );
  }
  
  export default PettsitterCards