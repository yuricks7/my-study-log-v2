import type { FC } from "react";
import styled from "styled-components";

type Props = {
  children: string
}

export const AreaHeader: FC<Props> = (props) => {
  const { children } = props;

  return (
    <SH2>{children}</SH2>
  )
};

const SH2 = styled.h2`
  margin-top: 8px;
  margin-bottom: 0;
`;