import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconNext = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={13}
    height={18}
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="m2 1 8 8-8 8"
      stroke="#1D2026"
      strokeWidth={3}
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconNext);
export default ForwardRef;
