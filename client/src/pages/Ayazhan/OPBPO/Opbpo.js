import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import "./OPBPO.css";

function Opbpo() {
  return (
    <div>
      <Header />
      <main>
        <div class="nav1_opm">
          <div class="container">
            <div>
              <a class="main" href="#">
                Главная
              </a>
              <img src="../../images-blog/right1.svg" alt="right1" />
              <a class="my_account" href="#">
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
            <a href="#">Назад</a>
          </div>

          <div class="main_opb">
            <ul class="tabs">
              <li class="tabs__item">Предстоящие заказы (1)</li>
              <li class="tabs__item">Отмененные заказы (0)</li>
              <li class="tabs__item tabs__item-active">Прошедшие заказы (1)</li>
            </ul>
          </div>

          <table class="table">
            <tr>
              <th class="head3">Дата</th>
              <th class="head3">Услуга</th>
              <th class="head3">Няня/выгульщик</th>
              <th class="head3">Оплата</th>
              <th class="head3">Состояние</th>
            </tr>
            <tr>
              <td>01 Июня 2022</td>
              <td>Выгул собаки</td>
              <td>Маргарита Юркова</td>
              <td>Оплата наличными</td>
              <td>Выполнено</td>
            </tr>
          </table>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default Opbpo;
