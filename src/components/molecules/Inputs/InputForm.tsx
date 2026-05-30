import styled from "styled-components";

import { useRecord } from "../../../hooks/useRecord";

import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { ErrorMessage } from '../../atoms/messages/ErrorMessage';

export const InputForm = () => {
  // ==========================
  //  states
  // ==========================
  const {
    title, setTitle, hasTitleError,
    time, setTime, hasTimeError,
    handleAdd
  } = useRecord();

  // ==========================
  //  イベント
  // ==========================
  const onChangeTitle = (event: any) => {
    // @ts-ignore TS18047: 'event.target' is possibly 'null'.
    setTitle(event.target.value);
  };

  const onChangeTime = (event: any) => {
    // @ts-ignore TS18047: 'event.target' is possibly 'null'.
    setTime(event.target.value);
  };

  // ==========================
  //  return
  // ==========================
  return (
    <SContainer>
      <p>
        <label htmlFor="title">学習内容<br/>
          <textarea
            id="title"
            value={title}
            placeholder="内容を入力"
            onChange={onChangeTitle}
          ></textarea>
        </label>
      </p>
      <p>
        <label htmlFor="time">学習時間<br/>
          <input
            id="time"
            type="number"
            value={time}
            placeholder="整数を入力"
            onChange={onChangeTime}
          />
        </label>時間
        <PrimaryButton onClick={
          // @ts-ignore TS2722: Cannot invoke an object which is possibly 'undefined'.
          () => handleAdd(title, time)
        } >追加</PrimaryButton>
      </p>
      {hasTitleError && <ErrorMessage>学習した内容を入力してください</ErrorMessage>}
      {hasTimeError  && <ErrorMessage>1以上の整数を入力してください</ErrorMessage>}
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
  }

  input {
    border-radius: 8px;
    border: 2px solid ${borderColor};
    padding: 6px 16px;
  }

  text-align: center;
`;