import { lightActions } from "../redux/slices/light-slice";
import { useDispatch, useSelector } from "react-redux";
import { useSlider } from "@mui/base";
import { store } from "../redux/store";

interface LightState {}

export const useLight = (lightNumber: number) => {
  const dispatch = useDispatch();
  const value = useSelector((state: LightState) => {
    //assign dynmaic variable name
    return;
  });
};
