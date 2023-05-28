import GlobalStyle from "../../styles/styled-components.globals";
import theme from "../../styles/styled-components.theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./app.style";
import Card from "../card";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.App>
          <Styled.Title>Newsletter sign up form</Styled.Title>
          <Card />
        </Styled.App>
      </ThemeProvider>
    </>
  );
};

export default App;
