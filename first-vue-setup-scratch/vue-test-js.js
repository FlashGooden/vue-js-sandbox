const changeTitle = function (e) {
   this.title = e.target.value;
   /* console.log(this) */
};

const changeHtml = function (e) {
   const innerThing = document.getElementById('htmlInside')
   innerThing.innerHTML = e.target.value
}


console.log("hello");
new Vue({
   el: "#app",
   data: {
      title: "Who page is this!",
      chopper: "here it go",
   },
   methods: {
      changeTitle: changeTitle,
   },
});
new Vue({
   el: "#app2",
   data: {
      title: "Who page is this2 !",
      chopper: "here it go",
   },
   methods: {
      changeTitle: changeTitle,
      insideHtml: function () {
        return 'I will be put inside the HTML!!'
      },
      changeHtml: changeHtml
   },
});
