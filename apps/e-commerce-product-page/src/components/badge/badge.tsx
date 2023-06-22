import * as Styled from "./badge.style";
import { ReactNode, forwardRef } from "react";

interface BadgeProps {
  className?: string;
  children: ReactNode;
}

const Badge = forwardRef(({ className, children }: BadgeProps, ref) => {
  return (
    <Styled.Container className={className} ref={ref}>
      <Styled.Label>{children}</Styled.Label>
    </Styled.Container>
  );
});

export default Badge;
