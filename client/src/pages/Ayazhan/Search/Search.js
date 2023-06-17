import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import PettsitterCards from "../../../components/petsitter-card/PettsitterCards";
import "./search.css";
import {useNavigate} from "react-router-dom";

function Search() {
  const navigate = useNavigate()


  return (
    <div>
      <Header />
      <main>
        <div class="nav1_blog">
          <div class="container">
            <div>
              <a class="main" href="#" onClick={() => navigate("/home")}>
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

         </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
