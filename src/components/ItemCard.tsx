import { IItem } from "../interface";
import { CardContainer } from ".";
import "../styles/components/ItemCard.css";
import { BsCircleFill, BsCartFill } from "react-icons/bs";

interface props extends IItem {
  width: string;
  height: string;
  backGroundColor?: string;
  borderColor?: string;
}

export const ItemCard = ({
  width,
  height,
  name,
  description,
  game,
  image,
  price,
  discount,
  onSale,
  onStock,
  quantity,
  backGroundColor = "#4c608526",
  borderColor = "#4c608526",
}: props) => {
  return (
    <CardContainer
      backgroundColor={backGroundColor}
      borderColor={borderColor}
      width={width}
      height={height}
      padding="1em"
    >
      <div className="item-card-container">
        <div className="item-card-header">
          <div className="item-card-header-information">
            <div className="item-on-sale">
              <BsCircleFill
                style={{
                  color: onSale ? "#39e29d" : "rgb(221, 52, 52)",
                }}
              />
              {onSale ? "On Sale" : "Not for Sale"}
            </div>
            <div className={onStock ? "item-card-stock" : "item-card-no-stock"}>
              {onStock ? "In Stock" : "Off Stock"}
            </div>
          </div>
          <div className="item-card-herader-quantity">
            <input name="quantity" type="number" value={quantity} />
          </div>
        </div>
        <img src={image} className="item-card-image" alt="item image" />
        <div className="item-card-body">
          <div className="item-card-body-game">
            <span>{name}</span>
            <img src={game} alt={name} />
          </div>
          <div className="item-card-body-price">
            <span>${price}</span>
            {discount && <span className="discount">${discount}</span>}
          </div>
          <p>{description}</p>
          <div className="item-card-body-buttons">
            <button className="button details-button">Details</button>
            <button className="button buy-button">
              Add
              <div className="cart-icon-container">
                <BsCartFill className="input-icon-small" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};
