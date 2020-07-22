const changeTitle = function (e) {
   this.title = e.target.value;
   /* console.log(this) */
};

const changeHtml = function (e) {
   console.log(this.title);
   const innerThing = document.getElementById("htmlInside");
   innerThing.innerHTML = e.target.value;
};

const increase = function (event, step) {
   console.log(event);
   console.log(step);
   this.Counter += step;
};

console.log("hello");
new Vue({
   el: "#app",
   data: {
      title: "Who page is this!",
      chopper: "here it go",
      google: "https://www.google.com",
      google2: "https://www.google.com",
      TroyGood: "https://www.troygood.dev",
      troyLink:
         '<a href="https://www.troygood.dev"> Another way to write links</a>',
   },
   methods: {
      changeTitle: changeTitle,
      putLink: () => {
         "https://www.google.com";
      },
   },
});
new Vue({
   el: "#app2",
   data: {
      title: "Who page is this2 !",
      chopper: "here it go chopper",
      Counter: 0,
      coox: 0,
      cooy: 0,
      twoWay: '',
   },
   methods: {
      changeTitle: changeTitle,
      insideHtml: function () {
         return this.twoWay;
      },
      changeHtml: changeHtml,
      increase: increase,
      updateCoordinates: function (e) {
         this.coox = e.clientX;
         this.cooy = e.clientY;
      },
      keyUpHandler: function (e) {
         
         if (e.key === "d") alert("button Hit!!");
      },
   },
});

new Vue({
   el: "#exercise",
   data: {
      YOUR_NAME: "Gary Owens",
      AGE: "35",
      wayans:
         "https://www.gstatic.com/tv/thumb/tvbanners/184432/p184432_b_v8_aa.jpg",
      name: "GARYYYYYY!!!",
   },

   methods: {
      randomFloat: () => {
         return parseInt(Math.random() + 1);
      },
   },
});
