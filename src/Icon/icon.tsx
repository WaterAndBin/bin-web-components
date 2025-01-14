import { h, tag, Component, OmiProps } from 'omi';
import clsx from 'clsx';
import { ClassNamePrefix } from '../utils/clsx';
import { tailwind } from '../style';
import icon from './icon.json';
import { styleSheet } from './style/index';
import { YIconProps } from './types';
import { CSSProperties } from 'src/common';

const iconMap = new Map(icon.map((item) => [item.name, item.svg]));

export type IconProps = YIconProps;

@tag('y-icon')
export default class Icon extends Component<IconProps> {
  static css = [tailwind, styleSheet];

  static props = {
    name: {
      type: String,
      changed() {
        if (this instanceof Icon) {
          this.update();
        }
      }
    },
    size: {
      default: 20,
      changed() {
        if (this instanceof Icon) {
          this.update();
        }
      }
    },
    style: {
      default: {},
      changed() {
        if (this instanceof Icon) {
          this.update();
        }
      }
    }
  };

  get iconStyle(): CSSProperties {
    const wid = typeof this.props.size === 'string' ? this.props.size : this.props.size + 'px';

    return Object.assign(this.props.style, {
      width: wid,
      height: wid
    });
  }

  render(props: OmiProps<IconProps>) {
    const { name } = props;
    const svg = iconMap.get(name);

    if (svg) {
      return <div className={clsx(ClassNamePrefix('icon-base'))} style={this.iconStyle} innerHTML={svg}></div>;
    } else {
      return <span>错误</span>;
    }
  }
}
