import type { RecordType } from "./RecordType";

export type StatesType = {
  title: string;
  setTitle: () => string;

  time: number;
  setTime: () => number;

  records: RecordType[];
  setRecords: () => RecordType[];

  sum: number;
  setSum: () => number;

  hasTitleError: boolean;
  setHasTitleError: () => boolean;

  hasTimeError: boolean;
  setHasTimeError: () => boolean;

  updateSumTime: (arr: RecordType[]) => number;

  onAdd: (title: string, time: number) => void;
  handleAdd: (title: string, time: number) => void;
  handleUpdate: (id: string, title: string, time: number) => void;
  handleDelete: (id: string) => void;
}