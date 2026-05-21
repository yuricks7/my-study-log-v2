import './App.css';
import { useState } from 'react';

import { AreaHeader }    from "./__components__/atoms/headers/AreaHeader";
import { InputForm }     from "./__components__/molecules/Inputs/InputForm";
import { HistoryTable }  from "./__components__/molecules/tables/HistoryTable";

function App() {
  // テストデータ
  const sample = [{
    id: 123456789,
    created_at: new Date(),
    title: "数学",
    time: 3,
  }, {
    id: 987654321,
    created_at: new Date(),
    title: "英語",
    time: 1,
  }, {
    id: 111111111,
    created_at: new Date(),
    title: "音楽",
    time: 5,
  }];

  // states
  const [records,  setRecords]  = useState(sample);

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
  const [sum, setSum]   = useState(updateSumTime(sample));

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