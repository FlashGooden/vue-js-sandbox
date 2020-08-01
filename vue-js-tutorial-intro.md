# STARTING WITH VUE JS

When working with Vue JS, you can add it to a regular HTML file by instantiating a new Vue object. If you import the library into your HTML using : `<script src='https://unpkg.com/vue/dist/vue.js'></script>`

in your javascript file that will be ran you then need to grab the ID of the div you would like to control under the VueJs library:

**HTML FIle**

```
<div id='app'>
<input type='text' v-on:input='changeTitle'>
<p>
  {{title}}
</p>
</div>
```

**JS File**

```
new Vue({
  el:'#app',
  data: {
  title: 'Who page is this!'

  }

 })
```

The Vue JS library that is instantiated will use the **'el'** property to look for either the class or ID that you are looking for in the HTML file. Once it locates that then it can pretty much see everything encapsulated inside of that HTML markup.

Vue JS also has a **'data'** property, this is a javascript object that will take in arguments / values and input them into your HTML template where it finds the proper double bracket name

If you need to access methods from such processes like `v-on:` you should have an object called **"methods"** located in your Vue Properties. Be careful with using arrow functions if you need to access **this** keyword. **this** will refer to top level data including the **Vue Data Object**.

# INTERACTING WITH THE DOM

## Directives

Directives are any piece of code we write in our elements that lets Vue bind something to data. You are also able to write your own directives. Usually the binds are written like `v-on:` or `v-bind:`

-  v-on : onInput{each time key pressed } (You can use any DOM Event for `v-on`)
-  v-once: does not change initial data passed in, won't update component
-  v-bind:href - takes a string for which data property to fetch link dynamically
-  v-bind:src - takes a string for which data property to fetch src dynamically

## Interpolation

Vue JS automatically picks up whats in the brackets **'{{ random propertery or method goes in here}} '** whether it's a method or a property. When you create a methods object and call whichever method inside the brackets, it's important that it returns a string to be displayed. You cannot return anything else inside the brackets to be displayed on page if calling a method inside the brackets. Hence calling a function that returns a string, then calling it within your HTML will show the returned string.

## Binding Link / RAW Html

if you are adding a link to an external address using **a** tags, if your dynamic link is in your Vue data Object, you will need to use a view directive in your html called `v-bind:href` Which will look for the Data property to return the text link or the `v-html` directive which tells VueJS to render HTML (v-html is susceptible to XSS so be careful)

```
      <div id="app">
         <a v-bind:href="google2">www.google.com</a>
      </div>

```

or

```
  **in html**
  <p v-html='troyLink'></p>

  **in javascript object**
  new Vue({
   el: "#app",
   data: {
      troyLink: '<a href="https://www.troygood.dev"> Another way to write links</a>'
   }
```

## Listening to events

the directive `v-on` can be linked to any DOM event. VueJS makes it allowable to have any component of HTML listen to an event. If you need to make an **onclick** handler just put the v-on directive in the html property that will link to the method in your VueJS instance.

```
** in HTML**
      <div id="app2">
         <button v-on:click='increase'>Click on me!!!</button>
         <p>{{Counter}}</p>
      </div>

** in Javascript **
const increase = function (e) {
   this.Counter++;
};

new Vue({
   el: "#app2",
   data: {
      Counter: 0,
   },
   methods: {
      increase: increase,
   },
});
```

## Getting event data

When listening to DOM events from within Vue, all events are passed down automatically into your arguments. If you wanted to figure out what the cordinates are from a mouse move you would first assign a component to listen to that event, then you can display it by tying the values to somewhere in your Vue instance object. Just as in regular javascript all DOM events are passed down in the argument for the event handler.

## Passing Arguments

when using directives, not only can you call a function by its name, but you can add parentesis to pass down arguments to the function being called.

```
<button v-on:click='increase(2)'>Click on me!!!</button>
```

If you need to pass down an argument, alongside with the event please use the special keyword `$event` inside your html component.

