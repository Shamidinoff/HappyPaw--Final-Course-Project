import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import './OPM.css'
import {useNavigate} from "react-router-dom";

function Opm() {
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
                Мои сообщения
              </a>
            </div>
          </div>
        </div>

        <main class="container">
          <div class="nav2_opm">
            <img src="../../images-blog/left2.svg" alt="left2" />
            <a onClick={() => navigate("/owner")} href="#">Назад</a>
          </div>

          <div class="main_opm">
            <img class="view" src="../../images-blog/view.png" alt="view" />

            <div class="message_main">
              <div class="delete">
                <p>Удалить</p>
                <img src="../../images-blog/delete.svg" alt="delete" />
              </div>

              <div class="my_messages">
                <h1></h1>
                <h2>Мои сообщения (1)</h2>
                <p>
                  Здравствуйте, Анна! Мы получили вашу заявку и заполненную
                  анкету для регистрации вас, как пэтситтер на нашей платформе.
                  Благодарим вас за заинтересованность нашим проектом. В
                  ближайшее время с вами свяжутся наши менеджеры и уточнят все
                  детали и нюансы. Надеемся, в скором времени, вы присоединитесь
                  к нашей команде любителей животных!
                </p>
                <p>С уважением, команда HappyPaws )</p>
              </div>

              <div class="date_opm">
                <p>31 Августа, 2022. 15:30</p>
              </div>

              <div>
                <hr class="hr_opm" />
                <hr class="hr_opm2" />
              </div>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </div>
  );
}

export default Opm;
