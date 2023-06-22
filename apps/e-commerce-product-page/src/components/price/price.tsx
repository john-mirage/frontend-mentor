import * as Styled from "./price.style";

interface PriceProps {
  className?: string;
}

function Price({ className }: PriceProps) {
  return (
    <Styled.Container className={className}>
      <Styled.CurrentPrice>$125.00</Styled.CurrentPrice>
      <Styled.Discount>50%</Styled.Discount>
      <Styled.InitialPrice>$250.00</Styled.InitialPrice>
    </Styled.Container>
  );
}

export default Price;
