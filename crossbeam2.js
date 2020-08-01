var determineOrder = (function determineOrder$(tasks, chosenTasks) {
  /* determine-order eval.sibilant:1:0 */

  var allTaskList = {  };
  var chosenTaskList = {  };
  var finalArray = [];
  chosenTasks.forEach((function(task) {
    /* eval.sibilant:8:2 */
  
    return chosenTaskList[task] = task;
  }));
  tasks.forEach((function(item) {
    /* eval.sibilant:10:2 */
  
    (function() {
      if (allTaskList[item.task]) {
        return (function() {
          if (item.depends.length >= 1) {
            allTaskList[item.depends[0]] = {
              name: item.depends[0],
              child: [],
              print: print,
              pawn: false,
              parent: []
            };
            allTaskList[item.task].child.push(allTaskList[item.depends[0]]);
            return (function() {
              if ((allTaskList[item.task].pawn === true || chosenTaskList[item.task])) {
                return (function() {
                  if (allTaskList[item.depends[0]]) {
                    allTaskList[item.depends[0]] = true;
                    return delete chosenTaskList[item.depends[0]];
                  }
                }).call(this);
              }
            }).call(this);
          }
        }).call(this);
      }
    }).call(this);
    return (function() {
      if (!(allTaskList[item.task])) {
        allTaskList[item.task] = {
          name: item.task,
          child: [],
          print: print,
          pawn: false,
          parent: []
        };
        return (function() {
          if (item.depends.length >= 1) {
            allTaskList[item.depends[0]] = {
              name: item.depends[0],
              child: [],
              print: print,
              pawn: false,
              parent: []
            };
            allTaskList[item.task].child.push(allTaskList[item.depends[0]]);
            return (function() {
              if ((allTaskList[item.task].pawn === true || chosenTaskList[item.task])) {
                return (function() {
                  if (allTaskList[item.depends[0]]) {
                    allTaskList[item.depends[0]].pawn = true;
                    return delete chosenTaskList[item.depends[0]];
                  }
                }).call(this);
              }
            }).call(this);
          }
        }).call(this);
      }
    }).call(this);
  }));
  return allTaskList[Object.keys(chosenTaskList)[0]].print(finalArray);
});
var print = (function print$(finalArray) {
  /* print eval.sibilant:31:0 */

  finalArray.push(this.name);
  (function() {
    if (this.child.length >= 1) {
      return this.child[0].print(finalArray);
    }
  }).call(this);
  return finalArray;
});
var exampleTasks = [ {
  task: "make a sandwich",
  depends: [ "buy groceries" ]
}, {
  task: "buy groceries",
  depends: [ "go to the store" ]
}, {
  task: "go to the store",
  depends: []
} ];
console.log(determineOrder(exampleTasks, [  'buy groceries' ]));