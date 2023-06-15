import { IconMinus, IconPlus } from "../icons";
import * as Styled from "./counter.style";
import { useState } from "react";

interface CounterProps {
  className?: string;
  score: number;
}

const Counter = ({ className, score }: CounterProps) => {
  const [state, setState] = useState<number>(0);

  const handleMinusButton = () => {
    setState(state === -1 ? 0 : -1);
  };

  const handlePlusButton = () => {
    setState(state === 1 ? 0 : 1);
  };

  return (
    <Styled.Container className={className}>
      <Styled.Button $isActive={state === -1} onClick={handleMinusButton}>
        <IconMinus />
      </Styled.Button>
      <Styled.Count>{score + state}</Styled.Count>
      <Styled.Button $isActive={state === 1} onClick={handlePlusButton}>
        <IconPlus />
      </Styled.Button>
    </Styled.Container>
  );
};

export default Counter;
