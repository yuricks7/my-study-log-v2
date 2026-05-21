import './App.css';
import { useState, useEffect } from 'react';

import { DbUsecase } from "./functions/database/DbUsecase";

import { FormArea } from "./components/organisms/FormArea"
import { HistoryArea } from "./components/organisms/HistoryArea"

function App() {
  const [records, setRecords] = useState([]);
  const [sum, setSum] = useState(0);

  const [title, setTitle] = useState("");
  const [time,  setTime]  = useState(0);

  const [hasTitleError, setHasTitleError] = useState(false);
  const [hasTimeError, setHasTimeError] = useState(false);

  // =====================================
  // データベース操作
  // =====================================
  useEffect(() => {
    async function load() {
      const list = await DbUsecase.fetchList();
      setRecords(list); // ← これが重要
      setSum(updateSumTime(list));
    }
    load();
  }, []);

  /**
   * 追加
   *
   * @param title {string}
   * @param time {number}
   */
  const handleAdd = async (title, time) => {
    if (!title) {
      setHasTitleError(true);
      return;
    }
    if (!time) {
      setHasTimeError(true);
      return;
    }

    // データを追加
    const newRecord = await DbUsecase.add(title, time);
    const newList = [...records, newRecord];
    setRecords(newList);
    setSum(updateSumTime(newList));

    // 初期化
    setTitle("");
    setTime(0);
  };

  /**
   * 更新
   *
   * @param id {string}
   * @param title {string}
   * @param time {number}
   */
  const handleUpdate = async (id, title, time) => {
    if (!title) {
      setHasTitleError(true);
      return;
    }
    if (!time) {
      setHasTimeError(true);
      return;
    }

    // 更新
    const updated = await DbUsecase.update(id, title, time);
    const newList = records.map((row) =>
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
   * @param id {string}
   */
  const handleDelete = async (id) => {
    await DbUsecase.remove(id);

    const newList = records.filter((r) => r.id !== id);
    setRecords(newList);
    setSum(updateSumTime(newList));
  };

  // =====================================
  // 関数の定義
  // =====================================
  /**
   * 合計時間を算出する
   *
   * @returns {number}
   */
  const updateSumTime = (arr) => {
    let ret = 0;
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