import cl from './PettsitterCardsItem.module.scss'
import { useNavigate } from 'react-router-dom'

const PettsitterCardsItem = ({ img, name, address, overstay, walk, star, reviewsNum, price, id }) => {
      const navigate = useNavigate()

      function openPetsitter(){
        navigate("/petsitters/" + id)
      }
    
      return (
        <article className={cl.result_item__card}>
          <img src={img} alt="photo" />
          <div className={cl.result_item__body}>
            <div className={cl.result_item__header}>
              <h3 className={cl.head3}>{name}</h3>
              <span>От {price} BYN </span>
              <img src="../../images-blog/filled-heart.svg" alt="like" />
            </div>
            <p>{address}</p>
            <p>{overstay} передержек, {walk} выгулов</p>
            <div className={cl.result_item__stars}>
              <div>
                <img src="../../images-blog/filled-start.svg" alt="star" />
                <img src="../../images-blog/filled-start.svg" alt="star" />
                <img src="../../images-blog/filled-start.svg" alt="star" />
                <img src="../../images-blog/filled-start.svg" alt="star" />
                <img src="../../images-blog/filled-start.svg" alt="star" />
              </div>
              <span>({reviewsNum})</span>
            </div>
            <button onClick={openPetsitter} type="button" class="primary-btn mt-auto">
              Выбрать
              <img src="../../images-blog/white-right.svg" alt="" />
            </button>
          </div>
        </article>
      );
  }
  
  export default PettsitterCardsItem