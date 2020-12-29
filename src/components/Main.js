import { useState, useEffect } from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import MainGrid from "./MainGrid"



const Main = () => {

  const [selectedSubjects, setSelectedSubjects] = useState([])

  const addSubject = (subject) => {
    setSelectedSubjects([...selectedSubjects, subject])
    console.log(selectedSubjects)
  }

  return (
    <div className="App">
      <Header />
        <div className=''>
          <div className='row'> 
            <div className='col-md-4 col-12'>
              <Sidebar addSubject={addSubject} />
            </div>
            <div className='col-md-7 col-12'>
              <MainGrid />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Main;