import React from 'react'
import { Button } from 'react-bootstrap';

const OptionsWrapper = ({handleOption}) => {
  return (
    <div className='d-flex align-items-center justify-content-center' style={{marginBottom: '5%'}}>
        <Button className='btn btn-danger mx-3' onClick={() => handleOption(1)}>Pending</Button>     
        <Button className='btn btn-warning mx-3' onClick={() => handleOption(2)}>Completed</Button>
        <Button className='btn btn-primary mx-3' onClick={() => handleOption(3)}>Show All</Button>  
    </div>
  )
}

export default OptionsWrapper;