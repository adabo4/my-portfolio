import React from "react";
import Oneskill from "./Oneskill";

export default function SkillLevel({ percentage }) {
  const rows = [];

  const levelFilledCount = percentage;

  const emptyLevelCount = 5 - levelFilledCount;

  for (let i = 0; i < levelFilledCount; i++) {
    rows.push(<Oneskill key={"filled-level"} skillKey={"filled-level"} />);
  }
  for (let i = 0; i < emptyLevelCount; i++) {
    rows.push(<Oneskill key={"empty-level"} skillKey={"empty-level"} />);
  }

  return <>{rows}</>;
}
