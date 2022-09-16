const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (data) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
  let output = 0;
  for (const key in ixx) {
    ixx[key].hasil === data ? output++ : output;
  }
  for (const key in vgc) {
    vgc[key].hasil === data ? output++ : output;
  }
  return output;
};

module.exports = {
  promiseOutput,
};
