import { PropsWithChildren } from "react";
import "../styles/components/CardContainer.css";

interface props extends PropsWithChildren {
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  padding?: string;
}

export const CardContainer = ({
  children,
  backgroundColor = "#303141",
  borderColor = "rgb(73,80,119)",
  height = "100%",
  width = "100%",
  padding,
}: props) => {
  return (
    <div
      className="card-container"
      style={{
        backgroundColor,
        borderColor,
        minWidth: width,
        height,
        padding,
      }}
    >
      {children}
    </div>
  );
};
