import { AreaHeader } from "../atoms/headers/AreaHeader"
import { HistoryTable } from "../molecules/tables/HistoryTable"

export const HistoryArea = (props) => {
  const {
    title, time,
    sum, records,
    handleUpdate,
    handleDelete
  } = props;

  return (
    <div className='history-area'>
      <AreaHeader>履歴</AreaHeader>
      <p>合計：{sum}時間</p>
      <HistoryTable
        title={title} time={time}
        records={records}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </div>
  )
}