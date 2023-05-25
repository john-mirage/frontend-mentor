import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgPatternCurvedLineRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={94.664}
    height={122.518}
    viewBox="0 0 94.664 122.518"
    ref={ref}
    {...props}
  >
    <path
      fill="none"
      stroke="#ACC1DE"
      d="M94.498 122.046C65.99 112.032 7.28 73.613.498.046"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPatternCurvedLineRight);
export default ForwardRef;
