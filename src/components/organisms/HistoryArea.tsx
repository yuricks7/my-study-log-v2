import { AreaHeader } from "../atoms/headers/AreaHeader"
import { HistoryTable } from "../molecules/tables/HistoryTable"

import { useRecord } from "../../providers/RecordProvider";

export const HistoryArea = () => {

  const { sum } = useRecord();

  return (
    <div className='history-area'>
      <AreaHeader>履歴</AreaHeader>
      <p>合計：{sum}時間</p>
      <HistoryTable />
    </div>
  )
}