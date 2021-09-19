const getData = () => {
  return fetch("http://localhost:3001/movies")
    .then(res => res.json())
}

export default getData;