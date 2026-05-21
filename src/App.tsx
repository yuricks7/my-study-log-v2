import './App.css';
import { useState, useEffect } from 'react';

import { DbUsecase } from "./functions/database/DbUsecase";

import { FormArea } from "./components/organisms/FormArea"
import { HistoryArea } from "./components/organisms/HistoryArea"

function App() {
  const [records, setRecords] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    async function load() {
      const list = await DbUsecase.fetchList();
      setRecords(list); // ← これが重要
      setSum(updateSumTime(list));
    }
    load();
  }, []);

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
        records={records} setRecords={setRecords}
        sum={sum} setSum={setSum}
        updateSumTime={updateSumTime}
      />
      <HistoryArea sum={sum} records={records} />
    </div>
  );
}

export default App;