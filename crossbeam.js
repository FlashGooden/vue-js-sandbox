var determineOrder = function determineOrder$(tasks, chosenTasks) {
   /* determine-order crossbea m.sibilant:1:0 */
   let allTaskList = {};
   let chosenTaskList = {};
   let finalArray = []

   for (task of chosenTasks) {
      chosenTaskList[task] = task;
   }
   for (item of tasks) {
      if (allTaskList[item.task]) {
         if (item.depends.length >= 1) {
            allTaskList[item.depends[0]] = {
               name: `${item.depends[0]}`,
               child: [],
               print: print,
               count: 0,
               pawn: false,
               parent: [allTaskList[item.task]],
            };
            allTaskList[item.task].child.push(allTaskList[item.depends[0]]);
            if ( allTaskList[item.task].pawn === true ||
               (chosenTaskList[item.depends[0]] && chosenTaskList[item.task])) {
               allTaskList[item.depends[0]].pawn = true;
               delete chosenTaskList[item.depends[0]];
            }
         }
      }

      if (!allTaskList[item.task]) {
         debugger;
         allTaskList[item.task] = {
            name: `${item.task}`,
            child: [],
            print: print,
            pawn: false,
            parent: [],
         };
         if (item.depends.length >= 1) {
            allTaskList[item.depends[0]] = {
               name: `${item.depends[0]}`,
               child: [],
               print: print,
               pawn: false,
               parent: [allTaskList[item.task]],
            };
            allTaskList[item.task].child.push(allTaskList[item.depends[0]]);
            // console.log(allTaskList)
            if (
               allTaskList[item.task].pawn === true ||
               (chosenTaskList[item.depends[0]] && chosenTaskList[item.task])
            ) {
               allTaskList[item.depends[0]].pawn = true;
               delete chosenTaskList[item.depends[0]];
            }
         }
      }
   }

   // if the key does exist already, it should then it should be adding 1 to (all)it's parents dependency allTaskList, seeing how it exists it should also check to see if it has a dependent, if it does then it needs to add 1 to it's own dependency,add that dependecy to the allTaskList object, then make that depend key /value as it's child pproperty, there should be a function that adds 1 to all parent properties of dependencies

   // let allTaskList = {'make a sandwich': {dependencies: 2, child: ['buy groceries'], parent:[]}, 'buy groceries': {dependencies: 1, child: ['go to the store'], parent:['make a sandwich']}, 'go to the store': {depdencies:0 , child: [], parent:['buy groceries']} }

   // let allTaskList = {'make a sandwich': {dependencies: 2, child: ['buy groceries'], parent:[]}, 'buy groceries': {dependencies: 1, child: ['go to the store'], parent:['make a sandwich']}, 'go to the store': {depdencies:0 , child: [], parent:['buy groceries']} }

   //make a hash out of the items we are searching for.... while traversing and making our task allTaskList, if that Item is a dependency then get rid of it out the hash. Also make an array, our object that we create from our depdencies will store the location of where it is located in the array
   console.log(chosenTaskList)
   return allTaskList[Object.keys(chosenTaskList)[0]].print(finalArray);
};
var exampleTasks = [
   {
      task: "eat a sandwich",
      depends: ["make a sandwich"],
   },
   {
      task: "make a sandwich",
      depends: ["buy groceries"],
   },
   {
      task: "buy groceries",
      depends: ["go to the store"],
   },
   {
      task: "go to the store",
      depends: [],
   },
];
var print = function (finalArray) {
  //  console.log(this)
   finalArray.push(this.name)
   if(this.child.length >= 1){
     this.child[0].print(finalArray)
   }
   return finalArray
}
console.log(
   determineOrder(exampleTasks, [
      "make a sandwich",
      "eat a sandwich",
      "buy groceries",
   ]), 'first log'
);
console.log(determineOrder(exampleTasks, ["buy groceries", "make a sandwich"]), 'second log');
