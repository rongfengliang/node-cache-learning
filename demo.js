const NodeCache = require("node-cache");
const myCache = new NodeCache();
var access_key = "dalongrong";
myCache.on("expired", function (key, value) {
    console.log(`${key} is expired  value of ${value} `)
    if (key == access_key) {
        myCache.set(key, "dalongrong"+Math.round()*10, 3);
    }
})

myCache.on("set", function (key, value) {
});

myCache.on("del", function (key, value) {

});

myCache.set(access_key, "dalongrong", 3);

setInterval(function () {
    let result = myCache.get(access_key);
    console.log(result)
}, 200);
