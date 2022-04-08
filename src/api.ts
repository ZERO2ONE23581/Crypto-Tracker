const BASE_URL = "https://api.coinpaprika.com/v1";

export async function fetchCrypto() {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}
export async function fetchInfo(coinId: string) {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}
export async function fetchPrice(coinId: string) {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}
