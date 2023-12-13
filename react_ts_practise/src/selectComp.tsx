// its one way to define and use generic in typescript
export default function SelectComp<T>({ nameValue }: { nameValue: T }) {
  /*
   * there are two more ways to define generic in react project
   * 1. function funcB<T extends {} >() { } or function funcB<T extends HTMLElement>() { }
   * Note: this one has different behaivior and use case. so, need to have some knowledge of it before using.
   * 2. function funcB<T, >() { }
   */
  return (
    <div>
      <select name={nameValue as string} id="select">
        <option value={"sum"}>Sum</option>
        <option value={"minus"}>Minux</option>
        <option value={"mul"}>Mul</option>
        <option value={"Division"}>Division</option>
      </select>
    </div>
  );
}
