// BUG: Executing the functions in the queue does not work - each name is undefined - fix should maintain the queue
var queue = [];

var names = ["john", "jane", "john"];

for (var i = 0; i < names.length; i++) {
  queue.push(function () {
    return names[i];
  });
}

queue.forEach(function (fn, index) {
  console.log("name", index, fn());
});
