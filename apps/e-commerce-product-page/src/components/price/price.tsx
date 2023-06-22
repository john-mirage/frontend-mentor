import * as Styled from "./price.style";

function Price({ className }) {
  return (
    <Container className={className}>
      <CurrentPrice>$125.00</CurrentPrice>
      <Discount>50%</Discount>
      <InitialPrice>$250.00</InitialPrice>
    </Container>
  );
}

export default Price;
