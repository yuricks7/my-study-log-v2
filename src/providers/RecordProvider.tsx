import { createContext, useContext, useEffect, useState } from "react";
import { addRecord, calcSum } from "../functions/database/recordUtils";

import { DbUsecase } from "../functions/database/DbUsecase";

import type { RecordType } from "../@types/RecordType";

const RecordContext = createContext();

export const RecordProvider = (props) => {
  const { children } = props;

  const [records, setRecords] = useState<RecordType[]>([]);
  const [sum, setSum] = useState<number>(0);

  const [title, setTitle] = useState<string>("");
  const [time,  setTime]  = useState<number>(0);

  const [hasTitleError, setHasTitleError] = useState<boolean>(false);
  const [hasTimeError, setHasTimeError] = useState<boolean>(false);

  // =====================================
  // データベース操作
  // =====================================
  useEffect(() => {
    async function load() {
      const list: RecordType[] = await DbUsecase.fetchList();
      setRecords(list);
      setSum(calcSum(list));
    }
    load();
  }, []);

  const handleAdd = async (title: string, time: number) => {
    // バリデーション
    if (isInvalidInput(title, time)) return;
    if (!canContinue(title, time, "追加")) return;

    // データを追加
    const newRecord = await DbUsecase.add(title, time);
    const newList = addRecord(records, newRecord);
    setRecords(newList);
    setSum(calcSum(newList));

    // 初期化
    setTitle("");
    setTime(0);
  }

  // =====================================
  // 関数の定義
  // =====================================
  const isInvalidInput = (title: string, time: number): boolean => {
    if (title === "" && time <= 0) {
      setHasTitleError(true);
      setHasTimeError(true);
      return true;

    } else if (title === "") {
      setHasTitleError(true);
      setHasTimeError(false);
      return true;

    } else if (time <= 0) {
      setHasTitleError(false);
      setHasTimeError(true);
      return true;
    }

    setHasTitleError(false);
    setHasTimeError(false);
    return false;
  }

  const canContinue = (title: string, time: number, action: string): boolean => {
    let m: string = '';
    m += `この内容で${action}しますか？\n`;
    m += `内容：${title}\n`;
    m += `時間：${time}時間`;
    if (!confirm(m)) return false;

    return true;
  }

  const value = {
    title,
    hasTitleError,
    time,
    hasTimeError,
    records,
    sum,
    handleAdd,
  }

  return (
    <RecordContext.Provider value={value}>
      {children}
    </RecordContext.Provider>
  )
}

export const useRecord = () => useContext(RecordContext);