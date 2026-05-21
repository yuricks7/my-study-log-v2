import { PrimaryButton } from "../../atoms/buttons/PrimaryButton"

import { formatDate } from "../../../functions/date/formatDate";

export const HistoryTable = (props) => {
  const {
        title, time, records,
        handleUpdate,
        handleDelete
  } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>日付</th>
          <th>内容</th>
          <th>時間</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {records.map((record)=>
          <tr key={record.id}>
            <td>{formatDate(record.created_at, "/")}</td>
            <td>{record.title}</td>
            <td>{record.time}時間</td>
            <td className="btn-space">
              <PrimaryButton
                onClick={() => handleUpdate(record.id, title, time)}
              >更新</PrimaryButton>
            </td>
            <td className="btn-space">
              <PrimaryButton
                onClick={() => handleDelete(record.id)}
              >削除</PrimaryButton>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}