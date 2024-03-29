import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import CreateForm from "./Components/CreateForm";
import Detail from "./Components/Detail";
import Biblioteca from "./Components/Biblioteca";
import Wishlist from "./Components/Wishlist";
import Panel from "./Components/Panel";
import Coins from "./Components/Coins";
import Register from "./Components/Access/Register";
import CreateChapters from "./Components/CreateChapters";
import { useSelector } from "react-redux";
import AuthorDetail from "./Components/AuthorDetail";
import Favorite from './Components/Favoritos'
import Reader from "./Components/Reader";
//config
import Email from "./Components/Configuration/Email";
import Name from "./Components/Configuration/Name";
import Username from "./Components/Configuration/Username";
import Password from "./Components/Configuration/Password";
import Profile from "./Components/Configuration/Profile";
import PersonalMangas from "./Components/Configuration/PersonalMangas";
import About from "./Components/Configuration/About";
import IndexProfile from "./Components/Configuration/IndexProfile";
import CheckoutForm from './Components/CheckoutForm';
import GoogleUsername from "./Components/Configuration/GoogleUsername";

const axios = require("axios");

// windoes + .

function App() {
  const user = useSelector((state) => state.user);
  //YA HAY UN ACTION CREATOR getUser ;)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/author/:id" element={<AuthorDetail />} />
        <Route path="/favorite" element={<Favorite />} />

        {user && (
          <>
            <Route path="/library" element={<Biblioteca />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/detail/:id" element={<Detail />} />
        <Route path="/reader/:id" element={<Reader />} />
            {/*Configuración de Perfil*/}
            <Route path="/profile/" element={<Profile />}>
              <Route index element={<IndexProfile />} />
              <Route path="email" element={<Email />} />
              <Route path="password" element={<Password />} />
              <Route path="name" element={<Name />} />
              <Route path="username" element={<Username />} />
              <Route path="googleusername" element={<GoogleUsername />} />
              <Route path="about" element={<About />} />
              <Route path="personalmangas" element={<PersonalMangas />} />
              <Route path="panel" element={<Panel />} />
              <Route path="create" element={<CreateForm />} />
              <Route path="createChapters/:id" element={<CreateChapters />} />
              <Route path="CheckoutForm/:id" element={<CheckoutForm />} />
            </Route>
            </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
