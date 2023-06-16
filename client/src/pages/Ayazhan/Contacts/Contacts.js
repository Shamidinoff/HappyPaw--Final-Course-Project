import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import "./Contacts.css";
import {useEffect, useRef, useState} from "react";

function Contacts() {
  const mapRef = useRef(null)
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
                Контакты
              </a>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="table_contacts">
            <div class="main_info">
              <h1></h1>
              <h2 class="h2_table">
                По всем вопросам вы можете обращаться к нам в любой день и время
              </h2>

              <div class="general_info">
                <div class="internal_info">
                  <div class="telephone_contacts">
                    <h3>Наш телефон</h3>
                    <p>+375 (44) 111-11-11</p>
                  </div>

                  <div class="mail_contacts">
                    <h3>Наша почта</h3>
                    <p>happypaws@gmail.com</p>
                  </div>

                  <div class="address_contacts">
                    <h3>Адрес главного офиса</h3>
                    <p>Минск</p>
                    <p>ул. Киселева, д.1</p>
                    <p>Почтовый индекс 100100</p>
                  </div>

                  <div class="caption_contacts">
                    <p>
                      Адреса пэтситтеров и выгульщиков указаны на страницах
                      <span>пэтситтеров</span>
                    </p>
                  </div>

                  <div class="social_networks">
                    <div class="social-list">
                      <a href="#">
                        <img
                          src="../../images-blog/8.1-facebook.svg"
                          alt="facebook"
                        />
                      </a>
                    </div>

                    <div class="social-list">
                      <a href="#">
                        <img
                          src="../../images-blog/8.2-instagram.svg"
                          alt="instagram"
                        />
                      </a>
                    </div>

                    <div class="social-list">
                      <a href="#">
                        <img
                          src="../../images-blog/8.3-vkontakte.svg"
                          alt="vkontakte"
                        />
                      </a>
                    </div>

                    <div class="social-list">
                      <a href="#">
                        <img
                          src="../../images-blog/8.4-youtube.svg"
                          alt="youtube"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <Wrapper apiKey={"AIzaSyAWqwiODfTL2GFly_Y3Yf9BKHSjVIMaSOI"}>
                  <MyMapComponent zoom={12}/>
                </Wrapper>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function MyMapComponent({

                          zoom,
                        }) {
  const ref = useRef();
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })
    }
    console.log(latitude)
    console.log(longitude)
    new window.google.maps.Map(ref.current, {
      center: {lat: latitude, lng: longitude},
      zoom,
    });
  });

  return <div ref={ref} id="map" className="ymap" />;
}

export default Contacts;
