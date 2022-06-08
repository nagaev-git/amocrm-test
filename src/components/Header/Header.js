import "./Header.css";
import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../images/header_logo.svg";
import userAvatar from "../../images/avatar.png";
import profilePic from "../../images/profile_pic.svg";

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setTimeout(() => {
        handleResize();
      }, 500)
    );
  }, []);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <>
      {screenWidth > 518 ? (
        <header className="header">
          <img src={logo} alt="Логотип" className="header__logo" />
          <SearchForm />
          <div className="header__profile">
            <p className="header__profile-name">Константин</p>
            <img src={userAvatar} alt="Аватар" className="header__profile-avatar" />
          </div>
        </header>
      ) : (
        <header className="header">
          <img src={logo} alt="Логотип" className="header__logo" />
          <div className="header__profile">
            <img src={profilePic} alt="Аватар" className="header__profile-avatar" />
          </div>
          <SearchForm />
        </header>
        
      )}
    </>
  );
}
