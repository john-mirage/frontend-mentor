import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(8)};
`;

export const Replies = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const Line = styled.div`
  flex: 0 0 ${({ theme }) => theme.pxToRem(2)};
  width: ${({ theme }) => theme.pxToRem(2)};
  background-color: ${({ theme }) => theme.color.lightGray};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.pxToRem(16)};
`;

export const ListItem = styled.li``;
