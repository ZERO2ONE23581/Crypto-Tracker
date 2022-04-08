import { createGlobalStyle } from "styled-components";
import Router from "./router";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");

  body{
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};    
    font-family: "Roboto", sans-serif;
  }  
  main{
    height: 95vh;
  }
  footer{
    position: fixed;
    left: 0px;
    bottom: 0px;    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    width: 100%;
    background-color: ${(props) => props.theme.footerColor};    
    color: ${(props) => props.theme.accentColor};   
    font-size: .9rem;
  }
`;
