import './App.css';
import Header from './component/Header'
import Current from './component/Current'
import Side from './component/Side'
import getData from'./api/getData'
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    getData().then(result=>{
      setData(result)
      // console.log(result)
      setIsLoading(false);
    })
  },[])
  return (
    <div className="App"> 
      <Header />
      {isLoading ? <Loading /> : <Main data={data} setData={setData} />}
    </div>
)};

const Main =({data, setData}) => {
  const[index, setIndex] = useState(0);
  return(
    <div id="main-container">
      <Current data={data} index={index}/>
      <Side data={data}  setIndex={setIndex}/>
    </div>
)};

const Loading =() => {
  return(
    <div id="loading-container">Its now loading on the data</div>
)};

export default App;