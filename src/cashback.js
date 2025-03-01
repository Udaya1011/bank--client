import axios from "axios";
import { useState, useEffect } from "react";
export default function Cashback() {
  let [amount, setAmount] = useState(0);
  let [balance, setBalance] = useState(1000); // Default balance

  function handleCashback(e) {
    e.preventDefault();
    setBalance((prev) => prev - Number(amount));
  }

  return (
    <>
      <h1>Cashback</h1>
      <form onSubmit={handleCashback}>
        <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
        <button type="submit">Cashback</button>
      </form>
      <h2>Balance: {balance}</h2>
    </>
  );
}