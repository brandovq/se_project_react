import { useState } from "react";
import { NavLink } from "react-router-dom";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import headerButtonLines from "../../assets/header-btn-lines.svg";
import headerMobileClose from "../../assets/header-mobile-close.svg";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  // The code above is what generates the current date in the format "Month Day" (e.g., "June 5")
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const handleMobileAddClick = () => {
    handleAddClick();
    setIsMobileMenuOpened(false);
  };
  return (
    <header className="header">
      <NavLink className="header__logo-link" to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <button
        type="button"
        className="header__menu-button"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpened ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpened ? (
          "×"
        ) : (
          <img
            src={headerButtonLines}
            alt="Menu"
            aria-hidden="true"
            className="header__menu-icon"
          />
        )}
      </button>

      <div className="header__actions">
        <ToggleSwitch />
        <button
          onClick={handleAddClick}
          type="button"
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>
      </div>

      <NavLink className="header__nav-link" to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </NavLink>

      <div
        className={`header__mobile-menu ${
          isMobileMenuOpened ? "header__mobile-menu_opened" : ""
        }`}
      >
        <button
          type="button"
          className="header__mobile-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <img
            src={headerMobileClose}
            alt="Close"
            aria-hidden="true"
            className="header__mobile-close-icon"
          />
        </button>
        <div className="header__mobile-user-row">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
        <button
          type="button"
          className="header__add-clothes-btn header__add-clothes-btn_mobile"
          onClick={handleMobileAddClick}
        >
          + Add clothes
        </button>
      </div>
    </header>
  );
}

export default Header;
