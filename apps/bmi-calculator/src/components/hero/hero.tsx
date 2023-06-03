import { Logo } from "../icons";
import clsx from "clsx";

/* eslint-disable-next-line */
export interface HeroProps {
  className?: string;
}

export function Hero(props: HeroProps) {
  return (
    <header
      className={clsx(
        props.className,
        "pt-32 text-center lg:text-left lg:pt-72 lg:pb-216"
      )}
    >
      <a
        className="inline-block mx-auto mb-24 md:mb-40 lg:mb-128"
        href="#"
        aria-label="Go to the homepage"
      >
        <Logo className="w-40 h-40 lg:w-64 lg:h-64" />
      </a>
      <h1 className="mb-24 text-heading-l text-gun-metal lg:text-heading-xl lg:max-w-564">
        Body Mass Index Calculator
      </h1>
      <p className="text-body-m text-dark-electric-blue lg:max-w-432">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </header>
  );
}

export default Hero;
