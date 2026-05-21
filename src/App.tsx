import './App.css';
import { useState, useEffect } from 'react';

import { DbUsecase } from "./functions/database/DbUsecase";

import { AreaHeader }   from "./components/atoms/headers/AreaHeader";
import { InputForm }    from "./components/molecules/Inputs/InputForm";
import { HistoryTable } from "./components/molecules/tables/HistoryTable";

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
  // 関数の定義
  // =====================================
  return (
    <div className="container">
      <h1>学習記録アプリ</h1>
      <div className='input-area'>
        <AreaHeader>入力</AreaHeader>
        <InputForm
          records={records} setRecords={setRecords}
          sum={sum} setSum={setSum}
          updateSumTime={updateSumTime}/>
      </div>

      <div className='history-area'>
        <AreaHeader>履歴</AreaHeader>
        <p>合計：{sum}時間</p>
        <HistoryTable records={records}/>
      </div>
    </div>
  );
}

export default App;