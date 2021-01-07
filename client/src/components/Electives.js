import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';


const Electives = (props) => {
  const [electives, setElectives] = useState([])
  const [selectedElective, setSelectedElective] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)

  const fuse = new Fuse(selectedElective, {
    shouldSort: true,
    includeMatches: true,
    minMatchCharLength:2,
    includeScore: true,
    // threshold: 0.5,
    location: 50,
    keys:[
      'name'
    ]
  })

  const renderElectiveDepartments = () => {
    return(
      electives.map(
        (dept) =>{
          return(
            <option value={dept.department} key={dept._id}>{dept.department}</option>
          )
        }
      )
    )
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const results = fuse.search(searchTerm)
    console.log(searchTerm)
    setSearchResults(results)
    console.log(searchResults)
  }

  const renderElectives = () => {
    const list = searchResults.slice(0,5)
    return(
      list.map( (item) =>{
        return(
          <li onClick={(e)=>props.addSubject(e.target.innerHTML)} value={item.item.name} className='elective-item'>{item.item.name}</li>
        )
      })
    )
  }

  const selectElectives = (deptName) =>{
    electives.map( ( dept ) => {
      if(deptName === dept.department){
        setSelectedElective(dept.electives)
      }
    })
  }

  const handleDeptChange = (e) => {
    selectElectives(e.target.value)
    console.log(selectedElective)
  }

  useEffect(()=>{
    fetch('https://planet-unimelb.herokuapp.com/Electives/')
    .then(res => res.json())
    .then(res => setElectives(res))
  }, [])


  return(
    <div className='elective-area'>
      <div className='title'>
        <h3>Select Your Electives:</h3>
      </div>
      <select className='form-control electivesDropdown'
        id='electivesSelect'
        onChange={(e)=>handleDeptChange(e)}
      >
        <option>Select a Department</option>
        {renderElectiveDepartments()}
      </select>
      <form onSubmit={(e)=> handleSearch(e)}>
        <input type='text' onChange={(e)=>setSearchTerm(e.target.value)} className='search-bar' placeholder='Search..'></input>
        <button className='search-btn' type='submit'><i className='fa fa-search'></i></button>
      </form>
      <ul className='elective-list'>
        {renderElectives()}
      </ul>
    </div>
  )
}

export default Electives;