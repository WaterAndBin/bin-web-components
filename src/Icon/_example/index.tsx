import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';
import icon from '../icon.json';

@tag('text-icon')
export default class extends Component {
  static css = [tailwind];

  /**
   * 复制文本的函数
   */
  copyToClipboard = (text: string): void => {
    navigator.clipboard
      .writeText(text)
      .then((): void => {
        console.log('复制成功', text);
        return undefined;
      })
      .catch((err): void => {
        console.error('Failed to copy text: ', err);
      });
  };

  render() {
    return (
      <div className="w-full">
        <h2 className="py-3 font-bold text-2xl w-full">图标</h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
            {icon.map((items) => (
              <div
                className="p-1 m-1 flex justify-center flex-col w-full items-center cursor-pointer hover:bg-gray-200 box-border"
                onClick={() => this.copyToClipboard(items.name)}
              >
                <y-icon name={items.name}></y-icon>
                <span>{items.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
