import { lightActions } from "../redux/slices/light-slice";
import { useDispatch, useSelector } from "react-redux";
import { useSlider } from "@mui/base";
import { AppDispatch, RootState, store } from "../redux/store";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const useLight = (lightNumber: number) => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(state =>
    eval(`state.light${lightNumber}.value`)
  );

  const up = () => {
    dispatch(lightActions.up());
    console.log(value);
  };
  const down = () => {
    dispatch(lightActions.down());
    console.log(value);
  };
  const changeByValue = (event: Event, newValue: number) => {
    dispatch(lightActions.changeByValue(newValue));
    console.log(value);
  };

  return [value, up, down, changeByValue];
};
