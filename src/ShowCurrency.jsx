import React, { useState, useEffect } from 'react';
import Currency from './Currency.jsx';
import getCurrenies from './getway';

const ShowCurrency = () => {
  const [valCurrency, setValCurrency] = useState({
    usd: null,
    eur: null,
    pln: null,
    gbp: null,
    chf: null,
  });

  const infoCurrency = async () => {
    const usdVal = await getCurrenies('Долар США');
    const eurVal = await getCurrenies('Євро');
    const zlotVal = await getCurrenies('Злотий');
    const phuntVal = await getCurrenies('Фунт стерлінгів');
    const frankVal = await getCurrenies('Швейцарський франк');
    setValCurrency({ usd: +usdVal, eur: +eurVal, pln: +zlotVal, gbp: +phuntVal, chf: +frankVal });
  };

  useEffect(() => {
    infoCurrency();
  }, []);

  const { usd, eur, pln, gbp, chf } = valCurrency;

  const today = new Date().toLocaleDateString();

  return (
    <>
      <div className="header">
        <span className="header-p">{`Курси валют НБУ на ${today}`}</span>
        <div className="header-1">{`USD: ${usd}`}</div>
        <div className="header-2">{`EUR: ${eur}`}</div>
        <div className="header-1">{`PLN: ${pln}`}</div>
        <div className="header-2">{`GBP: ${gbp}`}</div>
        <div className="header-1">{`CHF: ${chf}`}</div>
      </div>
      <Currency USD={usd} EUR={eur} PLN={pln} GBP={gbp} CHF={chf} />
    </>
  );
};

export default ShowCurrency;
