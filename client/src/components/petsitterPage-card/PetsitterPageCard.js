import React, { useEffect, useState } from 'react'
import cl from './PetsitterPageCard.module.scss'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ReviewCards from "../review-card/ReviewCards"
import PetsitPagePetAcceptItem from '../petsitterPage-petAccept-item/PetsitPagePetAcceptItem'
import PetsitPageLivConsItem from '../petsitterPage-livCons-item/PetsitPageLivConsItem'
import PetsitPagePetImgItem from '../petsitterPage-petImgs-item/PetsitPagePetImgItem'

const PetsitterPageCard = () => {
    const [petsitter, setPetsitter] = useState({})
    const params = useParams()
    console.log(params);

    useEffect(()=>{
        getPetsitter()
    }, [])

    async function getPetsitter(){
        const response = await axios.get(`http://localhost:5000/api/petsitters/${params.id}`)
        setPetsitter(response.data)
        console.log(response);
    }

    const petAcceptItems = petsitter.petAccepts?.map((petAccept) => {
      return <PetsitPagePetAcceptItem>{petAccept.petType + " " + petAccept.petWeight}</PetsitPagePetAcceptItem>
    })

    const livConditionItems = petsitter.livConditions?.map((livCondition) => {
      return <PetsitPageLivConsItem>{livCondition}</PetsitPageLivConsItem>
    })

    const petImgs = petsitter.petImgs?.map((petImg) => {
      return <PetsitPagePetImgItem petImg={petImg} />
    })

    if(petsitter && petsitter.avatars){
      return (
          <main>
            <section className={cl.section1_link}>
              <div className={cl.container}>
                <div className={cl.section1_link_content}>
                  <div className={cl.link_item}>
                    <a className={cl.link} href="http://localhost:3000/home">Главная</a>
                    <p>&#8250;</p>
                    <a className={cl.link} href="http://localhost:3000/petsitters">Анкеты пэтситтеров</a>
                    <p>&#8250;</p>
                    <a className={cl.service_link} href="#">Ситтер {petsitter.name}</a>
                  </div>
                </div>
              </div>
            </section>

            <section className={cl.section2_personal}>
              <div className={cl.container}>
                <div className={cl.back_btn}>
                  <p>&#8249;</p>
                  <p>Назад</p>
                </div>

                <div className={cl.online_info}>
                  <p>Была в сети 2 часа назад</p>
                  <p>Время ответа: {petsitter.replyTime} час</p>
                </div>

                <div className={cl.personal_info}>
                  <div className={cl.card}>
                    <img src={petsitter.avatars[0]} alt={petsitter.name} />
                    <div className={cl.dot}>
                      <img src="images-main/p5-dot1.svg" alt="dot1" />
                      <img src="images-main/p5-dot2.svg" alt="dot2" />
                      <img src="images-main/p5-dot2.svg" alt="dot2" />
                      <img src="images-main/p5-dot2.svg" alt="dot2" />
                    </div>
                  </div>

                  <div className={cl.card_descr}>
                    <div className={cl.margarita}>
                      <h2>{petsitter.name}</h2>
                      <img src="images-main/p5-like.svg" alt="like" />
                    </div>
                    <p>{petsitter.address}</p>
                    <p>Опыт работы: {petsitter.experience} года</p>
                    <div className={cl.stars}>
                      <img src="../../../public/images-main/p5-star.svg" alt="star" />
                      <img src="../../../public/images-main/p5-star.svg" alt="star" />
                      <img src="../../../public/images-main/p5-star.svg" alt="star" />
                      <img src="../../../public/images-main/p5-star.svg" alt="star" />
                      <img src="../../../public/images-main/p5-star.svg" alt="star" />
                      <p className={cl.stars_review_count}>({petsitter.rating.reviewCount})</p>
                    </div>
                    <button>Связаться с ситтером &#8594</button>
                    <div className={cl.verification}>
                      <div className={cl.checkmark}>
                        <img src="../../../public/images-main/p5-checkmark.svg" alt="checkmark" />
                      </div>
                      <div className={cl.verif_descr}>
                        <p>Успешно прошла подготовку</p> 
                        <p>Прошла верификацию</p>
                      </div>
                    </div>
                  </div>

                  <div className={cl.card_reg}>
                    <div className={cl.reg_item}>
                      <select name="sitter">
                        <option value="sitterdog">Няня для собаки</option>
                      </select>
                    </div>

                    <div className={cl.reg_item}>
                      <select name="pet">
                        <option value="pet">1 питомец</option>
                      </select>
                    </div>

                    <div className={cl.reg_item_data}>
                      <form action="#">
                        <input type="date" />
                      </form>

                      <form action="#">
                        <input type="date" />
                      </form>
                    </div>

                    <div className={cl.reg_price}>
                      <p>Всего:</p>
                      <h3>{petsitter.price.petSitting} BYN</h3>
                    </div>

                    <button className={cl.booking}>Забронировать</button>
                  </div>
                </div>
              </div>
            </section>

            <section className={cl.section3_description}>
              <div className={cl.container}>
                <div className={cl.desc_wrapper}>
                  <div className={cl.item}>
                    <h3>Цены</h3>
                    <p>
                      Няня для животных <span className={cl.span1}>{petsitter.price.petSitting} BYN/сутки</span>
                    </p>
                    <p>
                      Дневная няня <span className={cl.span2}>{petsitter.price.daytimePet} BYN/час</span>
                    </p>
                    <p>
                      Выгул собак <span className={cl.span3}>{petsitter.price.dogWalk} BYN/час</span>
                    </p>
                  </div>

                  <div className={cl.item}>
                    <h3>Кого принимаю</h3>
                    {petAcceptItems}
                  </div>

                  <div className={cl.item}>
                    <h3>Условия проживания</h3>
                    {livConditionItems}
                  </div>
                </div>
                <div className={cl.desc_wrapper2}>
                  <div className={cl.item2}>
                    <h2>О себе</h2>
                    <p>
                      {petsitter.desc}
                    </p>
                  </div>

                  <div className={cl.item2_img}>
                    <h2>Фото моих питомцев</h2>
                    {petImgs}
                  </div>
                </div>
              </div>
            </section>

            <section className={cl.section4_views}>
              <div className={cl.container}>
                <div className={cl.wrapper_all}>
                  <div className={cl.views_sum}>
                    <h1>Отзывы ({petsitter.rating.reviewCount})</h1>
                  </div>
                  <ReviewCards id={petsitter._id}/>
                </div>
              </div>
            </section>

            <section className={cl.section8_underline}>
              <div className={cl.container}>
                <span className={cl.hr_line}></span>
              </div>
            </section>
          </main>

      );
    }
    else{
      return <h2 style={{ textAlign: "center" }}>Идет загрузка данных...</h2>
    }

}

export default PetsitterPageCard
