import InputComp from "./inputComp";
import "./App.css";
import SelectComp from "./selectComp";

function App() {
  return (
    <>
      <div>
        <h3>Calculator app</h3>
        <div>
          <form action="#">
            <div style={{ margin: "20px" }}>
              <h6>select calculation type</h6>
              <SelectComp<string> nameValue={"select value"} />
              {/*
               * here passing the generic type
               * can't use any space between them
               */}
            </div>
            <div>
              <InputComp type="number" />
              <InputComp type="number" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
