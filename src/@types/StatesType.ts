import type { RecordType } from "./RecordType";

export type StatesType = {
  title: string;
  setTitle: (value: string) => void;

  time: number;
  setTime: (value: number) => void;

  records: RecordType[];
  setRecords: (value: RecordType[]) => void;

  sum: number;
  setSum: (value: number) => void;

  hasTitleError: boolean;
  setHasTitleError: (value: boolean) => void;

  hasTimeError: boolean;
  setHasTimeError: (value: boolean) => void;

  updateSumTime: (arr: RecordType[]) => number;

  onAdd: (title: string, time: number) => void;
  handleAdd: (title: string, time: number) => void;
  handleUpdate: (id: string, title: string, time: number) => void;
  handleDelete: (id: string) => void;
}