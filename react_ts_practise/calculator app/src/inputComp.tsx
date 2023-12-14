import { ChangeEvent } from "react";

// this is one way to define type of react component props
export default function InputComp({ type, setter, value }: { value: string; type: string; setter: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div style={{ margin: "20px" }}>
      <input style={{ padding: "10px" }} value={value || ""} onChange={setter} type={type} />
    </div>
  );
}
