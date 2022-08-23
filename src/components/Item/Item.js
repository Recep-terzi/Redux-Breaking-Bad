import React from "react";
import "./Item.Module.css";
const Item = ({ item }) => {
  return (
    <div className="quote_item">
      <q>{item.quote}</q>
      <strong>{item.author}</strong>
    </div>
  );
};

export default Item;
