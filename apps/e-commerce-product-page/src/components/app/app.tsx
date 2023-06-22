import GlobalStyle from "../../styles/global";
import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./app.style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.Title>E-commerce product page</Styled.Title>
      </ThemeProvider>
    </>
  );
};

export default App;
