# react-redux 
### Source Tree
```js
-src/
--actions/
---action.js
--components/
---App.js
---App.css
---Current.js
---Side.js
--reducers/
---rootReducer.js
---reducer.js
---loadReducer.js
--store/
---store.js
--index.js
--index.css
```

### Action define 
```js
export const getData = () => {
  return async (dispatch)=> {
    dispatch(setLoad(true)); 
    const result = await fetch("http://localhost:3001/movies").then(res => res.json())
    dispatch( {type : SET_DATA, payload : result} ) 
    dispatch(setLoad(false));
  }
}
```
Since we set the Middleware(thunk), 
if inner callback function trigger by the dispatch returns another function!!,      
the `thunk` automatically intercept the process      
rather than let it have the action object as a return value to the reducer.    

Somepoint we set this code `dispatch(getData())`     
Here this `getData()`  supposed to return action object         
but it actually returns function so the thunk middleware get it to handle    
and it also puts the dispatch into a parameter of that intercepted function    

Thereby, we can have another process to handle before we make the action object  
and the re-dispatching with a new data by another work   

Usually, (I think) Asynchronize work is very well designed for this     
By using multiple dispatch in that additional function,  
it is easy to define the step of the asynchronized process      

For more detail,   
Getting the data from the fetch API,   
we need to notice that the data is available or not    
Or we want to know that the async work is all completed or not.    
(No matter with Success or fail response, Just to find out the async work is done or not)    

In the process that we earn from the thunk, we can find out the problem above  
`isLoading` is one of the property of the store that I desgined     
`setLoad` is one of the action creater to hanlde the value of that property `isLoading`   

I set couple of the steps as an order of the asynchronize fetch process.  
If `isLoading` is `true`, that means asyn work is still on the process     
or you can notice that async work is all done    

`thunk` gives this logic and it is usuable to define     
where to start or to end of the asyn process  

### Server On
![Webp net-resizeimage (2)](https://user-images.githubusercontent.com/78589751/133925249-74635ec4-7687-4278-8ffe-aee323522f67.gif)
### Clinet Work 
![Webp net-resizeimage (3)](https://user-images.githubusercontent.com/78589751/133925477-5b83d48f-7cb6-4c0c-8f3a-3686c36f1f18.gif)

