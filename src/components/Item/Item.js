import React from "react";
import { Link } from "react-router-dom";
import "./Item.Module.css";

const Item = ({ item }) => {
  return (
    <div className="quote_item">
      <Link to={`/quote/${item.quote_id}`}>
        <q>{item.quote}</q>
        <strong>{item.author}</strong>
      </Link>
    </div>
  );
};

export default Item;
