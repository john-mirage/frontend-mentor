import Message from "../message";
import * as Styled from "./comment.style";
import Reply from "../reply";

interface CommentProps {
  comment: AppData.Comment;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <Styled.Article>
      <Styled.Comment>
        <Message message={comment} />
      </Styled.Comment>
      {comment.replies.length > 0 && (
        <Styled.Replies>
          <Styled.Line />
          <Styled.List>
            {comment.replies.map((reply) => (
              <Styled.ListItem key={reply.id}>
                <Reply reply={reply} />
              </Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.Replies>
      )}
    </Styled.Article>
  );
};

export default Comment;
