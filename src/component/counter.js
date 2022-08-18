import React from "react";
const Counter = (props) => {
  let { value } = props;
  let [counter, setCounter] = React.useState(value);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter === 0) {
      return setCounter(counter);
    }
    setCounter(counter - 1);
  };

  const multiple = () => {
    setCounter(counter * 2);
  };

  return (
    <>
      <h2 style={{ color: counter % 2 === 0 ? "green" : "red" }}>{counter}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={multiple}>Multiple</button>
    </>
  );
};

export { Counter };
