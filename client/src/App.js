import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/Ayazhan/Contacts/Contacts";
import Opb from "./pages/Ayazhan/OPB/Opb";
import Opbc from "./pages/Ayazhan/OPBC/Opbc";
import Opbpo from "./pages/Ayazhan/OPBPO/Opbpo";
import Opm from "./pages/Ayazhan/OPM/Opm";
import Search from "./pages/Ayazhan/Search/Search";
import Blog1 from "./pages/Ayazhan/blog1/Blog1";
import Blog2 from "./pages/Ayazhan/blog2/Blog2";
import LoginPage from "./pages/loginPage/LoginPage";
import Main from "./pages/main/Main";
import OwnerPage from "./pages/ownerPage/OwnerPage";
import PersonalPage from "./pages/personalPage/PersonalPage";
import Service from "./pages/servicepage/Service";
import SitterSearch1 from "./pages/sitterSearch1/SitterSearch1";
import SitterSearch2 from "./pages/sitterSearch2/SitterSearch2";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<Blog1 />} />
          <Route path="/posts/:id" element={<Blog2 />} />
          <Route path="/petsitters" element={<Search />} />
          <Route path="/petsitters/:id" element={<PersonalPage />} />
          
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      // {/* <Main /> */}
      // {/*  <Service /> */}
      // {/* <SitterSearch1 /> */}
      // {/* <SitterSearch2 /> */}
      // {/* <PersonalPage /> */}
      // {/* <OwnerPage /> */}
      // {/* <LoginPage /> */}
      // {/* <Blog1 /> */}
      // {/* <Blog2 /> */}
      // {/* <Contacts /> */}
      // {/* <Opb /> */}
      // {/* <Opbc /> */}
      // {/* <Opbpo /> */}
      // {/* <Opm /> */}
      // {/* <Search /> */}
    // </div>
  );
}

export default App;
