import { useState } from "react";
import giphyLogo from "../assets/images/giphy-logo.svg";
import giphyText from "../assets/images/giphy-text.svg";
import giphyPlus from "../assets/images/giphy-plus.svg";
import giphyPersonIcon from "../assets/images/giphy-person-icon.svg";
import giphyHamburgerMenu from "../assets/images/giphy-hamburger-menu.svg";
import "./header.css";

function Header() {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img className="header__logo-img" src={giphyLogo} alt="" />
        <img src={giphyText} alt="" />
      </a>

      <a className="header__plus" href="/">
        <img className="header__plus-img" src={giphyPlus} alt="" />
      </a>

      <button className="header__user">
        <img className="header__user-img" src={giphyPersonIcon} alt="" />
      </button>

      <nav className="header__nav">
        <button
          className="header__hamburgerMenu"
          onClick={() => setNavOpened((opened) => !opened)}
        >
          <img
            className="header__hamburgerMenu-img"
            src={giphyHamburgerMenu}
            alt=""
          />
        </button>
        <div className={`nav ${navOpened ? 'nav--shown' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item nav__item--categories">
              <a className="nav__sublist-title" href="/">
                Categories
              </a>
              <ul className="nav__list nav__sublist">
                <li>
                  <a className="nav__sublist-item" href="/">
                    GIPHY Studios
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Animals
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Artists
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Emotions
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Entertainment
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Gaming
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Holidays/Greetings
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Reactions
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Sports
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Clips
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item nav__item--stickers">
              <a className="nav__sublist-title" href="/">
                Stickers
              </a>
              <ul className="nav__list nav__sublist">
                <li>
                  <a className="nav__sublist-item" href="/">
                    Originals
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Trending
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Reactions
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Packs
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item nav__item--apps">
              <a className="nav__sublist-title" href="/">
                Apps
              </a>
              <ul className="nav__list nav__sublist">
                <li>
                  <a className="nav__sublist-item" href="/">
                    GIPHY
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    GIPHY World
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    GIPHY Keys
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item nav__item--about">
              <a className="nav__sublist-title" href="/">
                About
              </a>
              <ul className="nav__list nav__sublist">
                <li>
                  <a className="nav__sublist-item" href="/">
                    DMCA
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Jobs
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Engineering Blog
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    GIPHY Arts
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Community
                  </a>
                </li>
                <li>
                  <a className="nav__sublist-item" href="/">
                    Guidelines
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <footer className="footer">
            <p className="copyright">&copy; 2024 GIPHY, Inc.</p>
            <p className="">Terms of Service Community Guidelines Privacy Policy</p>
            <p className="">Copyright Manage Cookies</p>
          </footer>
        </div>
      </nav>
    </header>
  );
}

export default Header;
