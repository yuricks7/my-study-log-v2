import { AreaHeader } from "../atoms/headers/AreaHeader"
import { HistoryTable } from "../molecules/tables/HistoryTable"

export const HistoryArea = (props) => {
  const { sum, records } = props;
  return (
    <div className='history-area'>
      <AreaHeader>履歴</AreaHeader>
      <p>合計：{sum}時間</p>
      <HistoryTable records={records}/>
    </div>
  )
}