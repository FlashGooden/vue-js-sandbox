const changeTitle = function (e) {
   this.title = e.target.value
   /* console.log(this) */
};

const changeHtml = function (e) {
  console.log(this.title)
   const innerThing = document.getElementById('htmlInside')
   innerThing.innerHTML = e.target.value
}


console.log("hello");
new Vue({
   el: "#app",
   data: {
      title: "Who page is this!",
      chopper: "here it go",
      google: 'https://www.google.com',
      google2: 'https://www.google.com',
      TroyGood: 'https://www.troygood.dev'
   },
   methods: {
      changeTitle: changeTitle,
      putLink: ()=> {'https://www.google.com'}
   },
});
new Vue({
   el: "#app2",
   data: {
      title: "Who page is this2 !",
      chopper: "here it go chopper",
   },
   methods: {
      changeTitle: changeTitle,
      insideHtml: function () {
        return this.chopper
      },
      changeHtml: changeHtml
   },
});
