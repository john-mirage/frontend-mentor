import { useState } from "react";
import clsx from "clsx";

/* eslint-disable-next-line */
export interface FormProps {
  className?: string;
}

export function Form(props: FormProps) {
  const [isMetric, setIsMetric] = useState<boolean>(true);

  const handleRadioChange = () => {
    setIsMetric(!isMetric);
  };

  return (
    <div
      className={clsx(
        props.className,
        "rounded-16 p-24 bg-pure-white shadow-form md:p-32"
      )}
    >
      <h2 className="mb-24 text-heading-m text-gun-metal md:mb-32">
        Enter your details below
      </h2>
      <form className="mb-24 md:mb-32">
        <div className="mb-24 grid grid-cols-2 gap-24 md:mb-32">
          <label className="relative flex flex-row items-center gap-16">
            <input
              className="absolute top-0 left-0 w-full h-full opacity-0 peer"
              name="measure-type"
              type="radio"
              checked={isMetric}
              onChange={handleRadioChange}
            />
            <span className="flex justify-center items-center rounded-full w-32 h-32 shadow-radio transition-radio peer-checked:shadow-none peer-checked:bg-blue/20 before:block before:w-16 before:h-16 before:rounded-full before:scale-0 before:bg-blue before:transition-transform peer-checked:before:scale-100"></span>
            <span className="block text-body-m-bold text-gun-metal">
              Metric
            </span>
          </label>
          <label className="relative flex flex-row items-center gap-16">
            <input
              className="absolute top-0 left-0 w-full h-full opacity-0 peer"
              name="measure-type"
              type="radio"
              checked={!isMetric}
              onChange={handleRadioChange}
            />
            <span className="flex justify-center items-center rounded-full w-32 h-32 shadow-radio transition-radio peer-checked:shadow-none peer-checked:bg-blue/20 before:block before:w-16 before:h-16 before:rounded-full before:scale-0 before:bg-blue before:transition-transform peer-checked:before:scale-100"></span>
            <span className="block text-body-m-bold text-gun-metal">
              Imperial
            </span>
          </label>
        </div>
        <div className="grid grid-cols-2 gap-16 items-end">
          {isMetric ? (
            <>
              <label className="col-span-2 md:col-auto">
                <span className="mb-8 block text-body-s text-dark-electric-blue">
                  Height
                </span>
                <span className="relative">
                  <span className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
                    cm
                  </span>
                  <input
                    className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
                    type="text"
                    placeholder="0"
                  />
                </span>
              </label>
              <label className="col-span-2 md:col-auto">
                <span className="mb-8 block text-body-s text-dark-electric-blue">
                  Weight
                </span>
                <span className="relative">
                  <span className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
                    kg
                  </span>
                  <input
                    className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
                    type="text"
                    placeholder="0"
                  />
                </span>
              </label>
            </>
          ) : (
            <>
              <label>
                <span className="mb-8 block text-body-s text-dark-electric-blue">
                  Height
                </span>
                <span className="relative">
                  <span className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
                    ft
                  </span>
                  <input
                    className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
                    type="text"
                    placeholder="0"
                  />
                </span>
              </label>
              <label>
                <span className="sr-only">Height</span>
                <span className="relative">
                  <span className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
                    in
                  </span>
                  <input
                    className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
                    type="text"
                    placeholder="0"
                  />
                </span>
              </label>
              <label>
                <span className="mb-8 block text-body-s text-dark-electric-blue">
                  Weight
                </span>
                <span className="relative">
                  <span className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
                    st
                  </span>
                  <input
                    className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
                    type="text"
                    placeholder="0"
                  />
                </span>
              </label>
              <label>
                <span className="sr-only">Weight</span>
                <span className="relative">
                  <span className="absolute top-1/2 right-24 -translate-y-1/2 text-heading-m text-blue">
                    lbs
                  </span>
                  <input
                    className="w-full pl-24 pr-72 py-20 rounded-12 border-borders border-1 text-heading-m text-gun-metal outline-blue"
                    type="text"
                    placeholder="0"
                  />
                </span>
              </label>
            </>
          )}
        </div>
      </form>
      <div className="p-32 rounded-16 bg-gradient-to-r from-form-from to-form-to">
        <p className="mb-16 text-heading-m text-pure-white">Welcome</p>
        <p className="text-body-s text-pure-white">
          Enter your height and weight and you’ll see your BMI result here
        </p>
      </div>
    </div>
  );
}

export default Form;
