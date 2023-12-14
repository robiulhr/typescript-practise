import InputComp from "./inputComp";
import "./App.css";
import SelectComp from "./selectComp";
import { ChangeEvent, useCallback, useState } from "react";
import SubmitComp from "./submitComp";

type InputValueType = string | undefined;

function App() {
  const [num1, setNum1] = useState<InputValueType>();
  const [num2, setNum2] = useState<InputValueType>();
  const [calculationType, setCalculationType] = useState<string>("sum");
  const [result, setResult] = useState<number>(0);
  function num1Handler(e: ChangeEvent<HTMLInputElement>): void {
    setNum1(e.target.value);
  }
  function num2Handler(e: ChangeEvent<HTMLInputElement>): void {
    setNum2(e.target.value);
  }
  function calculationTypeHandler(e: ChangeEvent<HTMLSelectElement>): void {
    setCalculationType(e.target.value);
  }
  const calculate = useCallback((): void => {
    let finalValue = 0;
    switch (calculationType) {
      case "sum":
        finalValue = Number(num1) + Number(num2);
        break;
      case "minus":
        finalValue = Number(num1) - Number(num2);
        break;
      case "mul":
        finalValue = Number(num1) * Number(num2);
        break;
      case "division":
        finalValue = Number(num1) / Number(num2);
    }
    setResult(finalValue);
  }, [calculationType, num1, num2]);
  return (
    <>
      <div>
        <h3>Calculator app</h3>
        <div>
          <form action="#">
            <div style={{ margin: "20px" }}>
              <h6>select calculation type</h6>
              <SelectComp setter={calculationTypeHandler} />
              {/*
               * here passing the generic type
               * can't use any space between them
               */}
            </div>
            <div>
              <InputComp value={num1 as string} setter={num1Handler} type="number" />
              <InputComp value={num2 as string} setter={num2Handler} type="number" />
            </div>
            <div>
              <SubmitComp clickHandler={calculate} />
            </div>
          </form>
          <div>
            <h2>Result:</h2>
            <p>{result}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
