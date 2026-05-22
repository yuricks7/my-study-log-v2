import type { FC } from "react";
import styled from "styled-components";

type Props = {
  children: string
}

export const ErrorMessage: FC<Props> = (props) => {
  const { children } = props;

  return (
    <SError>{children}</SError>
  )
}

const SError = styled.p`
  color: red;
  margin-top: 8px;
  text-align: center;
`;