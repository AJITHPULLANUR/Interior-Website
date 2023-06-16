import React from 'react'
import headlogo from './images/ss.png';



const MainHeader = () => {
  return (
    <div className='navdiv'>

        <div className='imageddivv'> 
        <img className='imgc' src={headlogo}  alt="" />
        </div>
        <div className='options'>
          <h4 className='op'>HOME</h4>
          <h4 className='op'>CONTACT</h4>
          <h4 className='op'>DESIGNS</h4>
          <h4 className='op'>ABOUT</h4>
          <h4 className='op'>PROJECT</h4>
        </div>

        <div className='book'>
          <a className='email' href="https://www.wudkort.com/"><h3 className='bookho'>BOOK APPOINTMENTS</h3></a>



        </div>
       



    </div>
  )
}

export default MainHeader

