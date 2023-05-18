import { useCounter } from "@frontend-mentor/common-hooks";

export function App() {
  const { count, increment } = useCounter();

  return (
    <>
      <h1>NFT preview card component</h1>
      <button onClick={increment}>count</button>
      <p>{count}</p>
    </>
  );
}

export default App;
