## STARTING WITH VUE JS

---

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

## Directives 
Directives are any piece of code we write in our elements that lets Vue bind something to data. You are also able to write your own directives. Usually the binds are written like `v-on:` or `v-bind:`
- v-on : onInput{each time key pressed }
- v-once: does not change initial data passed in, won't update component
- v-bind:href - takes a string for which data property to fetch dynamically
## Interpolation

Vue JS automatically picks up whats in the brackets **'{{ random propertery or method goes in here}} '** whether it's a method or a property. When you create a methods object and call whichever method inside the brackets, it's important that it returns a string to be displayed. You cannot return anything else inside the brackets to be displayed on page if calling a method inside the brackets. Hence calling a function that returns a string, then calling it within your HTML will show the returned string.

## Binding Link / RAW Html

if you are adding a link to an external address using **a** tags, if your dynamic link is in your Vue data Object, you will need to use a view directive in your html called `v-bind:href`: 

```
      <div id="app">
         <a v-bind:href="google2">www.google.com</a>
      </div>
```
