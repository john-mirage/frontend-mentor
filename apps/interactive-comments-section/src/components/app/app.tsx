import GlobalStyle from "../../styles/global";
import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import * as Styled from "./app.style";
import Comment from "../comment";
import Form from "../form";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const App = () => {
  const comments = useSelector((state: RootState) => state.comment.comments);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Styled.Title>Interactive comments section</Styled.Title>
        <Styled.Main>
          <Styled.List>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </Styled.List>
          <Form variant="send" />
        </Styled.Main>
      </ThemeProvider>
    </>
  );
};

export default App;
