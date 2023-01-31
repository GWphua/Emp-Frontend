import { TypedUseSelectorHook, useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "."

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector