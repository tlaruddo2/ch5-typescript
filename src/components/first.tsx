import React from "react";

interface Props {
  title: string;
}
//return: JSX.Element
export const First = (props: Props) => {
  return <div>{props.title}</div>;
};
