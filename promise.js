const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (data) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
  let array = ixx.concat(vgc);
  let output = 0
  for (const key in array) {
    array[key].hasil === data ? output++ : output;
  }
  return output;
};

module.exports = {
  promiseOutput,
};
