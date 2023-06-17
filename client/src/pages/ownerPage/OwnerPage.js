import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./owner-page.css";
import {useNavigate} from "react-router-dom";

function OwnerPage() {
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
                <p class="service-link" onClick={() => navigate("/owner")}>Личный кабинет</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section2-personal">
          <div class="container">
            <div class="back-btn">
              <p>&#8249;</p>
              <p onClick={() => navigate("/home")}>Назад</p>
            </div>

            <div class="mydata">
              <p onClick={() => navigate("/opb")}>Мои бронирования (1)</p>
              <p onClick={() => navigate("/opm")}>Мои сообщения (1)</p>
            </div>

            <div class="wrapper">
              <div class="left-content">
                <div class="personal-info">
                  <div class="card">
                    <img src="images-main/p6-1-anna.png" alt="anna" />
                  </div>

                  <div class="card-descr2">
                    <div class="margarita2">
                      <h2>Анна</h2>
                    </div>
                    <p>Минск, 26 лет</p>
                    <p>Владелец собаки Нэнси</p>
                    <div class="stars">
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <img src="images-main/p5-star.svg" alt="star" />
                      <p>(1)</p>
                    </div>
                    <button>Редактировать профиль</button>
                    <button>Стать пэтситтером</button>
                    <button class="become-sitter">Удалить аккаунт</button>
                  </div>
                </div>
              </div>

              <div class="right-content">
                <div class="desc-wrapper2">
                  <div class="item2">
                    <h2>О себе и питомце</h2>
                    <p>
                      Меня зовут Анна, я учусь на последнем курсе
                      лингвистического университета и параллельно работаю в
                      юридической компании переводчиком. Я очень люблю
                      путешествовать и часто это делаю со своей собакой Нэнси.
                      Мы объездили много стран, но сейчас путешествовать с
                      животными стало сложнее, ввиду эпидемиологической
                      обстановки в мире и я ищу ответственную и заботливую няню
                      для своей любимицы. Я хочу быть уверена, что няня станет
                      лучшим другом нашей семьи. Моей собаке 3 года, породы
                      вельш-корги, она очень дружелюбна и активна, очень любит
                      гулять в парке, а дома любит смотреть телевизор )
                    </p>
                  </div>

                  <div class="item2-img">
                    <h2>Фото моего питомца</h2>
                    <img src="images-main/p6-2-dog.png" alt="dog" />
                    <img src="images-main/p6-3-dog1.png" alt="dog1" />
                    <div class="add-img">
                      <button class="addimgbtn">+ Добавить фото</button>
                    </div>
                  </div>
                </div>

                <div class="wrapper-all">
                  <div class="views-sum">
                    <h1>Отзывы (1)</h1>
                  </div>
                  <div class="views-wrapper">
                    <div class="view">
                      <div class="item1">
                        <img
                          src="images-main/p6-4-margarita.png"
                          alt="margarita"
                        />
                      </div>
                      <div class="item2">
                        <h3>Маргарита</h3>
                        <div class="stars">
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <img src="images-main/p5-star.svg" alt="star" />
                          <p>5/5</p>
                        </div>
                        <p>
                          Очень приятная хозяйка и собачка Нэнси. Приезжала в
                          качестве выгульщика вечером, когда хозяйку неожиданно
                          задержали на работе, отлично провели время с Нэнси,
                          бегали по парку, играли в кольцо и в целом весело
                          проводили время. Собака очень воспитанна и дружелюбна,
                          надеюсь еще встретимся )
                        </p>
                        <div class="view-date">
                          <p>10 Июня, 2022</p>
                        </div>
                      </div>
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
      <Footer />
    </div>
  );
}

export default OwnerPage;
