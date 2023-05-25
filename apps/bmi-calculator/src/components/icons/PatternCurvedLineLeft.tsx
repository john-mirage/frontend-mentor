import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPatternCurvedLineLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85.831}
    height={200.501}
    viewBox="0 0 85.831 200.501"
    ref={ref}
    {...props}
  >
    <path
      fill="none"
      stroke="#ACC1DE"
      d="M82.719.092c7.831 41.7 2.31 140.08-82.43 200"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPatternCurvedLineLeft);
export default ForwardRef;
