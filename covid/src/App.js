import React from 'react';
import './App.css';
import fetch from 'node-fetch';
import Cases from './Cases'
const JOB_API_URI ="http://localhost:3001/cases"

async function fetchJobs(updateCb){
  const res = await fetch(JOB_API_URI);
  const json = await res.json();
  
  updateCb(json)
}


function App() {
  const [casesList,updateCase] = React.useState([]);
  
  React.useEffect(()=>{
    fetchJobs(updateCase);
  },[])

  return (
    <div className="App">
    <Cases cases={casesList}/>
    </div>
  );
  }
export default App;
