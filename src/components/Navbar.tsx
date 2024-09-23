import "../styles/components/NavBar.css";
import { NavigationItem } from "./NavigationItem";
import { NavItems } from "../mock";
import { currencies } from "../mock/CurrencyList";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface props {
  handleClickBurgerButton: () => void;
}

export const NavigationHeader = ({ handleClickBurgerButton }: props) => {
  return (
    <header>
      <nav className="navbar">
        <section className="sec-1">
          <button className="burger" onClick={handleClickBurgerButton}>
            <GiHamburgerMenu />
          </button>
          <img
            src="https://chicksgold.com/logo/chicks-logo-large.svg"
            alt="logo"
          />
        </section>
        <section className="sec-2">
          <ul className="navlist">
            {NavItems.map((item, index) => (
              <li className="item" key={index}>
                <NavigationItem title={item.title} items={item.childrens} />
              </li>
            ))}
          </ul>
        </section>
        <section className="sec-3">
          <div>
            <NavigationItem
              title="USD"
              customList={currencies.map((currency, index) => (
                <li className="currency-item" key={index}>
                  <img src={currency.flag} alt={currency.name} />
                  <span>{currency.name}</span>
                </li>
              ))}
            />
          </div>
          <div className="cart-container">
            <FaShoppingCart />
            {"Cart (5)"}
          </div>
          <button className="button login">
            Sign in
            <BsFillPersonFill />
          </button>
        </section>
      </nav>
    </header>
  );
};
