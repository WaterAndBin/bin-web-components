import { h, tag, Component, OmiProps } from 'omi';
import clsx from 'clsx';
import { ClassNamePrefix } from '../utils/clsx';
import { tailwind } from '../style';
import { styleSheet } from './style/index';
import { YSpaceProps } from './types';

export type SpaceProps = YSpaceProps;

@tag('y-space')
export default class Space extends Component<SpaceProps> {
  static css = [tailwind, styleSheet];

  static props = {
    name: {}
  };

  render(props: OmiProps<SpaceProps>) {
    console.log(props.children == this.children);
    console.log(props.children);
    console.log(this.children);
    console.log(this.slot);

    const children = [...this.children];
    console.log(this.children.item(0));

    return (
      <div className={clsx(ClassNamePrefix('space-base'))}>
        {this.children.item(0)}
        {children.map((child, index) => {
          return (
            <div key={index} className="space-items">
              {child}
            </div>
          );
        })}
      </div>
    );
  }
}
