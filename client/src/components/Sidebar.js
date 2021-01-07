import React, { useEffect, useState } from "react";
import Breadths from "./Breadths";

import Electives from "./Electives";


function Sidebar(props) {
  const [majorList, setMajorList] = useState([])
  const [cores, setCores] = useState([])

  const handleCore = (majorName) =>{
    majorList.map( (major)=>{
      if (majorName === major.name){
        setCores(major.core)
      }
      return cores
    })
  }

  const handleOnChange = (event) =>{
    handleCore(event.value)
    console.log(cores)
  }

  const renderCoreSubjects = () => {
    if (cores.length > 0){
      return(
        cores.map( core => {
          return(
            <li onClick={(e)=>props.addSubject(e.target.innerHTML)} value={core.name} className='core-item'>{core.name}</li>
          )
        })
      )
    }
    // else{
    //   return(
    //     <div className='text-center'>
    //       <h2>Select a Major</h2>
    //     </div>
    //   )
    // }
  }

  const renderMajors = () => {
    if (majorList.length > 0){
      return(
        majorList.map( (major) => {
          return(
            <option value={major.name} name={major.name} key={major._id}>{major.name}</option>
          )
        })
      )
    }
    else{
      return (
        <option>Loading...</option>
      )
    }
  }

  useEffect(()=>{
    fetch('https://planet-unimelb.herokuapp.com/Majors/')
    .then( res => res.json() )
    .then( res => setMajorList(res))
  }, [])

  return (
    <div className="sidebar">
      <div className=''>
        <p>*Click to add Subjects</p>
        <form className='major'>
          <div className='title'>
            <h3>Select Your Major:</h3>
          </div>
          <select 
            className="form-control majorDropdown" 
            id="majorSelect" 
            onChange={(e)=>handleOnChange(e.target)}
          >
            <option>Select a Major</option>
            {renderMajors()}
          </select> 
        </form>
        <div className='core-area'>
          <div className='title'>
            <h3>Core Subjects for your Major:</h3>
          </div>
          <ul className='core-list'>
            {renderCoreSubjects()}
          </ul>
        </div>
        <Electives addSubject={props.addSubject} />
        <Breadths addSubject={props.addSubject} />
      </div>
    </div>
  );
}

export default Sidebar;
