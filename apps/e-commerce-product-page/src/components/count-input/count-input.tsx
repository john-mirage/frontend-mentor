import * as Styled from "./count-input.style";

interface CountInputProps {
  className?: string;
  itemsNumber: number;
  setItemsNumber: (itemsNumber: number) => void;
}

function CountInput({
  className,
  itemsNumber,
  setItemsNumber,
}: CountInputProps) {
  function handleMinusButton() {
    if (itemsNumber > 0) setItemsNumber(itemsNumber - 1);
  }

  function handlePlusButton() {
    setItemsNumber(itemsNumber + 1);
  }

  return (
    <Styled.Container className={className}>
      <Styled.IconButton action={handleMinusButton}>
        <Styled.MinusIcon />
      </Styled.IconButton>
      <Styled.Count>{itemsNumber}</Styled.Count>
      <Styled.IconButton action={handlePlusButton}>
        <Styled.PlusIcon />
      </Styled.IconButton>
    </Styled.Container>
  );
}

export default CountInput;
