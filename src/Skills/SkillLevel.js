import React from "react";
import Oneskill from "./Oneskill";

export default function SkillLevel({ percentage, skillId = 0 }) {
  const rows = [];

  const levelFilledCount = percentage;

  const emptyLevelCount = 5 - levelFilledCount;

  for (let i = 0; i < levelFilledCount; i++) {
    rows.push(<Oneskill key={`skill-${skillId}-filled-level-${i}`} skillKey={"filled-level"} />);
  }
  for (let i = 0; i < emptyLevelCount; i++) {
    rows.push(<Oneskill key={`skill-${skillId}-empty-level-${i}`} skillKey={"empty-level"} />);
  }

  return <>{rows}</>;
}
