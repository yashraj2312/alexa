import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "All",
  },
  {
    _id: uuid(),
    categoryName: "Tech",
  },
  {
    _id: uuid(),
    categoryName: "Product",
  },
  {
    _id: uuid(),
    categoryName: "Humour",
  },
  {
    _id: uuid(),
    categoryName: "Science",
  },
];
