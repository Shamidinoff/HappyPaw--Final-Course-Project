import axios from "axios";
import cl from "../loginPage/Login.module.scss"
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const user = sessionStorage.getItem("user")

  useEffect(() => {
    if(user){
      console.log("Hi")
      navigate("/home")
    }
  }, [])

  function openHomePage() {
    navigate("/home");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please provide both email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      console.log(response.data)
      if (response.status === 200) {
        sessionStorage.setItem("user", JSON.stringify(response.data.user))
        openHomePage()
      }

    } catch (error) {
      console.log(error)
      if(error.response.status===404) {
        setError('Почты не существует');
      }else if(error.response.status === 401) {
        setError('Неправильный пароль');
      }
      else{
        setError('Какая то ошибка');
      }
    }
  };

  return (
    <div>
      <header>
        <div className={cl.container}>
          <div className={cl.header_flex}>
            <div className={cl.header_flex_logo}>
              <div className={cl.burger_menu}></div>

              <a href="#">
                <img
                  className={cl.main_logo}
                  src="images-main/1.0-happy-paws-logo-1.svg"
                  alt="-happy-paws-logo-1"
                />
              </a>
            </div>
            <div className={cl.header_flex_link}>
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
            <div className={cl.header_flex_reg}>
              <button className={cl.signin}>Войти</button>
              <button className={cl.login}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={cl.section1_login}>
          <div className={cl.container}>
            <div className={cl.wrapper}>
              <div className={cl.close_icon}>
                <img
                  className={cl.closebtn}
                  src="images-main/p7-1-close1.svg"
                  alt="close"
                />
              </div>

              <div className={cl.regwrapper}>
                <h1>Вход</h1>

                <div className={cl.googlereg}>
                  <img src="images-main/p7-2-google.svg" alt="google" />
                  <p>Войти с помощью Google</p>
                </div>

                <div className={cl.orline}>
                  <div className={cl.lineleft}></div>
                  <p>или</p>
                  <div className={cl.lineright}></div>
                </div>

                {error && <p>{error}</p>}
                <div className={cl.formcontent} >
                  <div className={cl.form1}>
                    <form action="#">
                      <input type="email" placeholder="Введите e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </form>
                  </div>

                  <div className={cl.form2}>
                    <form action="#">
                      <input type="password" placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <img src="images-main/p7-3-eye.svg" alt="eye" />
                    </form>
                  </div>

                  <button className={cl.forgetbtn}>Забыли пароль?</button>
                </div>

                <div className={cl.checkcontent}>
                  <form action="#">
                    <input type="checkbox" />
                    <label>Запомнить пароль</label>
                  </form>
                </div>

                <div className={cl.login_button}>
                  <button className={cl.loginbtn} onClick={handleLogin}>Войти</button>
                </div>
              </div>

              <div className={cl.noaccount}>
                <button className={cl.signinbtn}>
                  Нет аккаунта? Зарегистрируйтесь!
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className={cl.myfreedom2}>
          <div className={cl.container}>
            <p>Есть вопросы? Свяжитесь с нами! +375 (44) 111-11-11</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;
