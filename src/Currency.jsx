import React, { useState } from 'react';

const Currency = ({ USD, EUR, PLN, GBP, CHF }) => {
  const [value, setValue] = useState({ start: 1, end: 1, selectStart: 1, selectEnd: 1 });

  const selectChangeStart = e => {
    setValue({
      start: value.start,
      end: ((value.start * e.target.value) / value.selectEnd).toFixed(2),
      selectStart: e.target.value,
      selectEnd: value.selectEnd,
    });
  };
  const selectChangeEnd = e => {
    setValue({
      start: value.start,
      end: ((value.start * value.selectStart) / e.target.value).toFixed(2),
      selectStart: value.selectStart,
      selectEnd: e.target.value,
    });
  };

  const handleChangeStart = e => {
    setValue({
      start: e.target.value,
      end: ((e.target.value * value.selectStart) / value.selectEnd).toFixed(2),
      selectStart: value.selectStart,
      selectEnd: value.selectEnd,
    });
  };
  const handleChangeEnd = e => {
    setValue({
      end: e.target.value,
      start: ((e.target.value * value.selectEnd) / value.selectStart).toFixed(2),
      selectStart: value.selectStart,
      selectEnd: value.selectEnd,
    });
  };

  return (
    <div className="currency-converter">
      <p className="currency-converter__p">КОНВЕРТЕР ВАЛЮТ</p>
      <div className="currency-converter__input">
        <input
          id="cc-l"
          className="currency-converter__left"
          type="number"
          onChange={handleChangeStart}
          value={value.start}
        />
        <select name="select" className="currency-converter__left" onChange={selectChangeStart}>
          <option value={1}>UAH</option>
          <option value={USD}>USD</option>
          <option value={EUR}>EUR</option>
          <option value={PLN}>PLN</option>
          <option value={GBP}>GBP</option>
          <option value={CHF}>CHF</option>
        </select>
        <input
          id="cc-r"
          className="currency-converter__right"
          type="number"
          onChange={handleChangeEnd}
          value={value.end}
        />
        <select name="select" className="currency-converter__right" onChange={selectChangeEnd}>
          <option value={1}>UAH</option>
          <option value={USD}>USD</option>
          <option value={EUR}>EUR</option>
          <option value={PLN}>PLN</option>
          <option value={GBP}>GBP</option>
          <option value={CHF}>CHF</option>
        </select>
      </div>
    </div>
  );
};

export default Currency;
