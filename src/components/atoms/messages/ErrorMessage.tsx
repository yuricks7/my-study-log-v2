import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
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