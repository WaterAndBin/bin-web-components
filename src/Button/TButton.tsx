import { h } from "omi";
import "./button";
import React, { ReactNode } from "react";
import { ButtonProps } from "./button";

function TButton(props: ButtonProps) {
  return <t-button {...props}></t-button>;
}

export const ReactButton: React.FC<ButtonProps> = (props) => {
  if (!React) {
    console.error("请使用React/Next.js");
  }
  const res = TButton(props);

  return React.createElement(
    res.nodeName as string,
    { ...res.attributes },
    res.children as ReactNode | React.ReactElement
  );
};

export default TButton;
