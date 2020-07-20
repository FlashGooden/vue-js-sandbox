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

If you need to access methods from such processes like **v-on** you should have an object called **"methods"** located in your Vue Properties. Be careful with using arrow functions if you need to access **this** keyword. **this** will refer to top level data including the **Vue Data Object**. 

## Interpolation 

Vue JS automatically picks up whats in the **'{{ random propertery or method goes in here}} '** whether it's a method or a property. When you create a methods object and call whichever method inside the brackets, it's important that it returns a string to be displayed. You cannot return anything else inside the brackets to be displayed on page if calling a method inside the brackets. 



