import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-black text-white p-3 cursor-pointer"
      >
        Klik Aku!
      </button>
      <p>Aku sudah diklik sebanyak: {count}X</p>
    </div>
  );
}

export default Counter;
