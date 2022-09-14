import React from "react";
import Vehicles from "../src/components/Vehicles";
import Assignments from "../src/Assignments";

export default function IndexPage() {
  return (
    <div className="columns assignment">
      <div>
        <Vehicles />
      </div>
      <Assignments initialAssignment={1} />
    </div>
  );
}
