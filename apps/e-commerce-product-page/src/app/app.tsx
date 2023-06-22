import styled from "styled-components";

import NxWelcome from "./nx-welcome";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="e-commerce-product-page" />
    </StyledApp>
  );
}

export default App;
