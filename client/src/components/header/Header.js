import "../../pages/main/main.css";

function Header() {
  return (
    <header>
      <div class="container">
        <div class="header-flex">
          <div class="header-flex-logo">
            <div class="burger-menu"></div>
            <a href="#">
              <img
                class="main-logo"
                src="./images-main/1.0-happy-paws-logo-1.svg"
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
  );
}

export default Header;
