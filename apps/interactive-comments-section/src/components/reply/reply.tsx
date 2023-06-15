import Message from "../message";
import * as Styled from "./reply.style";

interface ReplyProps {
  reply: AppData.Reply;
}

const Reply = ({ reply }: ReplyProps) => {
  return (
    <Styled.Container>
      <Message message={reply} />
    </Styled.Container>
  );
};

export default Reply;
