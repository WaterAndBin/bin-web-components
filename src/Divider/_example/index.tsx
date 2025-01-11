import { h, tag, Component } from 'omi';
import '..';
import { tailwind } from '../../style/index';

@tag('text-divider')
export default class extends Component {
  static css = [tailwind];

  render() {
    return (
      <div>
        <h2 className="py-3 font-bold text-2xl">分割线</h2>
        <span>这是一根大部分用tailwind构建的，长的分割线分割线1</span>
        <y-divider></y-divider>
        <span>这是一根大部分用tailwind构建的，长的分割线分割线2</span>
        <y-divider orientation="left">
          <span>left</span>
        </y-divider>
        <span>这是一根大部分用tailwind构建的，长的分割线分割线3</span>
        <y-divider orientation="center">
          <span>center</span>
        </y-divider>
        <span>这是一根大部分用tailwind构建的，长的分割线分割线4</span>
        <y-divider orientation="right">
          <span>right</span>
        </y-divider>
        <div className="text-center">
          <span>点状分割线</span>
          <y-divider type="dotted" width="2px"></y-divider>
          <span>双线分割线</span>
          <y-divider type="double" width="4px"></y-divider>
          <span>虚线分割线</span>
          <y-divider type="dashed" width="2px"></y-divider>
        </div>
        <div className="flex justify-center items-center flex-col">
          <span>竖直分割</span>
          <div className="mt-3">
            <span>Text1</span>
            <y-divider direction="vertical"></y-divider>
            <span>Text2</span>
            <y-divider direction="vertical"></y-divider>
            <span>Text3</span>
            <y-divider direction="vertical"></y-divider>
            <span>Text4</span>
            <y-divider direction="vertical"></y-divider>
            <span>Text5</span>
          </div>
        </div>
      </div>
    );
  }
}
