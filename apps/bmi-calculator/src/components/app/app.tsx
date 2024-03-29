import AdviceList from "../advice-list";
import LimitationList from "../limitation-list";
import Hero from "../hero";
import Bmi from "../bmi";

export function App() {
  return (
    <div className="relative pb-96 lg:pb-128">
      <div className="absolute z-10 top-0 right-0 w-full h-640 bg-gradient-to-br from-hero-from to-hero-to rounded-b-35 lg:right-1/2 lg:translate-x-[300px] lg:w-960 lg:h-737"></div>
      <main className="relative z-50">
        <div className="container lg:flex lg:flex-row lg:justify-between lg:items-start">
          <Hero className="mb-48 lg:mb-0" />
          <Bmi className="mb-72 md:mb-96 lg:mt-168 lg:mb-0 lg:w-564" />
        </div>
        <AdviceList classname="mb-72 md:mb-96 lg:mb-120" />
        <LimitationList />
      </main>
    </div>
  );
}

export default App;
