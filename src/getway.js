async function getCurrenies(txtCur) {
  try {
    const response = await fetch(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    );
    const data = await response.json();

    const res = await data.filter(obj => obj.txt === txtCur).map(el => el.rate);

    return res[0].toFixed(2);
  } catch (e) {
    alert(e);
  }
}
export default getCurrenies;
