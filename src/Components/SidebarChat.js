import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";

const SidebarChat = ({ id, name, photoURL, addNewChat }) => {
  const [SEED, setSEED] = useState("");
  const [messages, setMessages] = useState("");
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    setSEED(Math.floor(Math.random() * 5000));
  }, []);
  return <div>SidebarChat</div>;
};

export default SidebarChat;
