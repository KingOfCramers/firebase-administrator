const { checker_train } = require("./trackers/checker_train.js");

const admin = require("firebase-admin");
const serviceAccount = require("./firebase-admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bill-tracker-prototype.firebaseio.com/"
});

const db = admin.database();
var ref = db.ref("/users").push({ hello: "HI" });



/*
ref.once("value", function(snapshot){
  snapshot.forEach((user) => {
    const stories = user.val()["stories"];

    for(var id in stories){
      checker_train(id, stories[id])
        .then((res) => {
          console.log(`Results for ${id}:`);
          console.log(user.key);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });
})
.then(() => {
  process.exit();
})
.catch((err) => {
  console.log(err)
})
*/