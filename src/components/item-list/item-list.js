import React, { Component } from "react";

import Spinner from "../spinner/spinner";

import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  if (!items) {
    return <Spinner />;
  }

  return (
    <div className="item-list-div">
      <ul className="item-list list-group">{items}</ul>
    </div>
  );
};

export default ItemList;
