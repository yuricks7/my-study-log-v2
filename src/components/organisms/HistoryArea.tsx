import { AreaHeader } from "../atoms/headers/AreaHeader"
import { HistoryTable } from "../molecules/tables/HistoryTable"

import type { FC } from "react";
import type { StatesType } from "../../@types/StatesType";
import { useRecord } from "../../providers/RecordProvider";

export const HistoryArea: FC<Pick<StatesType, "title" | "time" | "records" | "sum" | "handleUpdate" | "handleDelete">> = () => {
  // const {
  //   title, time,
  //   records, sum,
  //   handleUpdate,
  //   handleDelete
  // } = props;

  const {
    title, time, sum, records,
    handleUpdate, handleDelete
  } = useRecord();

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