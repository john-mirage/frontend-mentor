import { Logo } from "../icons";

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <header className="relative pt-32 pb-216 text-center lg:text-left lg:pt-72">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-hero-from to-hero-to rounded-b-35 lg:container"></div>
      </div>
      <div className="relative z-50 container">
        <a className="inline-block mx-auto mb-24 lg:mb-128" href="#">
          <Logo className="w-40 h-40 lg:w-64 lg:h-64" />
        </a>
        <h1 className="mb-24 text-heading-l text-gun-metal lg:text-heading-xl lg:max-w-564">
          Body Mass Index Calculator
        </h1>
        <p className="text-body-m text-dark-electric-blue lg:max-w-432">
          Better understand your weight in relation to your height using our
          body mass index (BM) calculator. While BMI is not the sole determinant
          of a healthy weight, it offers a valuable starting point to evaluate
          your overall health and well-being.
        </p>
      </div>
    </header>
  );
}

export default Hero;
