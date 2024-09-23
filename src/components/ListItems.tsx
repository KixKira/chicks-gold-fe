import { IItem } from "../interface";
import { ItemCard } from ".";
import "../styles/components/ListItems.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface props {
  items: IItem[];
}

export const ListItems = ({ items }: props) => {
  return (
    <div id="list-items">
      {items.map((items) => (
        <ItemCard key={items.id} width="12em" height="20em" {...items} />
      ))}
      <footer className="paginatior-fotter ">
        <ul>
          <li className="page button-row">
            <IoIosArrowBack />
          </li>
          <li className="page">1</li>
          <li className="page">2</li>
          <li className="page">
            <span>3</span>
          </li>
          <li className="page">
            <span>4</span>
          </li>
          <li className="page">
            <span>...</span>
          </li>
          <li className="page">
            <span>11</span>
          </li>
          <li className="page button-row">
            <IoIosArrowForward />
          </li>
        </ul>
      </footer>
    </div>
  );
};
