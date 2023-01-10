import { Item } from "./Item";
import "../Todos.scss";
import { useSelector } from "react-redux";

export const List = () => {
  const items = useSelector((state) => state.items.items); // cut items from store, → from Slice and use it

  console.log(items);
  return (
    <div className="todos">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};
