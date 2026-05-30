import styled from "styled-components";

import { AreaHeader } from "../atoms/headers/AreaHeader";
import { InputForm }  from "../molecules/Inputs/InputForm";

export const FormArea = () => {

  return (
    <SContainer>
      <AreaHeader>入力</AreaHeader>
      <InputForm />
    </SContainer>
  )
}

const SContainer = styled.div`
  border: 2px solid #aacfd0;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;