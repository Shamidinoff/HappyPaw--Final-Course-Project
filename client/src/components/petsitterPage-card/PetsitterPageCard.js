import React, { useEffect, useState } from 'react'
import cl from './PetsitterPageCard.module.scss'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

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

    if(petsitter && petsitter.avatars){
      return (
          <main>
            <section class="section1-link">
              <div class="container">
                <div class="section1-link-content">
                  <div class="link-item">
                    <p>Главная</p>
                    <p>&#8250;</p>
                    <p>Анкеты пэтситтеров</p>
                    <p>&#8250;</p>
                    <p class="service-link">Ситтер {petsitter.name}</p>
                  </div>
                </div>
              </div>
            </section>

            <section class="section2-personal">
              <div class="container">
                <div class="back-btn">
                  <p>&#8249;</p>
                  <p>Назад</p>
                </div>

                <div class="online-info">
                  <p>Была в сети 2 часа назад</p>
                  <p>Время ответа: {petsitter.replyTime} час</p>
                </div>

                <div class="personal-info">
                  <div class="card">
                    <img src={petsitter.avatars[0]} alt={petsitter.name} />
                    <div class="dot">
                      <img src="images-main/p5-dot1.svg" alt="dot1" />
                      <img src="images-main/p5-dot2.svg" alt="dot2" />
                      <img src="images-main/p5-dot2.svg" alt="dot2" />
                      <img src="images-main/p5-dot2.svg" alt="dot2" />
                    </div>
                  </div>

                  <div class="card-descr">
                    <div class="margarita">
                      <h2>{petsitter.name}</h2>
                      <img src="images-main/p5-like.svg" alt="like" />
                    </div>
                    <p>{petsitter.address}</p>
                    <p>Опыт работы: {petsitter.experience} года</p>
                    <div class="stars">
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <p>(8)</p>
                    </div>
                    <button>Связаться с ситтером &#8594</button>
                    <div class="verification">
                      <div class="checkmark">
                        <img src="images-main/p5-checkmark.svg" alt="checkmark" />
                      </div>
                      <div class="verif-descr">
                        <p>Успешно прошла подготовку</p> {/**/}
                        <p>Прошла верификацию</p>
                      </div>
                    </div>
                  </div>

                  <div class="card-reg">
                    <div class="reg-item">
                      <select name="sitter">
                        <option value="sitterdog">Няня для собаки</option>
                      </select>
                    </div>

                    <div class="reg-item">
                      <select name="pet">
                        <option value="pet">1 питомец</option>
                      </select>
                    </div>

                    <div class="reg-item-data">
                      <form action="#">
                        <input type="date" />
                      </form>

                      <form action="#">
                        <input type="date" />
                      </form>
                    </div>

                    <div class="reg-price">
                      <p>Всего:</p>
                      <h3>250 BYN</h3>
                    </div>

                    <button class="booking">Забронировать</button>
                  </div>
                </div>
              </div>
            </section>

            <section class="section3-description">
              <div class="container">
                <div class="desc-wrapper">
                  <div class="item">
                    <h3>Цены</h3>
                    <p>
                      Няня для животных <span class="span1">{petsitter.price.petSitting} BYN/сутки</span>
                    </p>
                    <p>
                      Дневная няня <span class="span2">{petsitter.price.daytimePet} BYN/час</span>
                    </p>
                    <p>
                      Выгул собак <span class="span3">{petsitter.price.dogWalk} BYN/час</span>
                    </p>
                  </div>

                  <div class="item">
                    <h3>Кого принимаю</h3>
                    <p>Коты</p>{/**/ }
                    <p>Собаки 0-40кг</p>
                  </div>

                  <div class="item">
                    <h3>Условия проживания</h3>
                    <p>2-х комнатная квартира</p>{/*array*/}
                    <p>Большой балкон</p>
                    <p>Без детей</p>
                    <p>Кошка и собака</p>
                  </div>
                </div>
                <div class="desc-wrapper2">
                  <div class="item2">
                    <h2>О себе</h2>
                    <p>
                      {petsitter.desc}
                    </p>
                  </div>

                  <div class="item2-img">
                    <h2>Фото моих питомцев</h2>
                    <img src={petsitter.petImgs[0]} alt="dog" />{/*arr*/}
                    <img src={petsitter.petImgs[1]} alt="cat" />
                  </div>
                </div>
              </div>
            </section>

            <section class="section4-views">
              <div class="container">
                <div class="wrapper-all">
                  <div class="views-sum">
                    <h1>Отзывы (8)</h1>
                  </div>
                  <div class="views-wrapper">
                    <div class="view">
                      <div class="item1">
                        <img src="images-main/p5-view-inga.png" alt="inga" />
                      </div>
                      <div class="item2">
                        <h3>Инга</h3>
                        <div class="stars">
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <p>5/5</p>
                        </div>
                        <p>
                          Маргарита - профессионал своего дела, с ней не страшно
                          оставить животных. Я уезжала на неделю в коммандировку и
                          Маргарита прекрасно справилась с моим псом Матильдой и
                          даже покормила рыбок
                        </p>
                        <div class="view-date">
                          <p>5 Августа, 2022</p>
                        </div>
                      </div>
                    </div>

                    <div class="view">
                      <div class="item1">
                        <img src="images-main/p5-view-marina.png" alt="marina" />
                      </div>
                      <div class="item2">
                        <h3>Марина</h3>
                        <div class="stars">
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <p>5/5</p>
                        </div>
                        <p>
                          Несколько раз пользовались услугами Маргариты и всегда
                          оставались очень довольны. У моей семьи два лабрадора и к
                          выгулу мы всегда относимся серьезно. Маргарита справилась
                          со всеми нюансами на отлично!
                        </p>
                        <div class="view-date">
                          <p>21 Июня, 2022</p>
                        </div>
                      </div>
                    </div>

                    <div class="view">
                      <div class="item1">
                        <img src="images-main/p5-view-ludmila.png" alt="ludmila" />
                      </div>
                      <div class="item2">
                        <h3>Людмила</h3>
                        <div class="stars">
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <p>5/5</p>
                        </div>
                        <p>
                          Я обожаю Маргариту и ее питомцев! Столько раз она выручала
                          меня и мою кошку-Анфису! Всегда очень пунктуальна и
                          заботлива, я считаю - она лучшая няня для животных! ))
                        </p>
                        <div class="view-date">
                          <p>31 Мая, 2022</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="section8-underline">
              <div class="container">
                <span class="hr-line"></span>
              </div>
            </section>
          </main>

      );
    }
    else{
      return <h2>Loading</h2>
    }

}

export default PetsitterPageCard
