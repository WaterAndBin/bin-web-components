import { h } from "omi";
import "./button";
import { ButtonProps } from "./button";
import { newInstance } from "../utils/instance";

function Button(props: ButtonProps): JSX.Element {
  return <y-button {...props}></y-button>;
}

export const YButton = (props: ButtonProps) => {
  return newInstance(Button, props);
};
