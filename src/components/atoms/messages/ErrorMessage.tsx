import type { FC } from "react";
import styled from "styled-components";

type Props = {
  message: string
}

export const ErrorMessage: FC<Props> = (props) => {
  const { message } = props;

  return (
    <SError>{message}</SError>
  )
}

const SError = styled.p`
  color: red;
  margin-top: 8px;
  text-align: center;
`;