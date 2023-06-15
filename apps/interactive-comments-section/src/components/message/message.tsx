import Avatar from "../avatar";
import * as Styled from "./message.style";
import IconButton from "../icon-button";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface MessageProps {
  message: AppData.Message;
}

const Message = ({ message }: MessageProps) => {
  const currentUser = useSelector(
    (state: RootState) => state.comment.currentUser
  );
  const isOwned = currentUser.username === message.user.username;

  return (
    <Styled.Container>
      <Styled.Header>
        <Avatar
          src={message.user.image.webp}
          alt={`${message.user.username} avatar`}
        />
        <Styled.Username>{message.user.username}</Styled.Username>
        {isOwned && <Styled.Badge>you</Styled.Badge>}
        <Styled.Date>{message.createdAt}</Styled.Date>
      </Styled.Header>
      <Styled.Content>
        {message.replyingTo && (
          <Styled.ReplyingTo>@{message.replyingTo} </Styled.ReplyingTo>
        )}
        {message.content}
      </Styled.Content>
      <Styled.Footer>
        <Styled.Counter score={message.score} />
        {isOwned ? (
          <>
            <IconButton variant="delete" />
            <IconButton variant="edit" />
          </>
        ) : (
          <IconButton variant="reply" />
        )}
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Message;
