import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./sitter-personal.css";

function PersonalPage() {
  return (
    <div>
      <Header />
      <main>
        <section class="section1-link">
          <div class="container">
            <div class="section1-link-content">
              <div class="link-item">
                <p>Главная</p>
                <p>&#8250;</p>
                <p>Анкеты пэтситтеров</p>
                <p>&#8250;</p>
                <p class="service-link">Ситтер Маргарита</p>
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
              <p>Время ответа: 1 час</p>
            </div>

            <div class="personal-info">
              <div class="card">
                <img src="images-main/p5-margarita.png" alt="margarita" />
                <div class="dot">
                  <img src="images-main/p5-dot1.svg" alt="dot1" />
                  <img src="images-main/p5-dot2.svg" alt="dot2" />
                  <img src="images-main/p5-dot2.svg" alt="dot2" />
                  <img src="images-main/p5-dot2.svg" alt="dot2" />
                </div>
              </div>

              <div class="card-descr">
                <div class="margarita">
                  <h2>Маргарита</h2>
                  <img src="images-main/p5-like.svg" alt="like" />
                </div>
                <p>Минск, Первомайский р-н</p>
                <p>Опыт работы: 2 года</p>
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
                    <p>Успешно прошла подготовку</p>
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
                  Няня для животных <span class="span1">25 BYN/сутки</span>
                </p>
                <p>
                  Дневная няня <span class="span2">10 BYN/час</span>
                </p>
                <p>
                  Выгул собак <span class="span3">10 BYN/час</span>
                </p>
              </div>

              <div class="item">
                <h3>Кого принимаю</h3>
                <p>Коты</p>
                <p>Собаки 0-40кг</p>
              </div>

              <div class="item">
                <h3>Условия проживания</h3>
                <p>2-х комнатная квартира</p>
                <p>Большой балкон</p>
                <p>Без детей</p>
                <p>Кошка и собака</p>
              </div>
            </div>
            <div class="desc-wrapper2">
              <div class="item2">
                <h2>О себе</h2>
                <p>
                  Привет! Я - Маргарита и я очень люблю животных, особенно
                  собак. Я не считаю пэтситтинг работой, для меня это хобби
                  и удовольствие. Я получаю огромное удовольствие, когда провожу
                  время с животными. У меня всегда были животные дома и поэтому
                  у меня есть опыт в ухаживании за ними. Сейчас у меня дома
                  чихуахуа Терри и кошка Анфиса. Если вы доверите мне своего
                  любимца, то гарантирую максимальную заботу и уход за ним. Я
                  беру на передержку и выгул абсолютно любых животных, за
                  исключением чересчур агрессивных.
                </p>
              </div>

              <div class="item2-img">
                <h2>Фото моих питомцев</h2>
                <img src="images-main/p5-dog.png" alt="dog" />
                <img src="images-main/p5-cat.png" alt="cat" />
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
                      даже покормила рыбок)
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
      <Footer />
    </div>
  );
}

export default PersonalPage;
