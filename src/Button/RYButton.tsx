import { h } from "omi";
import "./button";
import { ButtonProps } from "./button";
import React, { ReactNode } from "react";

function Button(props: ButtonProps) {
  return <y-button {...props}></y-button>;
}

export const RYButton = (props: ButtonProps) => {
  const res = Button(props);
  return React.createElement(
    res.nodeName as string,
    { ...res.attributes },
    res.children as ReactNode | React.ReactElement
  );
};
