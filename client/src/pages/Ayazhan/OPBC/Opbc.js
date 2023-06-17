import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import {useNavigate} from "react-router-dom";
import './OPBC.css'

function Opbc() {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <main>
        <div class="nav1_opm">
          <div class="container">
            <div>
              <a class="main" href="#" onClick={() => navigate("/home")}>
                Главная
              </a>
              <img src="../../images-blog/right1.svg" alt="right1" />
              <a class="my_account" href="#" onClick={() => navigate("/owner")}>
                Личный кабинет
              </a>
              <img src="../../images-blog/right1.svg" alt="right1" />
              <a class="messages_nav1" href="#">
                Мои бронирования
              </a>
            </div>
          </div>
        </div>

        <main class="container">
          <div class="nav2_opm">
            <img src="../../images-blog/left2.svg" alt="left2" />
            <a onClick={() => navigate("/owner")} href="#">Назад</a>
          </div>

          <div class="main_opb">
            <ul class="tabs">
              <li class="tabs__item" onClick={() => navigate("/opb")}>Предстоящие заказы (1)</li>
              <li class="tabs__item tabs__item-active" onClick={() => navigate("/opbc")}>
                Отмененные заказы (0)
              </li>
              <li class="tabs__item " onClick={() => navigate("/opbpo")}>Прошедшие заказы (1)</li>
            </ul>

            <div class="content">
              <h2>У вас нет отмененных заказов</h2>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default Opbc;
