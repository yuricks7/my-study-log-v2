import { useContext } from "react";
import { ErrorContext } from "../../providers/ErrorProvider";


/**
 * 入力のバリデーション
 * @param title
 * @param time
 * @returns {boolean}
 */
export const hasError = (title: string, time: number): boolean => {

  const context = useContext(ErrorContext);
  console.log(context);
  console.log("Hi!");


  // if (title === "" && time <= 0) {
  //   setHasTitleError(true);
  //   setHasTimeError(true);
  //   return true;

  // } else if (title === "") {
  //   setHasTitleError(true);
  //   setHasTimeError(false);
  //   return true;

  // } else if (time <= 0) {
  //   setHasTitleError(false);
  //   setHasTimeError(true);
  //   return true;
  // }

  // setHasTitleError(false);
  // setHasTimeError(false);
  // return false;
}