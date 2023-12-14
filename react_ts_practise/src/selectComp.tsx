import { ChangeEvent } from "react";

// its one way to define and use generic in typescript
export default function SelectComp({ setter }: { setter: (e: ChangeEvent<HTMLSelectElement>) => void }) {
  return (
    <div>
      <select onChange={setter} id="select">
        <option value={"sum"}>Sum</option>
        <option value={"minus"}>Minux</option>
        <option value={"mul"}>Mul</option>
        <option value={"division"}>Division</option>
      </select>
    </div>
  );
}
