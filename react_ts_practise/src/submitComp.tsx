type propsType = {
  clickHandler: () => void;
};

export default function (props: propsType) {
  return (
    <div>
      <button onClick={props.clickHandler}>Calculate</button>
    </div>
  );
}
