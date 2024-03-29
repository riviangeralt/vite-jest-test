import React, { useState } from "react";

const useCounter = (initialCount = 0) => {
    // const { initialCount = 0 } = props;
  const [count, setCount] = useState(initialCount || 0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export default useCounter;
