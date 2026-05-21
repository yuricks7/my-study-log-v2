/**
 * 日付を`yyyy/mm/dd`に変換する
 *
 * @param date - 日付
 * @param delimiter - 区切り文字列
 * @returns 文字列
 */
export const formatDate = (date: Date, delimiter: string = ""): string => {
  const formattingDate: Date = new Date(date);

  const fullYear: number = formattingDate.getFullYear();
  const month   : number = formattingDate.getMonth() + 1;
  const monthStr: string = (`00${month}`).slice(-2);
  const day     : number = formattingDate.getDate();
  const dayStr  : string = (`00${day}`).slice(-2);
  return `${fullYear}${delimiter}${monthStr}${delimiter}${dayStr}`;
};