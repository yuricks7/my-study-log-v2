import { PrimaryButton } from "../../atoms/buttons/PrimaryButton"

import { formatDate } from "../../../Date/formatDate";

export const HistoryTable = (props) => {
  const { records } = props;

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
            <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>更新</PrimaryButton></td>
            <td className="btn-space"><PrimaryButton onClick={() => alert("Hi!")}>削除</PrimaryButton></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}