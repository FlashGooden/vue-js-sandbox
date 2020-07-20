const changeTitle = function (e) {
  this.title = e.target.value
 /* console.log(this) */
}
   console.log('hello')
  new Vue({
    el:'#app',
 data: {
   title: 'Who page is this!',
   chopper:'here it go'
 },
 methods: {
   changeTitle: changeTitle
}
  
  })


