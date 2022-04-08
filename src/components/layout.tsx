import { Helmet } from "react-helmet";
import styled from "styled-components";

export const Layout = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <Helmet>
        <title>JW Crypto Tracker</title>
      </Helmet>
      <footer>
        <span>&copy; {year} JW Crypto Tracker</span>
        <small>made by Junwoo Kim</small>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 10px 0;
    background-color: ${(props) => props.theme.footerColor};
    color: ${(props) => props.theme.textColor};
    text-align: center;
    span {
      color: ${(props) => props.theme.accentColor};
      margin-right: 10px;
      font-size: 1rem;
    }
    small {
      font-size: 0.8rem;
    }
  }
`;
