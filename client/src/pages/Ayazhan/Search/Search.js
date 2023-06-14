import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PettsitterCards from "../../../components/petsitter-card/PettsitterCards";
import "./search.css";

function Search() {



  return (
    <div>
      <Header />
      <main>
        <div class="nav1_blog">
          <div class="container">
            <div>
              <a class="main" href="#">
                Главная
              </a>
              <img src="../../images-blog/right1.svg" alt="right1" />
              <a class="blog" href="#">
                Анкеты пэтситтеров
              </a>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="search-header">
            <h3 class="head3">Наши пэтситтеры</h3>
            <form class="filter-container">
              <select class="select">
                <option>Минск</option>
                <option>Астана</option>
                <option>Москва</option>
              </select>

              <select class="select">
                <option>Няня для собаки</option>
              </select>

              <input class="date-input" type="date" />
              <input class="date-input" type="date" />

              <select class="select">
                <option>1 питомец</option>
              </select>

              <button type="button">
                <img
                  src="../../images-blog/filter.svg"
                  width="20"
                  height="20"
                  alt=""
                />
              </button>
            </form>
          </div>
          <p class="search-result">Найдено 15 вариантов</p>

          <PettsitterCards />
          <div class="content-container">
            <div class="result-items">
              <div class="result-item">
                <article class="result-item__card">
                  <img src="../../images-blog/people-1.jpg" alt="" />
                  <div class="result-item__body">
                    <div class="result-item__header">
                      <h3 class="head3">Маргарита</h3>
                      <span>От 25 BYN </span>
                      <img src="../../images-blog/filled-heart.svg" alt="" />
                    </div>
                    <p>Минск, Первомайский р-н</p>
                    <p>12 передержек, 6 выгулов</p>
                    <div class="result-item__stars">
                      <div>
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                      </div>
                      <span> (8) </span>
                    </div>
                    <button type="button" class="primary-btn mt-auto">
                      Выбрать
                      <img src="../../images-blog/white-right.svg" alt="" />
                    </button>
                  </div>
                </article>

                <article class="result-item__card">
                  <img src="../../images-blog/people-1.jpg" alt="" />
                  <div class="result-item__body">
                    <div class="result-item__header">
                      <h3 class="head3">Маргарита</h3>
                      <span>От 25 BYN </span>
                      <img src="../../images-blog/filled-heart.svg" alt="" />
                    </div>
                    <p>Минск, Первомайский р-н</p>
                    <p>12 передержек, 6 выгулов</p>
                    <div class="result-item__stars">
                      <div>
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                      </div>
                      <span> (8) </span>
                    </div>
                    <button type="button" class="primary-btn mt-auto">
                      Выбрать
                      <img src="../../images-blog/white-right.svg" alt="" />
                    </button>
                  </div>
                </article>

                <article class="result-item__card">
                  <img src="../../images-blog/people-1.jpg" alt="" />
                  <div class="result-item__body">
                    <div class="result-item__header">
                      <h3 class="head3">Маргарита</h3>
                      <span>От 25 BYN </span>
                      <img src="../../images-blog/filled-heart.svg" alt="" />
                    </div>
                    <p>Минск, Первомайский р-н</p>
                    <p>12 передержек, 6 выгулов</p>
                    <div class="result-item__stars">
                      <div>
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                      </div>
                      <span> (8) </span>
                    </div>
                    <button type="button" class="primary-btn mt-auto">
                      Выбрать
                      <img src="../../images-blog/white-right.svg" alt="" />
                    </button>
                  </div>
                </article>

                <article class="result-item__card">
                  <img src="../../images-blog/people-1.jpg" alt="" />
                  <div class="result-item__body">
                    <div class="result-item__header">
                      <h3 class="head3">Маргарита</h3>
                      <span>От 25 BYN </span>
                      <img src="../../images-blog/filled-heart.svg" alt="" />
                    </div>
                    <p>Минск, Первомайский р-н</p>
                    <p>12 передержек, 6 выгулов</p>
                    <div class="result-item__stars">
                      <div>
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                      </div>
                      <span> (8) </span>
                    </div>
                    <button type="button" class="primary-btn mt-auto">
                      Выбрать
                      <img src="../../images-blog/white-right.svg" alt="" />
                    </button>
                  </div>
                </article>

                <article class="result-item__card">
                  <img src="../../images-blog/people-1.jpg" alt="" />
                  <div class="result-item__body">
                    <div class="result-item__header">
                      <h3 class="head3">Маргарита</h3>
                      <span>От 25 BYN </span>
                      <img src="../../images-blog/filled-heart.svg" alt="" />
                    </div>
                    <p>Минск, Первомайский р-н</p>
                    <p>12 передержек, 6 выгулов</p>
                    <div class="result-item__stars">
                      <div>
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                      </div>
                      <span> (8) </span>
                    </div>
                    <button type="button" class="primary-btn mt-auto">
                      Выбрать
                      <img src="../../images-blog/white-right.svg" alt="" />
                    </button>
                  </div>
                </article>

                <article class="result-item__card">
                  <img src="../../images-blog/people-1.jpg" alt="" />
                  <div class="result-item__body">
                    <div class="result-item__header">
                      <h3 class="head3">Маргарита</h3>
                      <span>От 25 BYN </span>
                      <img src="../../images-blog/filled-heart.svg" alt="" />
                    </div>
                    <p>Минск, Первомайский р-н</p>
                    <p>12 передержек, 6 выгулов</p>
                    <div class="result-item__stars">
                      <div>
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                        <img src="../../images-blog/filled-start.svg" alt="" />
                      </div>
                      <span> (8) </span>
                    </div>
                    <button type="button" class="primary-btn mt-auto">
                      Выбрать
                      <img src="../../images-blog/white-right.svg" alt="" />
                    </button>
                  </div>
                </article>
              </div>

              <div class="result-item ymap-container">
                <img src="../../images-blog/mapmap2for.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
