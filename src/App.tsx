import { createGlobalStyle } from "styled-components";
import Router from "./router";
import { ReactQueryDevtools } from "react-query/devtools";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  footer{
    position: fixed;
    left: 0px;
    bottom: 0px;    
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.footerColor};
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
