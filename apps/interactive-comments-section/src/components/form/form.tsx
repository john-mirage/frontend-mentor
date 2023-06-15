import Button from "../button";
import * as Styled from "./form.style";
import Avatar from "../avatar";

interface FormProps {
  variant: string;
}

const Form = ({ variant }: FormProps) => {
  return (
    <Styled.Form>
      <Styled.TextInput placeholder="Add a comment…" />
      <Avatar src="image-amyrobson.webp" alt="amyrobson avatar" />
      <Button fullWidth={false} variant="blue">
        send
      </Button>
    </Styled.Form>
  );
};

export default Form;
