import React,{useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {getData} from '../actions/action';
import Current from './Current';
import Side from './Side';
import './App.css';

const App =() =>{
  const state = useSelector(state => state.loadReducer);
  const {isLoading} = state
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getData())
  },[])
 
  return(
    <div className="app">
      <Header />
      {isLoading ? <Loading /> : <Movie />}
    </div>
  );
}

const Header =() => <h2 id="header"> Movie Top 10</h2>
const Loading = () => <div id="loading">Loading the data</div>
const Movie = () => 
  <div id="movie">
    <Current /> 
    <Side />
  </div>

export default App;