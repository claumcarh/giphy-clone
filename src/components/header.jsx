import giphyLogo from "../assets/images/giphy-logo.svg";
import giphyText from "../assets/images/giphy-text.svg";
import giphyPlus from "../assets/images/giphy-plus.svg";
import giphyPersonIcon from "../assets/images/giphy-person-icon.svg";
import giphyHamburgerMenu from "../assets/images/giphy-hamburger-menu.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img className="header__logo-img" src={giphyLogo} alt="" />
        <img src={giphyText} alt="" />
      </a>

      <a className="header__plus" href="/">
        <img className="header__plus-img" src={giphyPlus} alt="" />
      </a>

      <button className="header__user"
      href="/"
      >
        <img className="header__user-img" src={giphyPersonIcon} alt="" />
      </button>

      <button className="header__hamburgerMenu" href="/">
        <img
          className="header__hamburgerMenu-img"
          src={giphyHamburgerMenu}
          alt=""
        />
      </button>
    </header>
  );
}

export default Header;
