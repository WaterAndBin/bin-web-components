import { h, tag, Component, signal } from 'omi';
import '..';
import { tailwind } from '../../style/index';

const text = signal<boolean>(false);

@tag('text-switch')
export default class extends Component {
  static css = [tailwind];

  changeLoading = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  };

  render() {
    return (
      <div>
        <div className="mb-3 min-w-60">
          <h2 className="py-3 font-bold text-2xl">开关</h2>
          <div className="w-full">
            <span>基础的开关：</span>
            <y-switch value={text} onChange={(data) => console.log(data)} />
          </div>
          {/* <div className="flex justify-center items-center">
            <span>尺寸不同的开关：</span>
            <y-switch size="small" />
            <y-switch />
            <y-switch size="large" />
          </div>
          <div className="flex justify-center items-center">
            <span>默认打开的开关：</span>
            <y-switch size="small" value={true} />
            <y-switch value={true} />
            <y-switch size="large" value={true} />
          </div>
          <div className="flex justify-center items-center">
            <span>禁用的开关：</span>
            <y-switch disabled size="small" />
            <y-switch disabled value={true} size="small" />
            <y-switch disabled />
            <y-switch disabled value={true} />
            <y-switch disabled size="large" />
            <y-switch disabled value={true} size="large" />
          </div>
          <div className="flex justify-center items-center">
            <span>自定义颜色：</span>
            <y-switch checkedColor="#F53F3F" uncheckedColor="green" />
          </div>
          <div className="flex justify-center items-center">
            <span> 自定义开关的打开/关闭状态的文字：</span>
            <y-switch>
              <span slot="checked">OFF</span>
              <span slot="unchecked">ON</span>
            </y-switch>
          </div>
          <div className="flex justify-center items-center">
            <span> 自定义开关按钮上显示的图标：</span>
            <y-switch>
              <span slot="checkedIcon">X</span>
              <span slot="uncheckedIcon">√</span>
            </y-switch>
          </div>
          <div className="flex justify-center items-center">
            <span> 加载中的开关</span>
            <y-switch loading />
            <y-switch loading value={true} />
            <y-switch loading checkedColor="#F53F3F" uncheckedColor="green" />
            <y-switch loading checkedColor="#F53F3F" uncheckedColor="green" value={true} />
          </div>
          <div className="flex justify-center items-center">
            <span> 设置 beforeChange 函数，函数的返回值将用于判断是否阻止切换：</span>
            <y-switch beforeChange={this.changeLoading}></y-switch>
            <y-switch beforeChange={this.changeLoading} checkedColor="#F53F3F" uncheckedColor="green" />
          </div> */}
        </div>
      </div>
    );
  }
}
