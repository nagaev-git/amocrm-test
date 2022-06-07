import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";
import logo from "../../images/digital_currency_logo.svg";
import avatar from "../../images/avatar.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <SearchForm />
      <div className="header__profile">
        <p className="header__profile-name">Константин</p>
        <img src={avatar} alt="Аватар" className="header__profile-avatar" />
      </div>
    </header>
  );
}
