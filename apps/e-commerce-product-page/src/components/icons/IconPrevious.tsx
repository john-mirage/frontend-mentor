import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconPrevious = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={12}
    height={18}
    viewBox="0 0 12 18"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M11 1 3 9l8 8"
      stroke="currentColor"
      strokeWidth={3}
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconPrevious);
export default ForwardRef;
