/* eslint-disable-next-line */
export interface FormProps {}

export function Form(props: FormProps) {
  return (
    <div className="-mt-168 container">
      <div className="rounded-16 p-24 bg-pure-white shadow-form">
        <h2 className="mb-24 text-heading-m text-gun-metal">
          Enter your details below
        </h2>
        <form>
          <div className="mb-24 grid grid-cols-2 gap-24">
            <label className="flex flex-row items-center gap-16">
              <input name="measure-type" type="radio" />
              <span className="text-body-s text-dark-electric-blue">
                Metric
              </span>
            </label>
            <label className="flex flex-row items-center gap-16">
              <input name="measure-type" type="radio" />
              <span className="text-body-s text-dark-electric-blue">
                Imperial
              </span>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <label className="col-span-2">
              <span className="mb-8 block text-body-s text-dark-electric-blue">
                Height
              </span>
              <input type="text" />
            </label>
            <label className="col-span-2">
              <span className="mb-8 block text-body-s text-dark-electric-blue">
                Weight
              </span>
              <input type="text" />
            </label>
          </div>
        </form>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Form;
