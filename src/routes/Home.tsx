import styled from "styled-components";
import Helmet from "react-helmet";
import { useQuery } from "react-query";
import { fetchCrypto } from "../api";

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

function Home() {
  const { isLoading, data } = useQuery<ICrypto[]>("Crypto", fetchCrypto);

  return (
    <>
      <Container>
        <header>
          <Helmet>
            <title>JW Crypto Tracker</title>
          </Helmet>
        </header>

        <main>
          <h1>{year} Top 10 Crypto Currencies </h1>
          <CoinList>
            {data?.slice(0, 10).map((coin) => (
              <article>
                <ul>
                  <li>{coin.rank}</li>
                  <li>{coin.symbol}</li>
                  <li>{coin.name}</li>
                </ul>
              </article>
            ))}
          </CoinList>
        </main>
        <footer>&copy; {year} JW Crypto Tracker</footer>
      </Container>
    </>
  );
}

export default Home;

const CoinList = styled.article`
  padding: 0 25px;
  article {
    margin: 0 auto;
    width: 60%;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      border: 1px solid ${(props) => props.theme.accentColor};
      padding: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      &:nth-child(1) {
        width: 10%;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(3) {
        width: 70%;
      }
    }
  }
`;

const Container = styled.section`
  border: 1px solid white;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  width: 50%;
  font-size: 1.2rem;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.accentColor};
    margin: 5% 0;
  }
`;
