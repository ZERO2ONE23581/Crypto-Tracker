import { createGlobalStyle } from "styled-components";
import Router from "./router";
import { ReactQueryDevtools } from "react-query/devtools";
import { Layout } from "./components/layout";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");  
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};    
    font-family: "Roboto", sans-serif;
  } 
`;
