import { BaseInterface } from '../Base/base.types';
import { utilityStyles } from './utilityStyles';

export function buildCssUtilities(props: BaseInterface) {
  return props.match ? '' : utilityStyles(props);
}
