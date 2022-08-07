import React from "react";
import ListItem from "./ListItem";

const List = ({ items, item, deleteItem,editItem }) => {
  return (
    <table className="table table-hover table-warning table-striped">
      <thead>
        <tr>
          <th>№</th>
          <th>Stack</th>
          <th>Programming Language</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((listItem, index) => {
          const { stack, language } = listItem;
          return (
            <ListItem
              key={listItem.id}
              stack={stack}
              language={language}
              number={index + 1}
              item={listItem}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
