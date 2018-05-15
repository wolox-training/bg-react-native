import { isArray } from './utils';

export function min(...args) {
  if (!args.length) {
      return undefined;
  } else if (isArray(...args)) {
      var [list] = args;
  } else {
      var list = [...args];
  }
  return Math.min(...list);
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
