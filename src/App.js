import { useState, useEffect } from "react";
import { useQuery } from 'react-query';

function App() {


  const [clients,setClients ] = useState([]);

  useEffect(()=>{
    fetch('https://capstone-api-rayudo11.vercel.app/clients')
      .then(res => res.json())
      .then(data => setClients(data))
  },[])

  useEffect(()=>{console.log(clients)},[clients])

  

  // function Example() {
  //   const { isLoading, error, data } = useQuery('repoData', () =>
  //     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //       res.json()
  //     )
  //   )
    
    // useEffect(() => {
    //   console.log('Mounted')
    //   //Fetch data from Api
  
    // }, []);
  
    // useEffect(() => {
    //   console.log(clients)
    //   //Fetch data from Api
  
    // }, [clients]);
    
    // if (isLoading) return 'Loading...'
  
    // if (error) return 'An error has occurred: ' + error.message

  return <div className="App">Hello World</div>;
}

export default App;
