import "../styles/ItemsView.css";
import { ToolBar, CardContainer, ListItems } from "../components";
import { LuSettings2 } from "react-icons/lu";
import { items } from "../mock";

export const ItemsView = () => {
  return (
    <div className="main-container">
      <header>
        <h1 className="title">Condimentum consectetur</h1>
        <ToolBar />
      </header>

      <section className="modal-container">
        <CardContainer>
          <article className="header-modal-container">
            <p>Showing 20 - from 125</p>
            <div className="filter-input-container">
              <LuSettings2 className="input-icon input-icon-secondary" />
              <div className="select-input">
                <label>Sort By</label>
                <select>
                  <option>Featured</option>
                  <option>Game 1</option>
                  <option>Game 1</option>
                </select>
              </div>
            </div>
          </article>
          <article className="list">
            <ListItems items={items} />
          </article>
        </CardContainer>
      </section>
    </div>
  );
};
