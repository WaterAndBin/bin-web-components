import { Component } from "omi";
import { TButtonProps } from "./type";
export interface ButtonProps extends TButtonProps {
}
export default class TButton extends Component<ButtonProps> {
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
