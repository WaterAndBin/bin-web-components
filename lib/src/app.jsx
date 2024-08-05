var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { tag, Component } from "omi";
import { tailwind } from "./tailwind";
import { Button as TButton } from "./index-lib";
let default_1 = class extends Component {
    static css = [tailwind];
    render() {
        return (<>
        <div>
          <TButton msg="测试数据">hallo,world</TButton>
        </div>
      </>);
    }
};
default_1 = __decorate([
    tag("my-app")
], default_1);
export default default_1;
