import { AreaHeader } from "../atoms/headers/AreaHeader"
import { HistoryTable } from "../molecules/tables/HistoryTable"

import type { FC } from "react";
import type { StatesType } from "../../@types/statesType";

export const HistoryArea: FC<Pick<StatesType, "title" | "time" | "records" | "sum">> = (props) => {
  const {
    title, time,
    records, sum,
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