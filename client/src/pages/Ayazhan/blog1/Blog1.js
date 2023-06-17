import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import "./blog1.css";
import ArticleCards from "../../../components/article-card/ArticleCards";
import {useNavigate} from "react-router-dom";

function Blog1() {
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
                Блог
              </a>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="nav2_blog">
            <img src="../../images-blog/down.svg" alt="down" />
            <a href="#">Последние</a>
          </div>

          <ArticleCards />

          <div class="pagination_blog">
            <img src="../../images-blog/left1.svg" alt="left1" />

            <div class="buttons_nav3">
              <button class="button_active_nav3">1</button>

              <a>2</a>
              <a>3</a>
              <a>4</a>
              <a>5</a>
              <a>...</a>
              <a>12</a>
            </div>

            <img src="../../images-blog/right3.svg" alt="right3" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Blog1;
