import {MDCSwitch} from '@material/switch';
import autobind from 'autobind-decorator';
import {h} from 'preact';
import MaterialComponent from '../Base/MaterialComponent';
import {IMDRef} from '../Base/types';

export interface ISwitchProps {
  disabled?: boolean;
  ref?: IMDRef<MDCSwitch>;
}

export interface ISwitchState {}

export class Switch extends MaterialComponent<ISwitchProps, ISwitchState> {
  protected componentName = 'switch';
  protected mdcProps = ['disabled'];
  protected MDComponent?: MDCSwitch;

  public componentDidMount() {
    super.componentDidMount();
    if (this.control) {
      this.MDComponent = new MDCSwitch(this.control);
    }
  }

  public componentWillUnmount() {
    super.componentWillUnmount();
    if (this.MDComponent) {
      this.MDComponent.destroy();
    }
  }

  @autobind
  protected materialDom(allprops) {
    const {className, ref, ...props} = allprops;
    return (
      <div className={className} ref={this.getSharedRefSetter(ref)}>
        <div class="mdc-switch__track" />
        <div class="mdc-switch__thumb-underlay">
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              {...props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Switch;
