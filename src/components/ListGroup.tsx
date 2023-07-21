import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleClick = (item: string, index: number) => {
    onSelectItem(item);
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.map((item: string, index: number) => (
        <ul className="list-group" key={item}>
          <li
            onClick={() => handleClick(item, index)}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        </ul>
      ))}
    </>
  );
}

export default ListGroup;
