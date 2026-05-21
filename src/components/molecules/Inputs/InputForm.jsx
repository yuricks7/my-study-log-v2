import { useState } from 'react';

import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { ErrorMessage } from '../../atoms/messages/ErrorMessage';

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
  //  関数
  // ==========================
  const addLog = () => {
    const newLog = {
      id: Number(new Date()),
      created_at: new Date(),
      title: title,
      time: Number(time),
    }

    if (!title) {
      alert("学習した内容を入力してください");
      return;
    }
    if (!time) {
      alert("1以上の整数を入力してください");
      return;
    }

    let m = '';
    m += `この内容で登録しますか？\n`;
    m += `内容：${newLog.title}\n`;
    m += `時間：${newLog.time}`;
    if (!confirm(m)) return;

    const newRecords = [...records, newLog];
    setRecords(newRecords);

    // 初期化
    setTitle("");
    setTime(0);
    setSum(updateSumTime(newRecords));
  }

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
    <>
      <textarea
        value={title}
        placeholder="内容を入力"
        onChange={onChangeTitle}
      ></textarea>
      <input
        type="number"
        value={time}
        placeholder="整数を入力"
        onChange={onChangeTime}
      />時間
      <PrimaryButton onClick={() => onAdd(title, time)} >追加</PrimaryButton>
      {!hasTitleError && <ErrorMessage>学習した内容を入力してください</ErrorMessage>}
      {!hasTimeError  && <ErrorMessage>1以上の整数を入力してください</ErrorMessage>}
    </>
  )
}