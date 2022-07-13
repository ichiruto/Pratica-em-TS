"use strict";
var Jobs;
(function (Jobs) {
    Jobs[Jobs["police"] = 0] = "police";
    Jobs[Jobs["doctor"] = 1] = "doctor";
    Jobs[Jobs["engineer"] = 2] = "engineer";
    Jobs[Jobs["actress"] = 3] = "actress";
    Jobs[Jobs["actor"] = 4] = "actor";
    Jobs[Jobs["admnistrator"] = 5] = "admnistrator";
})(Jobs || (Jobs = {}));
const Manuel = {
    name: "Manuel",
    age: 75,
    jobs: Jobs.engineer
};
