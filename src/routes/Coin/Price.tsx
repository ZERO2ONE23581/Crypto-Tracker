import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchPrice } from "../../api";

interface IPrice {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
interface PriceProps {
  coinId: string;
}

export default function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPrice>(["Crypto-price", coinId!], () =>
    fetchPrice(coinId!)
  );
  return (
    <>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <Container>
          <article>
            <h1>ALL TIME HIGH</h1>
            <ul>
              <li>
                <span>Price: </span>
                <span>{data?.quotes.USD.ath_price}</span>
              </li>
              <li>
                <span>Date: </span>
                <span>{data?.quotes.USD.ath_date}</span>
              </li>
            </ul>
          </article>
          <article>
            <h1>MARKET CAPITAL</h1>
            <ul>
              <li>
                <span>Price: </span>
                <span>{data?.quotes.USD.market_cap}</span>
              </li>
              <li>
                <span>Change Rate in 24 hrs</span>
                <span>{data?.quotes.USD.market_cap_change_24h}%</span>
              </li>
            </ul>
          </article>
          <article>
            <h1>Change Rate (%)</h1>
            <ul>
              <li>
                <span>In Last 24 hrs: </span>
                <span>{data?.quotes.USD.percent_change_24h}%</span>
              </li>
              <li>
                <span>In Last 7 days: </span>
                <span>{data?.quotes.USD.percent_change_7d}%</span>
              </li>
              <li>
                <span>In Last 30 days: </span>
                <span>{data?.quotes.USD.percent_change_30d}%</span>
              </li>
              <li>
                <span>In Last Year: </span>
                <span>{data?.quotes.USD.percent_change_1y}%</span>
              </li>
            </ul>
          </article>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid red;
  padding-top: 20px;
  article {
    ul {
      li {
        padding: 20px;
        display: flex;
        justify-content: space-between;
        span {
        }
      }
    }
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 3px solid ${(props) => props.theme.accentColor};
    &:nth-child(1),
    &:nth-child(2) {
      border-right: none;
    }
    h1 {
      padding: 10px;
      border-bottom: 3px solid ${(props) => props.theme.accentColor};
      text-align: center;
    }
  }
`;
