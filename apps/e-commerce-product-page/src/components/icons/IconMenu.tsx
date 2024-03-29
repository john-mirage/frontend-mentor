import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconMenu = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={16}
    height={15}
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMenu);
export default ForwardRef;
