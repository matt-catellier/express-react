import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Routes from './Routes';

import './PrivateLayout.css';



const PrivateLayout = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getExamples = async () => {
      const result = (await axios.get("/api/example/")).data
      console.log(result)
      setData(result)
    }
    getExamples()
  }, [])
  return (
    <div className='layout'>
      <div>Div 1</div>
      <div><Routes /></div>
      { data.map(d => <div> {d.foo} </div>)}
    </div>
  )
}

export default PrivateLayout;
