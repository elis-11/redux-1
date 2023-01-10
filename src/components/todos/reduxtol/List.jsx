import { Item } from "./Item";
import "../Todos.scss";

export const List = ({ items, toggleCompleted, removeItem }) => {
    console.log(items)
  return (
    <div className="todos">
        {items.map((item) => (
            <Item key={item.id}
            toggleCompleted={toggleCompleted}
            removeItem={removeItem}
            {...item}
            />
        ))}
      </div>
  );
};
