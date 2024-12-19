import { Component } from "omi";
import { YButtonProps, YButtonEvent } from "./type";
export interface ButtonProps extends YButtonProps, YButtonEvent {
}
export default class YButton extends Component<{
    size: string;
}> {
    static css: any[];
    static instance: YButton;
    changeUpdate(): void;
    static props: {
        size: {
            type: StringConstructor;
            changed(): void;
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        style: {
            type: {
                new (): CSSStyleDeclaration;
                prototype: CSSStyleDeclaration;
            };
            default: string;
        };
    };
    render(props: ButtonProps): JSX.Element;
}
