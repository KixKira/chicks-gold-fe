import { NavItems } from "../mock";
import { IoIosArrowRoundBack } from "react-icons/io";
import "../styles/components/SideBar.css";
import { NavigationItem } from "./NavigationItem";

interface props {
  handleClose: () => void;
}

export const SideBar = ({ handleClose }: props) => {
  return (
    <aside id="sidebar">
      <header>
        <button className="button close" onClick={handleClose}>
          <IoIosArrowRoundBack />
          Menu
        </button>
      </header>
      <section>
        {NavItems.map((navItem, index) => (
          <NavigationItem
            key={index}
            title={navItem.title}
            dropdownClass="dropdown-side"
            items={navItem.childrens}
          />
        ))}
      </section>
    </aside>
  );
};
