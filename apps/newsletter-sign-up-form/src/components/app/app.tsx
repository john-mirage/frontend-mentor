import GlobalStyle from "../../styles/styled-components.globals";
import theme from "../../styles/styled-components.theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./app.style";
import FormCard from "../form-card";
import { useState } from "react";
import SuccessCard from "../success-card";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.App>
          <Styled.Title>Newsletter sign up form</Styled.Title>
          <AnimatePresence mode="wait">
            {success ? (
              <SuccessCard
                key="success-card"
                email={email}
                setSuccess={setSuccess}
              />
            ) : (
              <FormCard
                key="form-card"
                setSuccess={setSuccess}
                setEmail={setEmail}
              />
            )}
          </AnimatePresence>
        </Styled.App>
      </ThemeProvider>
    </>
  );
};

export default App;
