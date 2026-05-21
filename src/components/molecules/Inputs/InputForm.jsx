import styled from "styled-components";

import { useState } from 'react';

import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { ErrorMessage } from '../../atoms/messages/ErrorMessage';

import * as lib from "InputForm"

export const InputForm = (props) => {
  // ==========================
  //  states
  // ==========================
  const {
    title, setTitle,
    time, setTime,
    records, setRecords,
    sum, setSum,
    updateSumTime,
    hasTitleError,
    hasTimeError,
    onAdd
  } = props;

  // ==========================
  //  イベント
  // ==========================
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeTime = (event) => {
    setTime(event.target.value);
  };

  // ==========================
  //  return
  // ==========================
  return (
    <SContainer>
      <textarea
        value={title}
        aria-label="title"
        placeholder="内容を入力"
        onChange={onChangeTitle}
      ></textarea>
      <input
        type="number"
        aria-label="time"
        value={time}
        placeholder="整数を入力"
        onChange={onChangeTime}
      />時間
      <PrimaryButton onClick={() => onAdd(title, time)} >追加</PrimaryButton>
      {!hasTitleError && <ErrorMessage>学習した内容を入力してください</ErrorMessage>}
      {!hasTimeError  && <ErrorMessage>1以上の整数を入力してください</ErrorMessage>}
    </SContainer>
  )
}

const borderColor = "#79a8a9";
const SContainer = styled.div`
  form {
    width: fit-content;
    margin: auto;
  }

  form button {
    text-align: right;
  }

  textarea {
    border-radius: 8px;
    border: 2px solid ${borderColor};
    padding: 6px 16px;

    width:  460px;
    height: 100px;
    margin: 0 auto; /* 効かない */
  }

  input {
    border-radius: 8px;
    border: 2px solid ${borderColor};
    padding: 6px 16px;
  }
`;