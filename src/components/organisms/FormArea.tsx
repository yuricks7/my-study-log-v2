import styled from "styled-components";

import { AreaHeader } from "../atoms/headers/AreaHeader";
import { InputForm }  from "../molecules/Inputs/InputForm";

import type { FC } from "react";
import type { StatesType } from "../../@types/statesType";

export const FormArea: FC<Omit<StatesType, "setHasTitleError" | "setHasTimeError" | "onAdd" | "handleUpdate" | "handleDelete">> = (props) => {

  const {
    title, setTitle,
    time, setTime,
    records, setRecords,
    sum, setSum,
    updateSumTime,
    hasTitleError,
    hasTimeError,
    handleAdd
  } = props;

  return (
    <SContainer>
      <AreaHeader>入力</AreaHeader>
      <InputForm
        title={title} setTitle={setTitle}
        time={time} setTime={setTime}
        records={records} setRecords={setRecords}
        sum={sum} setSum={setSum}
        updateSumTime={updateSumTime}
        hasTitleError={hasTitleError}
        hasTimeError={hasTimeError}
        onAdd={handleAdd}
      />
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