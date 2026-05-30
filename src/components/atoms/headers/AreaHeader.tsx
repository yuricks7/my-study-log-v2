import styled from "styled-components";

import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
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