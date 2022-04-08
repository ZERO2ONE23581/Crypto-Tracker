import { useQuery } from "react-query";
import { Link, Route, Routes, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchInfo, fetchPrice } from "../../api";
import Chart from "./Chart";
import Price from "./Price";

export default function Coin() {
  const { state } = useLocation() as ILocation;
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");

  const { isLoading: infoLoading, data: infoData } = useQuery<IInfo>(
    ["info", coinId!],
    () => fetchInfo(coinId!)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<IPrice>(
    ["price", coinId!],
    () => fetchPrice(coinId!)
  );
  const loading = infoLoading || priceLoading;
  return (
    <Container>
      <header>
        <h1>{state ? state : loading ? "Loading..." : infoData?.name}</h1>
        <BackBtn>
          <Link to={"/"}>
            <a>
              <span>&larr;</span>
            </a>
          </Link>
        </BackBtn>
      </header>
      {loading ? (
        "Loading..."
      ) : (
        <main>
          <BasicData>
            <li>
              <span>Symbol: </span>
              <span>{infoData?.symbol}</span>
            </li>
            <li>
              <span>Rank: </span>
              <span>{infoData?.rank}</span>
            </li>
            <li>
              <li>
                <span>Price: </span>
                <span>$ {priceData?.quotes.USD.price.toFixed(2)}</span>
              </li>
            </li>
          </BasicData>
          <Description>{infoData?.description}</Description>
          <DetailData>
            <article>
              <h1>Supply</h1>
              <ul>
                <li>
                  <span>Total: </span>
                  <span>{priceData?.total_supply}</span>
                </li>
                <li>
                  <span>Max: </span>
                  <span>{priceData?.max_supply}</span>
                </li>
              </ul>
            </article>
            <article>
              <h1>Proof Type: </h1>
              <ul>
                <li>
                  <span>{infoData?.proof_type}</span>
                </li>
              </ul>
            </article>
            <article>
              <h1>Date</h1>
              <ul>
                <li>
                  <span>Start: </span>
                  <span>{infoData?.first_data_at}</span>
                </li>
                <li>
                  <span>Last Updated: </span>
                  <span>{infoData?.last_data_at}</span>
                </li>
              </ul>
            </article>
          </DetailData>
          <article>
            <Btn isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>
                <a>Chart</a>
              </Link>
            </Btn>
            <Btn isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>
                <a>Price</a>
              </Link>
            </Btn>
          </article>
          <Routes>
            <Route path="Chart" element={<Chart coinId={coinId as string} />}></Route>
            <Route path="Price" element={<Price coinId={coinId as string} />}></Route>
          </Routes>
        </main>
      )}
    </Container>
  );
}

const Container = styled.section`
  font-size: 20px;
  margin: 0 auto;
  width: 50%;
  header {
    position: relative;
    h1 {
      text-align: center;
      font-size: 40px;
      padding: 30px 0;
      color: ${(props) => props.theme.accentColor};
    }
  }
  article {
    display: flex;
  }
`;
const BasicData = styled.ul`
  border: 1px solid white;
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;
const DetailData = styled.div`
  display: flex;
  article {
    width: 100%;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    h1 {
      text-align: center;
      border-bottom: 1px solid white;
      padding: 10px;
    }
    &:nth-child(2) {
      ul {
        li {
          justify-content: center;
        }
      }
    }
    ul {
      padding: 20px;
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
const Description = styled.p`
  padding: 20px;
  text-align: center;
  font-size: 1.2em;
  color: ${(props) => props.theme.accentColor};
`;
const Btn = styled.button<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  font-size: ${(props) => (props.isActive ? "30px" : "20px")};
  border: 3px solid
    ${(props) => (props.isActive ? props.theme.accentColor : props.theme.textColor)};
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  &:hover {
    border: 3px solid ${(props) => props.theme.accentColor};
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  a {
    display: block;
  }
`;
const BackBtn = styled.button`
  color: ${(props) => props.theme.accentColor};
  padding: 10px 20px;
  position: absolute;
  top: 30px;
  right: 0;
  border: none;
  font-weight: bold;
  a {
    font-size: 40px;
    display: block;
  }
`;
interface ILocation {
  state: string;
}
interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  tags: object;
  team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}
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
