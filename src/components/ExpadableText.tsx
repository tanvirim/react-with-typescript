import { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}

const ExpadableText = ({ children, maxChar = 100 }: Props) => {
  const [isexpanded, setIsexpanded] = useState(false);

  const handleClick = () => {
    setIsexpanded((prev) => !prev);
  };

  if (maxChar >= 20) {
    return (
      <div>
        {isexpanded ? children : children.slice(0, maxChar)}
        <button onClick={handleClick}>{isexpanded ? "less" : "more"}</button>
      </div>
    );
  }

  return <div>{children}</div>;
};

export default ExpadableText;
