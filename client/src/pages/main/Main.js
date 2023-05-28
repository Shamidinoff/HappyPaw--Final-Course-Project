import Header from "../../components/header/Header";
import "./main.css";

function Main() {
  return (
    <div>
      <Header />
      <main>
        <section class="section1-page">
          <div class="container">
            <div class="s1-description">
              <div class="descr-text">
                <p>Пока вас нет рядом, мы позаботимся о вашем питомце</p>
              </div>
            </div>
            <div class="s1-sitter-bg">
              <div class="sitter-content">
                <h1>Давайте подберем вам идеального ситтера!</h1>

                <div class="sitter-data">
                  <div class="sitter-data-item">
                    <h2>Город</h2>
                    <div class="form-item">
                      <select name="city">
                        <option value="default" hidden>
                          Выберите город
                        </option>
                        <option value="Astana">Astana</option>
                        <option value="Almaty">Almaty</option>
                        <option value="Shymkent">Shymkent</option>
                        <option value="Taraz">Taraz</option>
                        <option value="Other">...</option>
                      </select>
                    </div>
                  </div>

                  <div class="sitter-data-item">
                    <h2>Услуга</h2>
                    <div class="form-item">
                      <select name="city">
                        <option value="default" hidden>
                          Выберите услугу
                        </option>
                        <option value="service1">Услуга 1</option>
                        <option value="service2">Услуга 2</option>
                        <option value="service3">Услуга 3</option>
                        <option value="service4">Услуга 4</option>
                        <option value="Other">...</option>
                      </select>
                    </div>
                  </div>

                  <div class="sitter-data-item-date">
                    <h2>Даты</h2>
                    <div class="form-item">
                      <form action="#">
                        <label>Выберите даты</label>
                        <button class="calendar-btn">
                          <img
                            src="images-main/1.1-calendar-icon.svg"
                            alt="calendar-icon"
                          />
                        </button>
                      </form>
                    </div>
                  </div>

                  <div class="sitter-data-search">
                    <h2>Search</h2>
                    <div class="form-item">
                      <button class="search-btn">Поиск &#8594;</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section2-services">
          <div class="container">
            <h2>Наши услуги</h2>
            <div class="service-cards">
              <div class="card-item">
                <img src="../images-main/2.1-cat.png" alt="cat" />
                <h3>Няня для животных</h3>
                <p>
                  Нужно срочно уехать и не с кем оставить домашнего питомца?
                  Няня для животных (ситтера) - это временное содержание вашего
                  питомца другими людьми...
                </p>
                <button>Подробнее &#8594;</button>
              </div>

              <div class="card-item">
                <img src="../images-main/2.2-dog.png" alt="cat" />
                <h3>Выгул собак</h3>
                <p>
                  Если вам пришлось задержаться на работе, уехать на какое-то
                  мероприятие или отлучиться по делам-не волнуйтесь, мы
                  с радостью выгуляем вашу собаку!
                </p>
                <button>Подробнее &#8594;</button>
              </div>

              <div class="card-item">
                <img src="../images-main/2.3-dog-girl.png" alt="cat" />
                <h3>Стать пэтситтером</h3>
                <p>
                  Если вы хотите попробовать себя в роли ситтера или выгульщика
                  собак - воспользуйтесь нашей платформой для регистрации
                  в качестве пэтситтера
                </p>
                <button>Подробнее &#8594;</button>
              </div>
            </div>
          </div>
        </section>

        <section class="section3-why">
          <div class="container">
            <h2>Почему мы?</h2>
            <div class="why-cards">
              <div class="why-item">
                <div class="why-item-list">
                  <img src="../images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Все наши пэтситтеры прошли специальное обучение и
                    верификацию личности
                  </p>
                </div>

                <div class="why-item-list">
                  <img src="../images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Удобная и понятная платформа и анкеты по подбору ситтеров
                  </p>
                </div>

                <div class="why-item-list">
                  <img src="../images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>Все отзывы наших пользователей прошли проверку </p>
                </div>
                <button>Найти пэтситтера &#8594;</button>
              </div>

              <div class="why-item">
                <div class="why-item-list">
                  <img src="../images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Возможность личной встречи с ситтером перед его встречей с
                    питомцем
                  </p>
                </div>

                <div class="why-item-list">
                  <img src="../images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>GPS карты прогулок и видео- фотоотчет от пэтситтера</p>
                </div>

                <div class="why-item-list">
                  <img src="../images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Поддержка менеджеров платформы и связь с пэтситтером 24/7
                  </p>
                </div>
                <button>Найти пэтситтера &#8594;</button>
              </div>

              <div class="why-item-img">
                <div class="why-item-card">
                  <img
                    src="../images-main/3.1-cat-why-we.png"
                    alt="cat-why-we"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section4-about">
          <div class="container">
            <h2>О нас</h2>
            <div class="about-cards">
              <div class="about-item">
                <img
                  src="../images-main/4.1-hand-cat-girl.png"
                  alt="hand-cat-girl"
                />
              </div>

              <div class="about-item-description">
                <h2>
                  Мы заботимся о том, чтобы ваш питомец чувствовал себя
                  комфортно
                </h2>
                <p>
                  Мы - создатели платформы Happy Paws, помогаем найти
                  подходящего пэтситтера для вашего питомца.
                </p>
                <p>
                  Пэтситтеры - отличная альтернатива гостиницам для животных.{" "}
                </p>
                <p>
                  Каждый пэтситтер полностью удовлетворяет потребности питомца,
                  поэтому владельцы могут быть спокойны и уверены, что питомцу
                  уделяется максимум внимания и заботы, в которых он нуждается.
                </p>

                <div class="client-statistics">
                  <div class="stat-item">
                    <h3>Передержек</h3>
                    <h1>1000</h1>
                  </div>

                  <div class="stat-item">
                    <h3>Клиентов</h3>
                    <h1>988</h1>
                  </div>

                  <div class="stat-item">
                    <h3>Трудоустройств</h3>
                    <h1>420</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section5-question">
          <div class="container">
            <h2>Часто задаваемые вопросы</h2>

            <div class="question-cards">
              <div class="question-item">
                <div class="question-paragraph">
                  <div class="question-btn">
                    <div class="btn-content">
                      <p>Как выбрать лучшую няню для питомца?</p>
                    </div>

                    <div class="btn-content">
                      <img
                        src="../images-main/5.0-arrow-down.svg"
                        alt="arrow-down"
                      />
                    </div>
                  </div>

                  <div class="question-btn">
                    <div class="btn-content">
                      <p>
                        Как проходят проверку няни для питомцев и выгульщики
                        собак?
                      </p>
                    </div>

                    <div class="btn-content">
                      <img
                        src="../images-main/5.0-arrow-down.svg"
                        alt="arrow-down"
                      />
                    </div>
                  </div>

                  <div class="question-btn">
                    <div class="btn-content">
                      <p>Как я могу оплатить услуги?</p>
                    </div>

                    <div class="btn-content">
                      <img
                        src="../images-main/5.0-arrow-down.svg"
                        alt="arrow-down"
                      />
                    </div>
                  </div>

                  <div class="question-btn">
                    <div class="btn-content">
                      <p>Как стать няней или выгульщиком собак?</p>
                    </div>

                    <div class="btn-content">
                      <img
                        src="../images-main/5.0-arrow-down.svg"
                        alt="arrow-down"
                      />
                    </div>
                  </div>

                  <div class="question-btn">
                    <div class="btn-content">
                      <p>Могу ли я найти няню для кота или другого питомца?</p>
                    </div>

                    <div class="btn-content">
                      <img
                        src="../images-main/5.0-arrow-down.svg"
                        alt="arrow-down"
                      />
                    </div>
                  </div>

                  <div class="question-btn">
                    <div class="btn-content">
                      <p>Как получать оценки или отзывы?</p>
                    </div>

                    <div class="btn-content">
                      <img
                        src="../images-main/5.0-arrow-down.svg"
                        alt="arrow-down"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="question-item-img">
                <img
                  src="../images-main/5.1-dog-with-glasses.png"
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

        <section class="section6-article">
          <div class="container">
            <h2>Наши последние статьи</h2>
            <div class="article-cards">
              <div class="card-item">
                <img
                  src="../images-main/6.1-cat-our-last-posts.png"
                  alt="cat-our-last-posts"
                />

                <div class="date-content">
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.1-calendar-icon.svg"
                      alt="calendar-icon"
                    />
                    <p>25 Августа, 2022</p>
                  </div>
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.2-eye-icon.svg"
                      alt="eye-icon"
                    />
                    <p>181</p>
                  </div>
                </div>

                <h3>Зачем кошке стрижка?</h3>
                <p>
                  Кошачьи стрижки бывают двух видов: гигиенические и модельные.
                  Выполняют их обученные...
                </p>
                <button>Читать &#8594;</button>
              </div>

              <div class="card-item">
                <img src="../images-main/6.2-dog.png" alt="dog" />

                <div class="date-content">
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.1-calendar-icon.svg"
                      alt="calendar-icon"
                    />
                    <p>20 Августа, 2022</p>
                  </div>
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.2-eye-icon.svg"
                      alt="eye-icon"
                    />
                    <p>98</p>
                  </div>
                </div>

                <h3>Выбрать животное из приюта</h3>
                <p>
                  Если вы хотя бы немного интересовались судьбами бездомных
                  животных, то при выборе домашнего...
                </p>
                <button>Читать &#8594;</button>
              </div>

              <div class="card-item">
                <img src="../images-main/6.3-two-dogs.png" alt="two-dogs" />

                <div class="date-content">
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.1-calendar-icon.svg"
                      alt="calendar-icon"
                    />
                    <p>14 Августа, 2022</p>
                  </div>
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.2-eye-icon.svg"
                      alt="eye-icon"
                    />
                    <p>101</p>
                  </div>
                </div>

                <h3>Почему собака воет?</h3>
                <p>
                  С помощью голоса собака общается, проявляет свои эмоции,
                  чувства, недовольства, высказывает потребности, привлекает...
                </p>
                <button>Читать &#8594;</button>
              </div>

              <div class="card-item">
                <img
                  src="../images-main/6.4-cat-and-dog.png"
                  alt="cat-and-dog"
                />

                <div class="date-content">
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.1-calendar-icon.svg"
                      alt="calendar-icon"
                    />
                    <p>09 Августа, 2022</p>
                  </div>
                  <div class="date-item">
                    <img
                      src="../images-main/6.0.2-eye-icon.svg"
                      alt="eye-icon"
                    />
                    <p>135</p>
                  </div>
                </div>

                <h3>Собачий корм для кошек</h3>
                <p>
                  У кошек и собак разные потребности в витаминах, минералах и
                  составе потребляемой пищи...
                </p>
                <button>Читать &#8594;</button>
              </div>
            </div>

            <div class="read-more-button">
              <button class="read-more-btn">Читать больше &#8594;</button>
            </div>
          </div>
        </section>

        <section class="section7-reviews">
          <div class="container">
            <h2>Отзывы</h2>
            <div class="reviews-cards">
              <div class="card-item">
                <div class="user-picture">
                  <img src="../images-main/7.1-veronika.png" alt="veronika" />
                </div>

                <div class="user-content">
                  <h3>Вероника </h3>
                  <p>
                    Огромное спасибо! Каждый день были фото-и видеоотчеты! Микки
                    не скучал, у него была прекрасная компания и блестящий уход!
                    Мы были спокойны, пока находились в отъезде. Еще раз
                    спасибо!
                  </p>

                  <div class="user-location">
                    <div class="map-city">
                      <img
                        src="../images-main/7.0.1-location-icon.svg"
                        alt="location-icon"
                      />
                      <p>Минск</p>
                    </div>
                    <div class="review-date">
                      <p>Август, 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-item">
                <div class="user-picture">
                  <img src="../images-main/7.2-nikita.png" alt="nikita" />
                </div>

                <div class="user-content">
                  <h3>Никита </h3>
                  <p>
                    Спасибо за безупречную работу и заботу и моей кошке Джесси.
                    Я очень переживал, что ей будет грустно и одиноко, но на
                    самом деле она отлично провела время и без меня! ))
                  </p>

                  <div class="user-location">
                    <div class="map-city">
                      <img
                        src="../images-main/7.0.1-location-icon.svg"
                        alt="location-icon"
                      />
                      <p>Минск</p>
                    </div>
                    <div class="review-date">
                      <p>Июль, 2022</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-item">
                <div class="user-picture">
                  <img src="../images-main/7.3-irina.png" alt="irina" />
                </div>

                <div class="user-content">
                  <h3>Ирина </h3>
                  <p>
                    Очень благодарна платформе и моему ситтеру-Ивану! Он отлично
                    справился с задачей, а наша кошка Юкки отлично провела
                    время! Мы будем теперь еще чаще обращаться к вам за помощью!
                  </p>

                  <div class="user-location">
                    <div class="map-city">
                      <img
                        src="../images-main/7.0.1-location-icon.svg"
                        alt="location-icon"
                      />
                      <p>Логойск</p>
                    </div>
                    <div class="review-date">
                      <p>Июль, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<div class="read-more-button">*/}
            {/*  <button class="read-more-btn">Читать больше &#8594;</button>*/}
            {/*</div> */}
          </div>
        </section>

        <section class="section8-underline">
          <div class="container">
            <span class="hr-line"></span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;
