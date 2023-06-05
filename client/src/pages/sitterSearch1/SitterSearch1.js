import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./sitter.css";

function SitterSearch1() {
  return (
    <div>
      <Header />
      <main>
        <section class="section1-sitter">
          <div class="container">
            <div class="s1-description">
              <div class="descr-text">
                <p>&#8249;</p>
                <p>Назад</p>
              </div>
            </div>
            <div class="s1-sitter-bg">
              <div class="sitter-content">
                <h1>Давайте подберем вам идеального ситтера!</h1>

                <div class="sitter-data">
                  <div class="sitter-data-item">
                    <h2>Город</h2>
                    <div class="form-item">
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

                  <div class="sitter-data-item">
                    <h2>Услуга</h2>
                    <div class="form-item">
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

                  <div class="sitter-data-item-date">
                    <h2>Даты</h2>
                    <div class="form-item">
                      <form action="#">
                        <label>Выберите даты</label>
                        <button class="calendar-btn">
                          <img
                            src="/images-sitter1/1.1-calendar-icon.svg"
                            alt="calendar-icon"
                          />
                        </button>
                      </form>
                    </div>
                  </div>

                  <div class="sitter-data-search">
                    <h2>Search</h2>
                    <div class="form-item">
                      <button class="search-btn">Поиск &#8594;</button>
                    </div>
                  </div>
                </div>

                <button class="advancedbtn">Расширенный поиск &#8594;</button>
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

export default SitterSearch1;
