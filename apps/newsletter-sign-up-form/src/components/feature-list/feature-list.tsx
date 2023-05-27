import Feature from "../feature";
import * as Styled from "./feature-list.style";

/* eslint-disable-next-line */
export interface FeatureListProps {
  className?: string;
}

export function FeatureList(props: FeatureListProps) {
  return (
    <Styled.List className={props.className}>
      <Feature text="Product discovery and building what matters" />
      <Feature text="Measuring to ensure updates are a success" />
      <Feature text="And much more!" />
    </Styled.List>
  );
}

export default FeatureList;
