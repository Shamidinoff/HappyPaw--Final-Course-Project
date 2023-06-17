import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./service.css";
import {Link, useNavigate} from "react-router-dom";

function Service() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <main>
        <section class="section1-link">
          <div class="container">
            <div class="section1-link-content">
              <div class="link-item">
                <p onClick={() => navigate("/home")}>Главная</p>
                <p>&#8250;</p>
                <p class="service-link" onClick={() => navigate("/services")}>Услуги</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section2-services">
          <div class="container">
            <h2>Что входит в наши услуги?</h2>
            <div class="service-cards">
              <div class="card-item">
                <h3>Няня для собак</h3>

                <div class="wrapper">
                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Знакомство</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>
                      Привозите питомца к ситтеру или ситтер приезжает к вам
                    </p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Прогулки 2 раза в день, по привычному расписанию</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Мытье лапок</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Кормление по расписанию</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Игры</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Уход и забота</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Фото и видеоотчет</p>
                  </div>
                </div>

                <button onClick={() => navigate("/petsitters")}>Найти няню для собак &#8594;</button>
              </div>

              <div class="card-item">
                <h3>Няня для кота</h3>

                <div class="wrapper">
                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Знакомство</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>
                      Привозите питомца к ситтеру или ситтер приезжает к вам
                    </p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Уборка лотка</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Кормление по расписанию</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Кормление по расписанию</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Игры и веселое времяпрепровождение</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Уход и забота</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Фото и видеоотчет</p>
                  </div>
                </div>

                <button onClick={() => navigate("/petsitters")}>Найти няню для собак &#8594;</button>
              </div>

              <div class="card-item">
                <h3>Выгульщик собак</h3>

                <div class="wrapper">
                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Знакомство</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Выгульщик приезжает к питомцу сам</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Тренировки (по договоренности)</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>60 минут прогулки на свежем воздухе</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Игры и веселое времяпрепровождение</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Мытье лапок после прогулки</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Кормление</p>
                  </div>

                  <div class="card-item-content">
                    <img
                      src="images-service/p2-section2-icon.svg"
                      alt="section2-icon"
                    />
                    <p>Фото и видеоотчет</p>
                  </div>
                </div>

                <button onClick={() => navigate("/petsitters")}>Найти няню для собак &#8594;</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section3-petsitter">
          <div class="container">
            <div class="petsitter-content">
              <div class="wrapper">
                <div class="sitter-card">
                  <p>01</p>
                </div>

                <div class="sitter-card-line">
                  <p>&#8212;</p>
                </div>

                <div class="sitter-card-text">
                  <h2>Найдите ситтера</h2>
                  <p>
                    Подберите подходящего вам и вашему питомцу няню и/или
                    выгульщика собак
                  </p>
                </div>
              </div>

              <div class="wrapper">
                <div class="sitter-card">
                  <p>02</p>
                </div>

                <div class="sitter-card-line">
                  <p>&#8212;</p>
                </div>

                <div class="sitter-card-text">
                  <h2>Забронируйте ситтера</h2>
                  <p>
                    Забронируйте подходящего ситтера и уточните все нюансы в
                    личной переписке
                  </p>
                </div>
              </div>

              <div class="wrapper">
                <div class="sitter-card">
                  <p>03</p>
                </div>

                <div class="sitter-card-line">
                  <p>&#8212;</p>
                </div>

                <div class="sitter-card-text">
                  <h2>Оплатите услуги</h2>
                  <p>
                    Выберите подходящий для вас способ оплаты: онлайн на сайте
                    или наличными ситтеру
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section4-become">
          <div class="container">
            <h1>Хотите стать пэтситтером?</h1>

            <div class="become-wrapper">
              <div class="become-wrapper-descr">
                <div class="wrapper-content">
                  <div class="become-card">
                    <div class="card-item">
                      <img
                        src="images-service/p2-section4-checkbox.svg"
                        alt="checkbox"
                      />
                      <p>
                        Вы сами регулируете свою занятость - если вы не можете
                        работать в каие-то дни, просто отметьте это в календаре
                      </p>
                    </div>

                    <div class="card-item">
                      <img
                        src="images-service/p2-section4-checkbox.svg"
                        alt="checkbox"
                      />
                      <p>
                        Наша команда опытных кинологов и зоопсихологов на связи
                        с вами и поможет в любой ситуации
                      </p>
                    </div>

                    <div class="card-item">
                      <img
                        src="images-service/p2-section4-checkbox.svg"
                        alt="checkbox"
                      />
                      <p>
                        Каждая передержка регулируется онлайн-договором. В
                        экстренных случаях, мы помогаем ситтерам и хозяевам
                        решить проблему
                      </p>
                    </div>
                  </div>

                  <div class="become-card">
                    <div class="card-item">
                      <img
                        src="images-service/p2-section4-checkbox.svg"
                        alt="checkbox"
                      />
                      <p>
                        Вы сами устанавливаете свою ставку. Вы также можете
                        повысить стоимость за передержку или выгул, если питомец
                        требует особого ухода
                      </p>
                    </div>

                    <div class="card-item">
                      <img
                        src="images-service/p2-section4-checkbox.svg"
                        alt="checkbox"
                      />
                      <p>
                        Все необходимые вещи для питомца и корм предоставляет
                        хозяин
                      </p>
                    </div>

                    <div class="card-item">
                      <img
                        src="images-service/p2-section4-checkbox.svg"
                        alt="checkbox"
                      />
                      <p>
                        Вы сами выбираете животных, за которыми сможете
                        ухаживать или выгуливать
                      </p>
                    </div>
                  </div>
                </div>

                <button>Стать пэтситтером &#8594;</button>
              </div>

              <div class="become-wrapper-image">
                <img
                  src="images-service/p2-section4-girl.png"
                  alt="girl with dog"
                />
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
      <Footer />
    </div>
  );
}

export default Service;
