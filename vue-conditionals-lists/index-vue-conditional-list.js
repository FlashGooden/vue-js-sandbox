const newVue = new Vue({
  el:'#app',
  data: {
    isTrue: true,
    templateTrue: false,
    fruitList: ['apples', 'oranges', 'peaches'], 
    peopleObject: [{name: 'max', age: '24', occupation: 'web developer'},
    {name: 'troy', age: 35, occupation: 'Front End Developer'}]
  }

})


console.log(newVue['$el'])
