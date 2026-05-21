declare module "InputForm" {
  interface InputForm {
    props: {
      title: string,
      setTitle: string,
      time: number,
      setTime: number,
      records: [],
      setRecords: [],
      sum: number,
      setSum: number,
      updateSumTime: number,
      hasTitleError: boolean,
      hasTimeError: boolean,
      onAdd: void
    }
  }
}

declare function onChangeTitle(event: Event): void;
declare function onChangeTime(event: Event): void;