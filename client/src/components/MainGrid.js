import React, { useEffect, useState } from 'react'

function MainGrid(props) {

    // const removeSubject = (subject) =>{
    //     const index = props.selectedSubjects.indexOf(subject)
    //     props.setSelectedSubjects.splice(index, 0)
    // }

    var [number, setNumber] = useState(0)

    const handleClick = (value) => {
        setNumber(number++)
        props.removeSubject(value)
        setNumber(number++)
    }

    const renderSelectedSubjects = () => {
        return(
            props.selectedSubjects.map((subject)=>{
                return(
                    <li className='selected-item' value={subject}>{subject}<i data-set={subject} onClick={(e)=>(handleClick(e.currentTarget.dataset.set))} className='close fas fa-times'></i> </li>
                )
            })
        )
    }
    return (
        <div className="main-grid">
            <h3>Your Course Plan</h3>
            <ul className='selected-list'>
                {renderSelectedSubjects()}
            </ul>
        </div>
    )
}

export default MainGrid
