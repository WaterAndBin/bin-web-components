import { h, tag, Component, OmiProps } from 'omi';
import clsx from 'clsx';
import { ClassNamePrefix } from '../utils/clsx';
import { tailwind } from '../style';
import icon from './uil.json';
import { styleSheet } from './style/index';
import { YIconProps } from './types';

const iconMap = new Map(icon.map((item) => [item.name, item.svg]));

export type IconProps = YIconProps;

@tag('y-icon')
export default class Icon extends Component<IconProps> {
  static css = [tailwind, styleSheet];

  static props = {
    /** 边框的宽度，默认是1px */
    name: {
      type: String,
      default: '1px',
      changed() {
        if (this instanceof Icon) {
          this.update();
        }
      }
    }
  };

  render(props: OmiProps<IconProps>) {
    const { name } = props;
    const svg = iconMap.get(name);

    if (svg) {
      return <div className={clsx(ClassNamePrefix('icon-base'))} style={{ width: '2rem', height: '2rem' }} innerHTML={svg}></div>;
    } else {
      return <span>错误</span>;
    }
  }
}
