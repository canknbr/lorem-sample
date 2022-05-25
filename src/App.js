import text from './data.js';
import React, { useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 1;
    }
    if (amount > text.length) {
      amount = 8;
    }
    setData(text.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>Lorem, ipsum dolor.</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amounts">paragraph</label>
        <input
          type="number"
          id="amounts"
          name="amounts"
          value={count}
          onChange={e => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {data.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
