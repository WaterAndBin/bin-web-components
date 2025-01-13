import { h, tag, Component, OmiProps } from 'omi';
import { YSwitchProps, YSwitchEvent } from './types';
import { tailwind } from '../style/index.js';
import { styleSheet } from './style/index.js';
import clsx from 'clsx';
import { ClassNamePrefix } from '../utils/clsx';

export interface SwitchProps extends YSwitchProps, YSwitchEvent {}

@tag('y-switch')
export default class YSwitch extends Component<SwitchProps> {
  static css = [tailwind, styleSheet];

  static propTypes = {
    isChecked: Boolean
  };

  static defaultProps = {
    isChecked: false
  };

  static props = {};

  changeIsChecked = (): void => {
    this.props.isChecked = !this.props.isChecked;
    this.update();
  };

  render(props: OmiProps<SwitchProps>) {
    const { isChecked } = props;

    return (
      <button className={clsx(ClassNamePrefix('switch'), { [ClassNamePrefix('switch-checked')]: isChecked })} onClick={this.changeIsChecked}>
        <span className={clsx(ClassNamePrefix('switch-ball'))}></span>
      </button>
    );
  }
}
