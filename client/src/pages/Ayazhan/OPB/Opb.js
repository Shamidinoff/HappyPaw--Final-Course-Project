import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import "./OPB.css";
import {useNavigate} from "react-router-dom";

function Opb() {
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <main class="container">
        <div class="nav2_opm">
          <img src="../../images-blog/left2.svg" alt="left2" />
          <a onClick={() => navigate("/owner")} href="#">Назад</a>
        </div>

        <div class="main_opb">
          <ul class="tabs">
            <li class="tabs__item" onClick={() => navigate("/opb")} style={{borderBottom: '1px solid #339CB3'}}>Предстоящие заказы (1)</li>
            <li class="tabs__item" onClick={() => navigate("/opbc")}>Отмененные заказы (0)</li>
            <li class="tabs__item" onClick={() => navigate("/opbpo")}>Прошедшие заказы (1)</li>
          </ul>

          <div class="opb_content">
            <div class="opb_content__left">
              <div class="avatar-container">
                <img src="../../images-blog/people-2.png" alt="" />
              </div>

              <button class="primary-btn opb_content__button">
                Написать пэтситтеру
                <img src="../../images-blog/white-right.svg" alt="" />
              </button>
              <button class="secondary-btn opb_content__button">
                Отменить бронирование
              </button>
            </div>
            <div class="opb_content__right">
              <button type="button">
                <img src="../../images-blog/edit.svg" alt="" />
                Редактировать
              </button>

              <div class="info">
                <h3 class="head2">Мои бронирования (1)</h3>
                <p class="text2">
                  Здравствуйте, Анна! Вы оформили бронирование
                </p>
                <div class="info__item">
                  <span class="head3_blue">Няня для собак</span>
                  <span class="text2">Маргарита</span>
                </div>
                <div class="info__item">
                  <span class="head3_blue">Город</span>
                  <span class="text2">Минск</span>
                </div>
                <div class="info__item">
                  <span class="head3_blue">Даты</span>
                  <span class="text2">03.09.22-13.09.22</span>
                </div>
                <div class="info__item">
                  <span class="head3_blue">Номер телефона няни</span>
                  <span class="text2">+375 (29) 123-45-67</span>
                  <button class="info__item-button">
                    Позвонить <img src="../../images-blog/right2.svg" alt="" />
                  </button>
                </div>
              </div>

              <p class="opb_content__right-date">31 Августа, 2022. 10:00</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Opb;
