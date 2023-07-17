import { useState } from "react";

export default function ListGroup(): JSX.Element[] {
  const items: string[] = ["tokyo", "dhaka", "kalkata"];
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return items.map((item: string, index: number) => (
    <ul className="list-group" key={item}>
      <li
        onClick={() => {
          setSelectedIndex(index);
        }}
        className={
          selectedIndex === index ? "list-group-item active" : "list-group-item"
        }
      >
        {item}
      </li>
    </ul>
  ));
}
