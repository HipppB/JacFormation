import React, { useState, useContext, createContext } from "react";

const CountContex = createContext({
  count: 0,
  addToCount: (value: number) => {},
});
function CounterProvider({ children }: any) {
  const [count, setCount] = useState(0);
  function addToCount(value: number) {
    setCount(count + value);
  }
  return (
    <CountContex.Provider value={{ count, addToCount }}>
      {children}
    </CountContex.Provider>
  );
}

const useCounter = () => useContext(CountContex);

export { CounterProvider, useCounter };
