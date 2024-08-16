import { Component } from "omi";
import { TButtonProps, TButtonEvent } from "./type";
export interface ButtonProps extends TButtonProps, TButtonEvent {
}
export default class YButton extends Component<ButtonProps> {
    static css: string;
    static props: {
        msg: {
            type: StringConstructor;
            changed(): void;
        };
    };
    clickHandle: (props: any) => void;
    render(props: ButtonProps): JSX.Element;
}
