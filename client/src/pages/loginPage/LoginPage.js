import "./login.css";

function LoginPage() {
  return (
    <div>
      <header>
        <div class="container">
          <div class="header-flex">
            <div class="header-flex-logo">
              <div class="burger-menu"></div>

              <a href="#">
                <img
                  class="main-logo"
                  src="images-main/1.0-happy-paws-logo-1.svg"
                  alt="-happy-paws-logo-1"
                />
              </a>
            </div>
            <div class="header-flex-link">
              <ul>
                <li>
                  <a href="#">Услуги</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div class="header-flex-reg">
              <button class="sign-in">Войти</button>
              <button class="log-in">Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section class="section1-login">
          <div class="container">
            <div class="wrapper">
              <div class="close-icon">
                <img
                  class="closebtn"
                  src="images-main/p7-1-close1.svg"
                  alt="close"
                />
              </div>

              <div class="regwrapper">
                <h1>Вход</h1>

                <div class="googlereg">
                  <img src="images-main/p7-2-google.svg" alt="google" />
                  <p>Войти с помощью Google</p>
                </div>

                <div class="orline">
                  <div class="lineleft"></div>
                  <p>или</p>
                  <div class="lineright"></div>
                </div>

                <div class="formcontent">
                  <div class="form1">
                    <form action="#">
                      <input type="email" placeholder="Введите e-mail" />
                    </form>
                  </div>

                  <div class="form2">
                    <form action="#">
                      <input type="password" placeholder="Введите пароль" />
                      <img src="images-main/p7-3-eye.svg" alt="eye" />
                    </form>
                  </div>

                  <button class="forgetbtn">Забыли пароль?</button>
                </div>

                <div class="checkcontent">
                  <form action="#">
                    <input type="checkbox" />
                    <label>Запомнить пароль</label>
                  </form>
                </div>

                <div class="login-button">
                  <button class="loginbtn">Войти</button>
                </div>
              </div>

              <div class="no-account">
                <button class="signinbtn">
                  Нет аккаунта? Зарегистрируйтесь!
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="myfreedom2">
          <div class="container">
            <p>Есть вопросы? Свяжитесь с нами! +375 (44) 111-11-11</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
