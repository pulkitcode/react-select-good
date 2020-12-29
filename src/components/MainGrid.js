import React from 'react'

function MainGrid(props) {
    const renderSelectedSubjects = () => {
        return(
            props.selectedSubjects.map((subject)=>{
                return(
                    <li className='selected-item' value={subject}>{subject}<i className='close fas fa-times'></i> </li>
                )
            })
        )
    }
    return (
        <div className="main-grid">
            <ul className='selected-list'>
                {renderSelectedSubjects()}
            </ul>
        </div>
    )
}

export default MainGrid
