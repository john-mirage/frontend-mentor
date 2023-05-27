import BmiExplanation from "../bmi-explanation";
import BmiLimitation from "../bmi-limitation";
import Form from "../form";
import Hero from "../hero";

export function App() {
  return (
    <div className="relative pb-96 lg:pb-128">
      <div className="absolute z-10 top-0 right-0 w-full h-640 bg-gradient-to-br from-hero-from to-hero-to rounded-b-35 lg:right-1/2 lg:translate-x-[300px] lg:w-960 lg:h-737"></div>
      <div className="relative z-50 container">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-end">
          <Hero className="mb-48 lg:mb-0" />
          <Form className="mb-72 md:mb-96 lg:w-564" />
        </div>
        <BmiExplanation classname="mb-128 md:mb-156 lg:mb-216" />
        <BmiLimitation />
      </div>
    </div>
  );
}

export default App;
