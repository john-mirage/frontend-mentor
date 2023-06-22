import React from "react";
import * as Styled from "./icon-button.style";

const IconButton = React.forwardRef(({ className, action, children }, ref) => {
  return (
    <Styled.Container className={className} onClick={action} ref={ref}>
      <Styled.Icon>{children}</Styled.Icon>
    </Styled.Container>
  );
});

export default IconButton;