```
<button v-on:click='increase(2, $event)'>Click on me!!!</button>
```

## Modifying Events

When calling a directive, you can always stop DOM event bubbling to parent objects by using stopPropogation or preventDefault. VueJS also comes with modifiers for events in where you can get these method calls right inside your directives. You simply put a **'.'** notator and call the modifier you need. 2 of the most popular ones are `.stop` for stop propogation, and `.prevent` for prevent default. You can even chain these modifiers. In the following example, the mousemove event will not be triggered when hovering over the **span**

```
<p v-on:mousemove='updateCoordinates'>
 Coordinate X:  {{coox}} Coordinate Y: {{cooy}} - <span v-on:mousemove.stop.prevent > Do not update on here </span>
</p>
```

you can also add modifiers on keys, for instance if you want to know if the keyUp event happned on the "enter" button, or to perform something once a letter that represents the modifier is pressed. There are many modifiers that can be used on any key press.

```
**run the function after 'd' key is released**
 <input v-on:keyup.d='keyUpHandler' type="text">

  **run the function after the 'enter' key is released**
 <input v-on:keyup.enter='keyUpHandler' type="text">

 ** run an inline function right after directive using $event**
  <input v-on:keyup='value = $event.target.value' type="text">
```

## Writing Javascript code in templates

Whether you are writing code after a directive, or inside curly braces, VueJS allows us to write code that will run as long as it is an expression. No for loops, but you can use terenary statements inside curly braces or right after a directive instead of function calls.

```
        <input v-on:keyup='value = $event.target.value' type="text">

        <p>{{ value  + 2}}</p>
```

## Two way binding 

We can two way bind an HTML element using the `v-model` directive. Using this, we can tie an input element to a variable/property in our Vue instance

```
        <input type="text" v-model='twoWay'>
** Both of these refer to the twoWay key in the Vue Instance **
         <p id='htmlInside'>
            {{insideHtml()}}
            {{twoWay}}
         </p>
```

## Computed Properties & Watched Properties

When VueJS renders elements to the page, if something in the data object changes it will re-render the component and rerun any method calls / regrab any data properties. There may be times where we do not want to update sections of our HTML/Code that will be expensive (having to rerun a function again). There is another **key** we can add to our Vue instance which will cache certain code, and not have it dependant on our data properties being refreshed. By using the `computed` key we can have elements that don't update unless the dependency / value of the data is changed. 

```
** HTML **
        <p id='htmlInside'>
            <p>this the output {{output}}</p>  
            <button v-on:click='anotherOne +=1'> raise computed property value by one</button>
         </p>

** JS **
new Vue({
   el: "#app2",
   data: {
      anotherOne: 23,  <---- Computed function will run only when this changes
   },
   
   computed: {
     output: function () {
       console.log('ran computed once')
       
       return this.anotherOne
     }
   },

```
You can also use the `watch` key to run a function once a certain Vue object value changes. It is preferred to use computed property way. 
```
** HTML **
        <p id='htmlInside'>
            <p>this the output {{output}}</p>  
            <button v-on:click='anotherOne +=1'> raise computed property value by one</button>
         </p>

** JS **
new Vue({
   el: "#app2",
   data: {
      anotherOne: 23,  <---- Watch function will run only when this changes
   },
   
watch: {
    anotherOne: function() {
      setTimeout(()=>{this.anotherOne = 0},2000)
      console.log(this.anotherOne)
    }
   }
```

## Shorthand for writing directives 

There are certain shorthand commands you can use in place of `v-on` or `v-bind`. If you want to replace `v-on` use an **&** symbol, and if you want to replace `v-bind` use the **:** symbol.

```
        <input @keyup='value = $event.target.value' type="text">
        <button @click='increase($event, 2)'>Click on me!!!</button>
        <input @keyup.d='keyUpHandler' type="text">


```

## style HTML dynamically with CSS

If you want to apply classes onto HTML dynamically you can use another directive called `:class` to check against a vue instance Property. You can give the name of the class to be added based on if something is true or false

