import cl from './NotFound..module.css'
import {useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className={cl.notFound}>
            <h1>404: Страница не найдена</h1>
            <button onClick={() => navigate("/home")}>Вернуться</button>
        </div>
    );
}

export default NotFound;
