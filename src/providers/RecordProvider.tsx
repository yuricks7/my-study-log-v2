import { createContext, useContext, useEffect, useState } from "react";
import { addRecord, updateRecord, deleteRecord, calcSum } from "../functions/database/recordUtils";

import { dbUsecase } from "../functions/database/Supabase/dbUsecase";

import type { RecordType } from "../@types/RecordType";

// コンテキストを定義
const RecordContext = createContext();

// プロバイダー
export const RecordProvider = (props) => {
  const { children } = props;

  const [records, setRecords] = useState<RecordType[]>([]);
  const [sum, setSum] = useState<number>(0);

  const [title, setTitle] = useState<string>("");
  const [time,  setTime]  = useState<number>(0);

  const [hasTitleError, setTitleError] = useState<boolean>(false);
  const [hasTimeError, setTimeError] = useState<boolean>(false);

  // =====================================
  // データベース操作
  // =====================================
  useEffect(() => {
    async function load() {
      const list: RecordType[] = await dbUsecase.fetchList();
      setRecords(list);
      setSum(calcSum(list));
    }
    load();
  }, []);

  const handleAdd = async (title: string, time: number) => {
    // バリデーション
    if (hasInputError(title, time)) return;
    if (!confirmInput(title, time, "追加")) return;

    // データを追加
    const newRecord = await dbUsecase.add(title, time);
    const newList = addRecord(records, newRecord);
    setRecords(newList);
    setSum(calcSum(newList));

    initializeForm();
  }

  const handleUpdate = async (id: string, title: string, time: number) => {
    // バリデーション
    if (hasInputError(title, time)) return;
    if (!confirmInput(title, time, "追加")) return;

    // データを更新
    const newRecord = await dbUsecase.update(id, title, time);
    const newList = updateRecord(records, newRecord);
    setRecords(newList);
    setSum(calcSum(newList));

    initializeForm();
  }

  const handleDelete = async (id: string) => {
    await dbUsecase.remove(id);
    const newList = deleteRecord(records, id);
    setRecords(newList);
    setSum(calcSum(newList));
  }

  // =====================================
  // 関数の定義
  // =====================================
  const hasInputError = (title: string, time: number): boolean => {
    if (title === "" && time <= 0) {
      setTitleError(true);
      setTimeError(true);
      return true;

    } else if (title === "") {
      setTitleError(true);
      setTimeError(false);
      return true;

    } else if (time <= 0) {
      setTitleError(false);
      setTimeError(true);
      return true;
    }

    setTitleError(false);
    setTimeError(false);
    return false;
  }

  const confirmInput = (title: string, time: number, action: string): boolean => {
    let m: string = '';
    m += `この内容で${action}しますか？\n`;
    m += `内容：${title}\n`;
    m += `時間：${time}時間`;
    if (!confirm(m)) return false;

    return true;
  }

  const initializeForm = () => {
    setTitle("");
    setTime(0);
  }

  const value = {
    title,
    setTitle,
    hasTitleError,
    time,
    setTime,
    hasTimeError,
    records,
    sum,
    handleAdd,
    handleUpdate,
    handleDelete,
  }

  return (
    <RecordContext.Provider value={value}>
      {children}
    </RecordContext.Provider>
  )
}

// コンテキストをエクスポート
export const useRecord = () => useContext(RecordContext);