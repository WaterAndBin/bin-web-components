import { ButtonProps } from "./Button";
export {};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "y-button": ButtonProps;
        }
    }
}
