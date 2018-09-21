const axios = require("axios");
const tweet_checker = (data) => {

  const res = {};

  for (var id in data) {
    res[id] = data[id].handle;
  }

  return Promise.resolve(res)
};

module.exports = tweet_checker;