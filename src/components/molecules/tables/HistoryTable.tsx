import styled from "styled-components";

import { formatDate } from "../../../functions/date/formatDate";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton"

import type { FC } from "react";
import type { StatesType } from "../../../@types/statesType";

export const HistoryTable: FC<Pick<StatesType, "title" | "time" | "records" | "handleUpdate" | "handleDelete"> = (props) => {
  const {
    title, time, records,
    handleUpdate,
    handleDelete
  } = props;

  return (
    <STable>
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
                onClick={
                  () => handleUpdate(record.id, title, time)
                }
              >更新</PrimaryButton>
            </td>
            <td className="btn-space">
              <PrimaryButton
                onClick={
                  () => handleDelete(record.id)
                }
              >削除</PrimaryButton>
            </td>
          </tr>
        )}
      </tbody>
    </STable>
  )
}

const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #79a8a9;
  border-radius: 8px;
  margin-bottom: 1em;
  border-spacing: 0;

  th, td {
    padding: 0.5em;
    border: 1px solid #79a8a9;
    background-color: #f1f1f1;
    text-align: center;
  }

  .btn-space {
    align-items: flex-start;
    text-align: center;
  }
`;