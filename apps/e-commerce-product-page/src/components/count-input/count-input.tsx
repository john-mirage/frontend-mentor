import * as Styled from "./count-input.style";

function CountInput({ className, itemsNumber, setItemsNumber }) {
  function handleMinusButton(event) {
    event.preventDefault();
    if (itemsNumber > 0) setItemsNumber(itemsNumber - 1);
  }

  function handlePlusButton(event) {
    event.preventDefault();
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
