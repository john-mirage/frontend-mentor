import { IconDelete, IconEdit, IconReply } from "../icons";
import * as Styled from "./icon-button.style";

interface IconButtonProps {
  variant: string;
}

const IconButton = ({ variant }: IconButtonProps) => {
  let icon;
  let label;
  switch (variant) {
    case "reply":
      icon = <IconReply />;
      label = "Reply";
      break;
    case "edit":
      icon = <IconEdit />;
      label = "Edit";
      break;
    case "delete":
      icon = <IconDelete />;
      label = "Delete";
      break;
  }
  return (
    <Styled.Button $color={variant === "delete" ? "red" : "blue"}>
      {icon}
      {label}
    </Styled.Button>
  );
};

export default IconButton;
