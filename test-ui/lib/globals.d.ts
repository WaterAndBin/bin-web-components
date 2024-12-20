import { ButtonProps } from "./Button";
import * as components from "./index";
export {};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "y-button": ButtonProps;
        }
    }
}


declare module "@vue/runtime-core" {
    export interface GlobalComponents {
      "YButton": String;
    }
}