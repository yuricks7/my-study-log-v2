import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { DbUsecase } from "./functions/database/DbUsecase";

import { FormArea } from "./components/organisms/FormArea"
import { HistoryArea } from "./components/organisms/HistoryArea"

import type { RecordType } from './@types/RecordType';

export default function App() {
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
      setRecords(list); // ← これが重要
      setSum(updateSumTime(list));
    }
    load();
  }, []);

  /**
   * 入力のバリデーション
   * @param title
   * @param time
   * @returns {boolean}
   */
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

  /**
   * 追加
   *
   * @param title
   * @param time
   */
  const handleAdd = async (title: string, time: number) => {
    if (isInvalidInput(title, time)) return;
    console.log("add");

    let m: string = '';
    m += `この内容で登録しますか？\n`;
    m += `内容：${title}\n`;
    m += `時間：${time}`;
    if (!confirm(m)) return;

    // データを追加
    const newRecord: RecordType = await DbUsecase.add(title, time);
    const newList: RecordType[] = [...records, newRecord];
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
    if (isInvalidInput(title, time)) return;
    console.log("update");

    // 更新
    const updated: RecordType = await DbUsecase.update(id, title, time);
    const newList: RecordType[] = records.map((row) =>
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

    const newList: RecordType[] = records.filter(
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
  const updateSumTime = (arr: RecordType[]): number => {
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
    <SContainer>
      <div className='container'>
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
    </SContainer>
  );
}

const SContainer = styled.div`
  body {
    margin: 10px auto;
    font-size: 18px;
    color: #3b3b3b;
  }

  .container {
    margin: 0 auto;
    padding: 8px;
    width: 600px;
    border-radius: 8px;
  }

  .history-area {
    border: 2px solid #aacfd0;
    min-height: 200px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    background-color: #c9dede;
  }

  h1 {
    margin: 0;
    padding-bottom: 8px;
    text-align: center;
  }

  p {
    margin: 0 0 8px;
  }

  /* レスポンシブ対応 */
  @media screen and (max-width: 600px) {
    table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
    }
}`;