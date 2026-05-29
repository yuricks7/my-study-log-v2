
import { useContext } from "react"

import { RecordContext } from "../providers/RecordProvider"

import type { StatesType } from "../@types/StatesType"

// コンテキストをエクスポート
// @ts-ignore TS2322: Type 'unknown' is not assignable to type 'StatesType'.
export const useRecord = (): StatesType => useContext(RecordContext);