
1. Create a new Vue instance

```js

new Vue({
  data(){
    return {
      text: 'hello from data'
    }
	},
	

  template: `
   <ui-button> {{ text }} </ui-button>
  `
})
```

