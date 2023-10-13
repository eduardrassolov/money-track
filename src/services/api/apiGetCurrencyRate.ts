const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

export default async function apiGetCurrencyRate(from: string, to: string) {
  const res = await fetch(`${URL}/${from.toLocaleLowerCase()}/${to.toLocaleLowerCase()}.json`);
  const data = await res.json();
  console.log(data);
  return data;
}
