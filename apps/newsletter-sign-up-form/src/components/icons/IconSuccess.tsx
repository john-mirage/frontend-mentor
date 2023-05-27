import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconSuccess = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    viewBox="0 0 64 64"
    ref={ref}
    {...props}
  >
    <defs>
      <linearGradient
        id="icon-success_svg__a"
        x1="100%"
        x2="0%"
        y1="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#FF6A3A" />
        <stop offset="100%" stopColor="#FF527B" />
      </linearGradient>
    </defs>
    <g fill="none">
      <circle cx={32} cy={32} r={32} fill="url(#icon-success_svg__a)" />
      <path
        stroke="#FFF"
        strokeWidth={4}
        d="m18.286 34.686 8.334 7.98 19.094-18.285"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SvgIconSuccess);
export default ForwardRef;
