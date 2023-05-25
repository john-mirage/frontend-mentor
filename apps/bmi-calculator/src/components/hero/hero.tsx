import { Logo } from "../icons";

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <header className="pt-32 pb-216 text-center rounded-b-35 bg-gradient-to-br from-gradient-from to-gradient-to">
      <div className="container">
        <a className="inline-block mx-auto mb-24" href="#">
          <Logo className="w-40 h-40" />
        </a>
        <h1 className="mb-24 text-heading-l text-gun-metal">
          Body Mass Index Calculator
        </h1>
        <p className="text-body-m text-dark-electric-blue">
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
