import styled from "styled-components";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { fetchCrypto } from "../api";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

interface ICrypto {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const COINLENGTH = 10;

function Home() {
  const { isLoading, data } = useQuery<ICrypto[]>("Crypto", fetchCrypto);
  console.log(data);

  return (
    <>
      <Container>
        <Helmet>
          <title>JW Crypto Tracker</title>
        </Helmet>

        <header>
          <h1>
            {year} Top {COINLENGTH} Crypto Currencies{" "}
          </h1>
        </header>

        <main>
          {isLoading ? (
            <span>"Loading..."</span>
          ) : (
            <CoinList>
              {data?.slice(0, COINLENGTH).map((crypto) => (
                <article>
                  <Link to={crypto.id} state={crypto.name}>
                    <ul>
                      <li key={crypto.id}>{crypto.rank}</li>
                      <li key={crypto.id}>{crypto.symbol}</li>
                      <li key={crypto.id}>{crypto.name}</li>
                      <li>
                        <img
                          key={crypto.symbol}
                          src={`https://cryptocurrencyliveprices.com/img/${crypto.id}.png`}
                          alt="코인로고 이미지"
                        />
                      </li>
                    </ul>
                  </Link>
                </article>
              ))}
            </CoinList>
          )}
        </main>

        <footer>&copy; {year} JW Crypto Tracker</footer>
      </Container>
    </>
  );
}

export default Home;

const CoinList = styled.article`
  width: 65%;
  margin: 0 auto;
  ul {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &:hover {
      li {
        border: 3px solid ${(props) => props.theme.accentColor};
        color: ${(props) => props.theme.accentColor};
      }
    }
    li {
      font-size: 1rem;
      border: 3px solid ${(props) => props.theme.textColor};

      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      img {
        width: 45px;
        height: 45px;
      }
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-right: none;
      }
      &:nth-child(1) {
        width: 10%;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) {
        font-size: 1.5rem;
        width: 50%;
      }
      &:nth-child(4) {
        width: 20%;
      }
    }
  }
`;

const Container = styled.section`
  margin: 0 auto;
  text-align: center;
  width: 50%;
  header {
    h1 {
      font-size: 40px;
      padding: 30px 0;
      color: ${(props) => props.theme.accentColor};
    }
  }
  main {
    span {
      display: block;
      font-size: 40px;
      margin-top: 40px;
      color: ${(props) => props.theme.accentColor};
    }
  }
`;
