import React from "react";
import { Avatar } from "antd";
import "./FriendItem.css";

function FriendItem({ children }) {
  return (
    <div className="friend-item">
      <Avatar>{children.charAt(0).toUpperCase()}</Avatar>
      <span>{children}</span>
    </div>
  );
}

export default FriendItem;
