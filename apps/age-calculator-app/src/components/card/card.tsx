import Form from "../form";
import Result from "../result";
import Separator from "../separator";

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
    <article className="@container w-full max-w-840">
      <div className="px-24 py-48 bg-white rounded-tl-24 rounded-tr-24 rounded-bl-24 rounded-br-100 @card:rounded-br-200">
        <Form className="mb-32" />
        <Separator className="mb-32" />
        <Result />
      </div>
    </article>
  );
}

export default Card;
