import { useEffect, useState } from 'react';
import Fuse from 'fuse.js'


const Breadths = (props) =>{
  const [breadths, setBreadths] = useState([])
  const [searchTerm, setSearchTerm] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  
  const fuse = new Fuse(breadths, {
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

  const renderBreadths = () => {
    const list = searchResults.slice(0,5)
    return(
      list.map( (breadth) =>{
        return(
          <li onClick={(e)=>props.addSubject(e.target.innerHTML)} value={breadth.item.name} className='breadth-item'>{breadth.item.name}</li>
        )
      })
    )
  }


  const handleSearch = (e) => {
    e.preventDefault()
    const results = fuse.search(searchTerm)
    console.log(searchTerm)
    setSearchResults(results)
    console.log(searchResults)
  }

  useEffect(()=>{
      fetch('http://localhost:5000/Breadths/')
      .then(res => res.json())
      .then(res => setBreadths(res))

  })

  return(
    <div className='breadth-area'>
      <div className='title'>
        <h3>Select Your Breadth Subjects:</h3>
      </div>
      <form onSubmit={(e)=>handleSearch(e)}>
        <input type='text' 
        className='search-bar' 
        onChange={(e)=>setSearchTerm(e.target.value)} 
        placeholder='Search..'></input>
        <button className='search-btn' type='submit'><i className='fa fa-search'></i></button>
      </form>
      <ul className='breadth-list'>
        {renderBreadths()}
      </ul>
    </div>
  )
}

export default Breadths