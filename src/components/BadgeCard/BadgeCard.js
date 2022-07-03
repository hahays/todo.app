import React from "react";
import "./BadgeCard.css";

function BadgeCard({ className, text }) {
  return <span className={`badge card ${className}`}> {text}</span>;
}

export default BadgeCard;
