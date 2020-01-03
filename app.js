const cacheManager = require('cache-manager')
const memoryCache = cacheManager.caching({
    store: "memory"
})
function getUser(id, cb) {
    var user = {
        id: id,
        items: [
            {
                name: "dalong",
                age: 333
            }
        ]
    };
    console.log("from real api")
    cb(null, user)
}

function getCachedUser(id, cb) {
    memoryCache.wrap(id, function (cacheCallback) {
        getUser(id, cacheCallback);
    }, { ttl: 2 }, cb);
}
setInterval(function() {
    getCachedUser(1, function (err, data) {
        console.log(data)
    })
},1000)

