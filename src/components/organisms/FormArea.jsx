import { AreaHeader } from "../atoms/headers/AreaHeader";
import { InputForm }  from "../molecules/Inputs/InputForm";

export const FormArea = (props) => {
  const {
    title, setTitle,
    time, setTime,
    records, setRecords,
    sum, setSum,
    updateSumTime,
    hasTitleError,
    hasTimeError,
    handleAdd
  } = props;

  return (
    <div className='input-area'>
      <AreaHeader>入力</AreaHeader>
      <InputForm
        title={title} setTitle={setTitle}
        time={time} setTime={setTime}
        records={records} setRecords={setRecords}
        sum={sum} setSum={setSum}
        updateSumTime={updateSumTime}
        hasTitleError={hasTitleError}
        hasTimeError={hasTimeError}
        onAdd={handleAdd}
      />
    </div>
  )
}