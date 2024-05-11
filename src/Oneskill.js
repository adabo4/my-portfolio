import React from "react";

export default function Oneskill({ skillKey }) {
  return (
    <>
      <div className="skill-level">
        <div
          className={`percentage ${skillKey === "empty-level" ? "empty" : ""}`}
        ></div>
      </div>
    </>
  );
}
