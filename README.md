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
if inner callback function trigger by the dispatch returns another function  
than the thunk automatically intercept to handle all the process after it was called   
rather than let it have the action object as a return value to the reducer.    

`dispatch(getData())` => In the getData function, the thunk middleware get it to handle return function  
, which is `async` work   
and it also puts the dispatch on a parameter of that intercepted function  

Thereby, we can have another process to handle before we make the action object  
and the re-dispatching with a new data by another work to eventually set the action object

Usually, (I think) Asynchronize work is very well designed for this     
By using multiple dispatch in that additional function,  
it is usuable to well define the step of the asynchronized process    

For more detail,   
before it gets the data from the fetch API, there has to be some logic to alert that it is not fetched yet     
On the othre hand, it also needs to notice that the data is available when its all completed.    
`isLoading` is one of the property of the store that I desgined     
`setLoad` is one of the action creater to hanlde the value of that property `isLoading`   

So, I set couple of the steps as an order of the asynchronize fetch process  
before it gets in the asyn process, I can notice it by `isLoading : true`   
after the async work done, I also know that by `isLoading :false`   
Further, the state is somehow renew since this action `{type : SET_DATA, payload:result}` is created   
and it dispatch before the `isLoading :true` by `dispatch(setLoad(false))`  

Finally, I get the Data from result of the asynchronized process, and I know when to use !!  
