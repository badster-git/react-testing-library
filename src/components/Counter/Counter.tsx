import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  // const { data, loading } = useFetch({
  //   url: `http://numbersapi.com/${count}/trivia`,
  // });

  // useEffect(() => {
  //   console.log("render");
  //   return () => {
  //     console.log("unmount");
  //   };
  // }, [incrementor]);

  return (
    <div>
      {/* {loading ? <h2>loading...</h2> : <h2>Trivia: {data}</h2>} */}
      <h2>
        DESC: {description} - DC: {incrementor}
      </h2>
      <label>
        Incrementor:
        <input
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
          type="number"
        />
      </label>
      <button
        aria-label="Subtract from Counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="Add to Counter"
        onClick={() => setCount(count + incrementor)}
      >
        +
      </button>
    </div>
  );
}
