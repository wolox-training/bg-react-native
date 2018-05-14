import { isArray } from './utils';

export function min() {
  if (arguments === 1) {
    return arguments[0];
  } else if (arguments.length === 0) {
    return undefined;
  }
  let [args] = arguments;
  if (isArray(args) === true) {
    return Math.min(...args);
  } else {
    return Math.min(...arguments);
  }
}

export function copy() {

}
