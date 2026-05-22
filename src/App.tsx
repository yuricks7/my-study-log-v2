// @ts-ignore TS2882: Cannot find module or type declarations for side-effect import of './App.css'.
import './App.css';
import { useState, useEffect } from 'react';
import { DbUsecase } from "./functions/database/DbUsecase";

import { FormArea } from "./components/organisms/FormArea"
import { HistoryArea } from "./components/organisms/HistoryArea"

import type { Record } from './types/record';

// @ts-ignore TS7010: 'App', which lacks return-type annotation, implicitly has an 'any' return type.
export const App = () => {
  const [records, setRecords] = useState<Record[]>([]);
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
      const list: Record[] = await DbUsecase.fetchList();
      setRecords(list); // ← これが重要
      setSum(updateSumTime(list));
    }
    load();
  }, []);

  /**
   * 追加
   *
   * @param title
   * @param time
   */
  const handleAdd = async (title: string, time: number) => {
    if (!title) {
      setHasTitleError(true);
      return;
    }
    if (!time) {
      setHasTimeError(true);
      return;
    }

    let m: string = '';
    m += `この内容で登録しますか？\n`;
    m += `内容：${title}\n`;
    m += `時間：${time}`;
    if (!confirm(m)) return;

    // データを追加
    const newRecord: Record = await DbUsecase.add(title, time);
    const newList: Record[] = [...records, newRecord];
    setRecords(newList);
    setSum(updateSumTime(newList));

    // 初期化
    setTitle("");
    setTime(0);
  };

  /**
   * 更新
   *
   * @param id
   * @param title
   * @param time
   */
  const handleUpdate = async (id: string, title: string, time: number) => {
    if (!title) {
      setHasTitleError(true);
      return;
    }
    if (!time) {
      setHasTimeError(true);
      return;
    }

    // 更新
    const updated: Record = await DbUsecase.update(id, title, time);
    const newList: Record[] = records.map((row) =>
      row.id === id ? updated : row
    );

    setRecords(newList);
    setSum(updateSumTime(newList));

    // 初期化
    setTitle("");
    setTime(0);
  };

  /**
   * 削除
   *
   * @param id
   */
  const handleDelete = async (id: string) => {
    await DbUsecase.remove(id);

    const newList: Record[] = records.filter(
      (row) => row.id !== id
    );
    setRecords(newList);
    setSum(updateSumTime(newList));
  };

  // =====================================
  // 関数の定義
  // =====================================
  /**
   * 合計時間を算出する
   * @param arr
   * @returns 合計時間
   */
  // @ts-ignore Target signature provides too few arguments. Expected 1 or more, but got 0.
  const updateSumTime = (arr: Record[]): number => {
    let ret: number = 0;
    for (let record of arr) {
      ret += record.time;
    }

    return ret;
  }

  // =====================================
  // テンプレート
  // =====================================
  return (
    <div className="container">
      <h1>学習記録アプリ</h1>
      // @ts-ignore TS2322: Target signature provides too few arguments. Expected 1 or more, but got 0.
      <FormArea
        title={title} setTitle={setTitle}
        time={time} setTime={setTime}
        records={records} setRecords={setRecords}
        sum={sum} setSum={setSum}
        updateSumTime={updateSumTime}
        hasTitleError={hasTitleError}
        hasTimeError={hasTimeError}
        handleAdd={handleAdd}
      />
      <HistoryArea
        title={title} time={time}
        sum={sum} records={records}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;