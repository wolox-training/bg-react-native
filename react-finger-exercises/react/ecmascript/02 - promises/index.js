// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const MAX_TIME=200000;
  return new Promise(
    function (resolve, reject) {
      if (time <= MAX_TIME){
          const start = Date.now();
          setTimeout( function() {
            const result = (Date.now() - start);
            resolve(result);
          }, time);
      } else {
          const reason = new Error('This time is too much !');
          reject(reason);
      }
    }
  );
}

export function asyncDelay(time) {
  return delay(time);
}
