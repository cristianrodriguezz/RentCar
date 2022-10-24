import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCalendarDays, faClock, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
const Form = () => {
  return (
    <div className='form-container'>
      <div className='form'>
      <div className='formSearchInput'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type='text' placeholder="What's your pick-up city or airport? " className='searchInput'>
      </input>
      </div>
      <div className='formSearchInput'>
      <FontAwesomeIcon icon={faCalendarDays} />
      <span className='formSearchText'>date to date</span>
      </div>
      <div className='formSearchInput'>
      <FontAwesomeIcon icon={faClock} />
      <span className='formSearchText'>time to pick-up and drop-off the car</span>
      </div>
    </div>
    </div>

  )
}

export default Form
