import { AreaHeader } from "../atoms/headers/AreaHeader";
import { InputForm }  from "../molecules/Inputs/InputForm";

export const FormArea = (props) => {
  const {
    records, setRecords,
    sum, setSum,
    updateSumTime
  } = props;

  return (
    <div className='input-area'>
      <AreaHeader>入力</AreaHeader>
      <InputForm
        records={records} setRecords={setRecords}
        sum={sum} setSum={setSum}
        updateSumTime={updateSumTime}/>
    </div>
  )
}