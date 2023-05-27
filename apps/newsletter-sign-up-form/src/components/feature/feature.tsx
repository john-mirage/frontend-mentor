import * as Styled from "./feature.style";

/* eslint-disable-next-line */
export interface FeatureProps {
  text: string;
}

export function Feature(props: FeatureProps) {
  return (
    <Styled.Item>
      <Styled.Icon />
      <Styled.Text>{props.text}</Styled.Text>
    </Styled.Item>
  );
}

export default Feature;
