import "../styles/components/ToolBar.css";
import { GiBroadsword } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { BiSolidCoinStack } from "react-icons/bi";
import { FaFeatherAlt } from "react-icons/fa";

export const ToolBar = () => {
  return (
    <form id="toolbar">
      <div className="select-game">
        <GiBroadsword className="input-icon" />
        <select>
          <option>Game 1</option>
          <option>Game 2</option>
          <option>Game 3</option>
        </select>
      </div>
      <div className="searchbar">
        <div className="search-input">
          <LuSearch className="input-icon" />
          <input name="search" type="text" placeholder="Search" />
        </div>
        <div className="selects-searchbar">
          <div className="select-price">
            <BiSolidCoinStack className="input-icon" />
            <div className="select-input">
              <label>Price</label>
              <select>
                <option>All</option>
                <option>Game 1</option>
                <option>Game 2</option>
              </select>
            </div>
          </div>
          <div className="select-item-type">
            <FaFeatherAlt className="input-icon" />
            <div className="select-input">
              <label>Item Type</label>
              <select>
                <option>All</option>
                <option>Game 1</option>
                <option>Game 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
