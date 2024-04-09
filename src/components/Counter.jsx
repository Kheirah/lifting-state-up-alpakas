export default function Counter({ count, onIncrease }) {
  return <button onClick={onIncrease}>count is {count}</button>;
}
