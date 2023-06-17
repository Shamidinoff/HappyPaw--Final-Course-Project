import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./main.css";
import ReviewMainCards from "../../components/review-card-main/ReviewMainCards";
import ArticleMainCards from "../../components/article-card-main/ArticleMainCards";
import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const accordionItems = [
    {
      question: "Как выбрать лучшую няню для питомца?",
      answer: `Найдите 2-3 няни, которые кажутся вам наиболее подходящими по вашим критериям. Нажмите кнопку “Забронировать” или “Написать ситтеру” на странице профиля каждого из них, чтобы рассказыть больше о себе и своем питомце. Расскажите подробно о характере питомца и любых его потребностях.
      После того, как нужная няня найдена, вы можете договориться о наиболее удобном способе оплаты и отправляться на отдых или по делам, зная, что ваш люимец в надежных руках.`,
    },
    {
      question: "Как проходят проверку няни для питомцев и выгульщики собак?",
      answer: `Найдите 2-3 няни, которые кажутся вам наиболее подходящими по вашим критериям. Нажмите кнопку “Забронировать” или “Написать ситтеру” на странице профиля каждого из них, чтобы рассказыть больше о себе и своем питомце. Расскажите подробно о характере питомца и любых его потребностях.
    После того, как нужная няня найдена, вы можете договориться о наиболее удобном способе оплаты и отправляться на отдых или по делам, зная, что ваш люимец в надежных руках.`,
    },
    {
      question: "Как я могу оплатить услуги?",
      answer: `Найдите 2-3 няни, которые кажутся вам наиболее подходящими по вашим критериям. Нажмите кнопку “Забронировать” или “Написать ситтеру” на странице профиля каждого из них, чтобы рассказыть больше о себе и своем питомце. Расскажите подробно о характере питомца и любых его потребностях.
    После того, как нужная няня найдена, вы можете договориться о наиболее удобном способе оплаты и отправляться на отдых или по делам, зная, что ваш люимец в надежных руках.`,
    },
    {
      question: "Как стать няней или выгульщиком собак?",
      answer: `Найдите 2-3 няни, которые кажутся вам наиболее подходящими по вашим критериям. Нажмите кнопку “Забронировать” или “Написать ситтеру” на странице профиля каждого из них, чтобы рассказыть больше о себе и своем питомце. Расскажите подробно о характере питомца и любых его потребностях.
    После того, как нужная няня найдена, вы можете договориться о наиболее удобном способе оплаты и отправляться на отдых или по делам, зная, что ваш люимец в надежных руках.`,
    },
    {
      question: "Могу ли я найти няню для кота или другого питомца?",
      answer: `Найдите 2-3 няни, которые кажутся вам наиболее подходящими по вашим критериям. Нажмите кнопку “Забронировать” или “Написать ситтеру” на странице профиля каждого из них, чтобы рассказыть больше о себе и своем питомце. Расскажите подробно о характере питомца и любых его потребностях.
    После того, как нужная няня найдена, вы можете договориться о наиболее удобном способе оплаты и отправляться на отдых или по делам, зная, что ваш люимец в надежных руках.`,
    },
    {
      question: "Как получать оценки или отзывы?",
      answer: `Найдите 2-3 няни, которые кажутся вам наиболее подходящими по вашим критериям. Нажмите кнопку “Забронировать” или “Написать ситтеру” на странице профиля каждого из них, чтобы рассказыть больше о себе и своем питомце. Расскажите подробно о характере питомца и любых его потребностях.
    После того, как нужная няня найдена, вы можете договориться о наиболее удобном способе оплаты и отправляться на отдых или по делам, зная, что ваш люимец в надежных руках.`,
    },
  ];

  const accordionBtns = accordionItems.map((item, index) => {
    return (
      <AccordionItem
        key={index}
        question={item.question}
        answer={item.answer}
      />
    );
  });

  return (
    <div>
      <Header />
      <main>
        <section class="section1-page ">
          <div class="container">
            <div class="s1-description">
              <div class="descr-text ">
                <p>Пока вас нет рядом, мы позаботимся о вашем питомце</p>
              </div>
            </div>
            <div class="s1-sitter-bg ">
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
                            src="/images-main/1.1-calendar-icon.svg"
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
                <img src="/images-main/2.1-cat.png" alt="cat" />
                <h3>Няня для животных</h3>
                <p>
                  Нужно срочно уехать и не с кем оставить домашнего питомца?
                  Няня для животных (ситтера) - это временное содержание вашего
                  питомца другими людьми...
                </p>
                <button onClick={() => navigate("/petsitters")}>
                  Подробнее &#8594;
                </button>
              </div>

              <div class="card-item">
                <img src="/images-main/2.2-dog.png" alt="cat" />
                <h3>Выгул собак</h3>
                <p>
                  Если вам пришлось задержаться на работе, уехать на какое-то
                  мероприятие или отлучиться по делам-не волнуйтесь, мы
                  с радостью выгуляем вашу собаку!
                </p>
                <button onClick={() => navigate("/petsitters")}>
                  Подробнее &#8594;
                </button>
              </div>

              <div class="card-item">
                <img src="/images-main/2.3-dog-girl.png" alt="cat" />
                <h3>Стать пэтситтером</h3>
                <p>
                  Если вы хотите попробовать себя в роли ситтера или выгульщика
                  собак - воспользуйтесь нашей платформой для регистрации
                  в качестве пэтситтера
                </p>
                <button onClick={() => navigate("/petsitters")}>
                  Подробнее &#8594;
                </button>
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
                  <img src="/images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Все наши пэтситтеры прошли специальное обучение и
                    верификацию личности
                  </p>
                </div>

                <div class="why-item-list">
                  <img src="/images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Удобная и понятная платформа и анкеты по подбору ситтеров
                  </p>
                </div>

                <div class="why-item-list">
                  <img src="/images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>Все отзывы наших пользователей прошли проверку </p>
                </div>
                <button onClick={() => navigate("/sittersearch2")}>
                  Найти пэтситтера &#8594;
                </button>
              </div>

              <div class="why-item">
                <div class="why-item-list">
                  <img src="/images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Возможность личной встречи с ситтером перед его встречей с
                    питомцем
                  </p>
                </div>

                <div class="why-item-list">
                  <img src="/images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>GPS карты прогулок и видео- фотоотчет от пэтситтера</p>
                </div>

                <div class="why-item-list">
                  <img src="/images-main/3.0-checkbox.svg" alt="checkbox" />
                  <p>
                    Поддержка менеджеров платформы и связь с пэтситтером 24/7
                  </p>
                </div>
                <button onClick={() => navigate("/sittersearch2")}>
                  Найти пэтситтера &#8594;
                </button>
              </div>

              <div class="why-item-img">
                <div class="why-item-card">
                  <img src="/images-main/3.1-cat-why-we.png" alt="cat-why-we" />
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
                  src="/images-main/4.1-hand-cat-girl.png"
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
                <div class="question-paragraph">{accordionBtns}</div>
              </div>

              <div class="question-item-img">
                <img
                  src="/images-main/5.1-dog-with-glasses.png"
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

        <ArticleMainCards />
        <ReviewMainCards />

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

export default Main;
