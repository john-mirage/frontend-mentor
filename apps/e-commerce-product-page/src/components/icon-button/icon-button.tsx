import { ReactNode, forwardRef } from "react";
import * as Styled from "./icon-button.style";

interface IconButtonProps {
  className?: string;
  action?: () => void;
  children?: ReactNode;
}

const IconButton = forwardRef(
  ({ className, action, children }: IconButtonProps, ref) => {
    return (
      <Styled.Container className={className} onClick={action} ref={ref}>
        <Styled.Icon>{children}</Styled.Icon>
      </Styled.Container>
    );
  }
);

export default IconButton;
