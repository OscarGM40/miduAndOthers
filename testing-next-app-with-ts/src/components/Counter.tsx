import { useEffect, useState } from 'react';

interface CounterProps {
  description: string;
  defaultCount: number;
}

const Counter = ({ description, defaultCount }: CounterProps) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(0);
  const [bigEnough, setBigEnough] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (count >= 15) {
      id = setTimeout(() => setBigEnough(true), 300);
    }
    return function cleanup() {
      clearTimeout(id);
    };
  }, [count, incrementor]);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Incrementor:
        <input
          data-testid="my-input"
          value={incrementor}
          type="number"
          onChange={(evt) => setIncrementor(+evt.target.value ?? 0)}
        />
      </label>
      <button aria-label="Decrement" onClick={() => setCount(count - 1)}>
        Substract
      </button>
      Current Count: {count + incrementor}
      <button
        aria-label="Add to Counter"
        onClick={() => setTimeout(() => setCount(count + 1), 200)}
      >
        Add
      </button>
      {bigEnough ? null : (
        <div className="">I am too small to be a real div</div>
      )}
    </div>
  );
};
export default Counter;
