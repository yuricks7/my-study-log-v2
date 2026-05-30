import type { RecordType } from '../../@types/RecordType';

export const addRecord = (records: RecordType[], newRecord: RecordType): RecordType[] => {
  return [...records, newRecord];
};

export const updateRecord = (records: RecordType[], updatedRecord: RecordType): RecordType[] => {
  return records.map((record) =>
    record.id === updatedRecord.id ? updatedRecord : record)
}

export const deleteRecord = (records: RecordType[], id: string): RecordType[] => {
  return records.filter((record) => record.id !== id);
}

export const calcSum = (records: RecordType[]) => {
  return records.reduce((sum: number, record: RecordType) => sum + record.time, 0);
}