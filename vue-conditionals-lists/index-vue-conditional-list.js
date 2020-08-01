const newVue = new Vue({
  el:'#app',
  data: {
    isTrue: true,
    templateTrue: false,
    fruitList: ['apples', 'oranges', 'peaches']
  }

})


console.log(newVue['$el'])
