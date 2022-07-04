import React  from 'react';
import { useQuery } from 'react-query';


const list = () => {

  if (isLoading) return 'Loading...';
  
  if (error) return 'An error has occurred: ' + error.message;

  console.log({isLoading, error, data})
  return (<div>list</div>);


}

export default list