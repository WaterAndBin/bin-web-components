import { Component } from "omi";
import { TButtonProps, TButtonEvent } from "./type";
export interface ButtonProps extends TButtonProps, TButtonEvent {
}
export default class YButton extends Component<ButtonProps> {
    static css: any[];
    static props: {
        size: {
            type: StringConstructor;
            default: string;
            changed(): void;
        };
    };
    clickHandle: (props: any) => void;
    render(props: ButtonProps): JSX.Element;
}
