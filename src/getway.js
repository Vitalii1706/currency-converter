const baseUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

async function getCurrenies(txtCur) {
  const response = await fetch(baseUrl);
  const data = await response.json();

  const res = await data.filter(obj => obj.txt === txtCur).map(el => el.rate);

  return res[0].toFixed(2);
}
export default getCurrenies;
