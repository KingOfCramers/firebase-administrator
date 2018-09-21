const tweet_checker = require("./tweet_checker");

const checker_train = (story_id, data) => {
  if(data.twitter || false){ // The rest of our logic could go in here.
    return Promise.all([
      tweet_checker(data.twitter),
    ]);
  } else {
    return Promise.resolve("This story has no trackers!");
  };
};

module.exports = { checker_train }