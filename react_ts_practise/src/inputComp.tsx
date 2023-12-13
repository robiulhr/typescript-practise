// this is one way to define type of react component props
export default function InputComp({ type }: { type: string }) {
  return (
    <div style={{ margin: "20px" }}>
      <input type={type} />
    </div>
  );
}
