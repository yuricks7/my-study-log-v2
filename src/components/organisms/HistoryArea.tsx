import type { FC } from "react";
import type { Record } from "../../types/record";
import { AreaHeader } from "../atoms/headers/AreaHeader"
import { HistoryTable } from "../molecules/tables/HistoryTable"

type Props = {
  title: string;
  time: number;
  records: Record[];
  sum: number;
  // handleUpdate: () => void;
  // handleDelete: () => void;
}

export const HistoryArea: FC<Props> = (props) => {
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