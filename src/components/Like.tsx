import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/Ai";
const Like = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus((prevStatus) => !prevStatus);
  };
  if (status) return <AiFillHeart color="red" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
