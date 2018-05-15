import { isArray } from './utils';

export function min(...args) {
  if (arguments.length === 0) {
      return undefined;
  } else if (isArray(...args)) {
      const [list] = args;
      return Math.min(...list);
  } else {
      return Math.min(...args);
  }
}

export function copy(variable) {
  if (isArray(variable)) {
    return [...variable];
  } else {
    return {...variable};
  }
}

export function reverseMerge(array1, array2) {
  const concatenatedArray = [...array2, ...array1];
  return concatenatedArray;
}

export function filterAttribs({a, b, ...object}) {
  return object;
}
