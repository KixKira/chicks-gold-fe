import { INavItem } from "../interface";

const items: string[] = ["Item 1", "Item 2", "Item 3"];

export const NavItems: INavItem[] = [
  {
    title: "currency",
    childrens: items,
  },
  {
    title: "items",
    childrens: items,
  },
  {
    title: "accounts",
    childrens: items,
  },
  {
    title: "services",
    childrens: items,
  },
  {
    title: "more",
    childrens: items,
  },
  {
    title: "sell",
    childrens: items,
  },
];
