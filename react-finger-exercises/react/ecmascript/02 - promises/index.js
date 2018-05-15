// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise(
    function (resolve, reject) {
      if (time <= 5000){
          let start = Date.now();
          setTimeout( function() {
            let result = (Date.now() - start);
            if ((time - 100) <= result <= (time + 100)) {
              resolve(result);
            }
          }, time);
      } else {
          let reason = new Error('This time is too much !');
          reject(reason);
      }
    }
  );
}

export function asyncDelay(time) {
  return new Promise(
    function (resolve, reject) {
      let start = Date.now();
      setTimeout( function() {
        let result = (Date.now() - start);
        if ((time - 100) <= result <= (time + 100)) {
          resolve(result);
        }
      }, time);
    }
  );
}
