import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./sitter2.css";
import {useNavigate} from "react-router-dom";

function SitterSearch2() {
  const navigate = useNavigate()
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <Header />
      <main>
        <section className="section1-sitter2">
          <div className="container">
            <div className="s1-description">
              <div className="descr-text">
                <p>&#8249;</p>
                <p>Назад</p>
              </div>
            </div>
            <div className="s1-sitter-bg">
              <div className="sitter-content">
                <h1>Давайте подберем вам идеального ситтера!</h1>

                <div className="sitter-data">
                  <div className="sitter-data-item">
                    <h2>Город</h2>
                    <div className="form-item">
                      <select name="city">
                        <option value="default" hidden>
                          Выберите город
                        </option>
                        <option value="Astana">Astana</option>
                        <option value="Almaty">Almaty</option>
                        <option value="Shymkent">Shymkent</option>
                        <option value="Taraz">Taraz</option>
                        <option value="Other">...</option>
                      </select>
                    </div>
                  </div>

                  <div className="sitter-data-item">
                    <h2>Услуга</h2>
                    <div className="form-item">
                      <select name="city">
                        <option value="default" hidden>
                          Выберите услугу
                        </option>
                        <option value="service1">Услуга 1</option>
                        <option value="service2">Услуга 2</option>
                        <option value="service3">Услуга 3</option>
                        <option value="service4">Услуга 4</option>
                        <option value="Other">...</option>
                      </select>
                    </div>
                  </div>

                  <div className="sitter-data-item-date">
                    <h2>Даты</h2>
                    <div className="form-item">
                      <form action="#">
                        <label>Выберите даты</label>
                        <button className="calendar-btn">
                          <img
                            src="images-main/1.1-calendar-icon.svg"
                            alt="calendar-icon"
                          />
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="sitter-data-search">
                    <h2>Search</h2>
                    <div className="form-item">
                      <button className="search-btn">Поиск &#8594;</button>
                    </div>
                  </div>
                </div>

                <button
                  /* class="advancedbtn" */ className="advancedbtn"
                  onClick={toggleHidden}
                >
                  Расширенный поиск &#8594;
                </button>

                {isHidden && (
                  <div className="hidden-wrapper">
                    <div className="hidden-content">
                      <div className="hidden-card">
                        <h2>Количество питомцев</h2>
                        <form action="#">
                          <input type="radio" />
                          <label>1 питомец</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>2 питомца</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>3 и более питомцев</label>
                        </form>
                      </div>

                      <div className="hidden-card">
                        <h2>Наличие питомцев у ситтера</h2>
                        <form action="#">
                          <input type="checkbox" />
                          <label>Без собак</label>
                        </form>

                        <form action="#">
                          <input type="checkbox" />
                          <label>Без котов</label>
                        </form>

                        <form action="#">
                          <input type="checkbox" />
                          <label>Не имеет значения</label>
                        </form>
                      </div>
                    </div>

                    <div className="hidden-content">
                      <div className="hidden-card">
                        <h2>Возраст питомца</h2>
                        <form action="#">
                          <input type="radio" />
                          <label>до года</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label> от 1 года до 8 лет</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>старше 8 лет</label>
                        </form>
                      </div>

                      <div className="hidden-card">
                        <h2>Наличие прививок у питомца</h2>
                        <form action="#">
                          <input type="radio" />
                          <label>Да, обязательно</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>Не обязательно</label>
                        </form>
                      </div>
                    </div>

                    <div className="hidden-content">
                      <div className="hidden-card">
                        <h2>Вес питомца</h2>
                        <form action="#">
                          <input type="radio" />
                          <label>до 5 кг</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>от 5 кг до 10 кг</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>от 10 кг до 20 кг</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>от 20 кг до 40 кг</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>больше 40 кг</label>
                        </form>
                      </div>

                      <div className="hidden-card">
                        <h2>Дополнительные услуги</h2>
                        <form action="#">
                          <input type="checkbox" />
                          <label>тренировки/обучение питомца</label>
                        </form>

                        <form action="#">
                          <input type="checkbox" />
                          <label>зоопсихолог</label>
                        </form>

                        <form action="#">
                          <input type="checkbox" />
                          <label>ветеринарные навыки</label>
                        </form>

                        <form action="#">
                          <input type="checkbox" />
                          <label>грумминг</label>
                        </form>
                      </div>
                    </div>

                    <div className="hidden-content-column">
                      <div className="hidden-card">
                        <h2>Кастрированный / стерилизованный питомец</h2>
                        <form action="#">
                          <input type="radio" />
                          <label>Да, обязательно</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>Не обязательно</label>
                        </form>
                      </div>

                      <div className="hidden-card">
                        <h2>Наличие маленьких детей у ситтера</h2>
                        <form action="#">
                          <input type="radio" />
                          <label>Нет</label>
                        </form>

                        <form action="#">
                          <input type="radio" />
                          <label>Не имеет значения</label>
                        </form>
                      </div>

                      <div className="hidden-card">
                        <h2>Предпочитаемый тип жилья</h2>
                        <form action="#">
                          <input type="checkbox" />
                          <label>квартира</label>
                        </form>

                        <form action="#">
                          <input type="checkbox" />
                          <label>частный дом</label>
                        </form>
                      </div>
                    </div>

                    <div className="button-content">
                      <button className="apply" onClick={() => navigate("/petsitters")}>Применить</button>
                      <button className="cancel">Отменить</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section8-underline">
          <div className="container">
            <span className="hr-line"></span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SitterSearch2;