```
** CSS **
.boxed {
  width: 40px;
  height: 40px;
  background-color: gray;
  margin: 5px;
}

.brown {
  background-color: brown;
}

.blue {
  background-color: blue
}

** the html below will add the brown class if the 'addRed' data attribute is true, or the 'testingMethod' value is true. 

 <div class='boxed' @click='addRed = !addRed' :class='{brown: addRed}'></div>
  <div class='boxed' :class='{brown: testingMethod}'></div>
```

You can also pass the objects handed to `:class` into your vue instance, and represent it in computed properties. 

```
** CSS **
.boxed {
  width: 40px;
  height: 40px;
  background-color: gray;
  margin: 5px;
}

.brown {
  background-color: brown;
}

.blue {
  background-color: blue
}
** HTML **
    <div class='boxed' :class='divClasses'></div>

** JS ** 
new Vue({
        el: '#exercise',
        data: {
            testingMethod: true
        },
        computed: {
            divClasses: function () {
                return {
                    blue: this.testingMethod
                }
            }
```

classes can even be dynamically outputted using an input field if you use the `v-model` directive, and also when using the `:class` directive, you can also pass in array in the quotations to represent multiple CSS classes that you may need to add. 

```
** JS **
new Vue({
        el: '#exercise',
        data: {
            value: 0,
            // result: 'still not done'
            addRed: false, <------ if true, the directive will find the class and use it 
            testingMethod: true,
            namedColor: 'pink'
        }

** HTML **
<div class='boxed' :class='namedColor'></div>
<div class='boxed' :class='[namedColor, {brown: addRed}]'></div>
<input type="text" v-model='namedColor'>

```

If you want to apply styles directly inline using values from the vue instance, use the `:style` directive alongside with the property you want to style, and then place the variable used in the Vue instance. If you add an input with a `v-model` you can control the style dynamically. 

```
** JS **
...(Vue instance)
 data: {
            value: 0,
            // result: 'still not done'
            addRed: false,
            testingMethod: true,
            namedColor: 'pink',
            styleWidth: '50px' <------ this will get passed down into :style value
        },
** HTML **
    <div class='boxed' :style='{width: styleWidth}' :class='[namedColor, {brown: addRed}]'></div>
    <input type="text" v-model='styleWidth'>

```

If you want to set a whole object for styling, use a computed property to return a object with all your styles in it. 

```
** JS **
data: {
  chooseColor: 'pink',
  width: 100
}
computed: {
  myStyles: function () {
    return {
      backgroundColor: this.chooseColor
      width: this.chooseWidth + 'px'
    }
  }
}
```

# Using Conditionals & Rendering Lists in VueJS

## using v-if & v-else

When making a html element, you can have it be shown if the property in the Vue instance is true. We write the `v-if` statement alongside with which instance property we need to match it against to see if the element should show. If you place a `v-else` statement right after a `v-if`, that element will render if the `v-if` property is false. 

```
** JS ** 
el:'#app',
  data: {
    isTrue: true
  }

** HTML ** 
<div id='app'>
   <h1 v-if='isTrue'>hello from conditionals with if directive</h1> <--- will show if isTrue = true
   <h3 v-else>I will show if the Main heading is not there</h3> <--- will show if isTrue = false
   <p @click='isTrue = !isTrue'>click me to change if heading show!!!</p>
</div>
```

## using a template for v-if & v-else

sometimes you may not want to use a `div` to display your conditional elements, or you may want to group a bunch of elements together. Another way to list elements conditionally is to use the `template` tag and then encapsualte the rest of your HTML. 

```
** JS **
data: {
    isTrue: true,
    templateTrue: false
  }

  ** HTML **
 <template v-if='templateTrue'>
          <div>
            <p>
              showing conditionals inside the element using Template
            </p>
          </div>
  </template>

```

## using v-for 

you will use `v-for` when it comes to lists and outputting anything iterable. 

