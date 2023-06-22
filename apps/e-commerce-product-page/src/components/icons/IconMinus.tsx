import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconMinus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={12}
    height={4}
    viewBox="0 0 12 4"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
        id="icon-minus_svg__a"
      />
    </defs>
    <use
      fill="currentColor"
      fillRule="nonzero"
      xlinkHref="#icon-minus_svg__a"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconMinus);
export default ForwardRef;
