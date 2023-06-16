import React from 'react'
import endlogo from './images/ss.png';
import phone from './images/icons8-phone.gif';
import mail from './images/icons8-gmail.gif';
import facebook from './foot/icons8-facebook.gif';
import youtube from './foot/icons8-youtube.gif';
import telegram from './foot/icons8-telegram.gif';
import insta from './foot/icons8-instagram.gif';
import whatsapp from './foot/WhatsApp Image 2023-06-16 at 10.37.38.jpg';











const Footerend = () => {
  return (
    <div className='end'>
        <div className='endimage'>
           <img width="160px" height="100px" src={endlogo} alt="" />
        </div>




        <div className='contactus'>


          <div className='us'>
          <span>Contact us</span>
         
          </div>

          <div className='call'>
          <img width="32px" height="40px" src={phone} alt="" />
          <h3>7994091425</h3>
          </div>

          <div className='gmail'>
            <img  width="22px" height="35px" src={mail} alt="" />
            <a className='email' href="https://myaccount.google.com/?pli=1"><span className='email'>ananthunibi@gmail.com</span></a>
          </div>


        </div>


        <div className='bookwu'>
          <a className='email' href="https://www.wudkort.com/"><h2>Click for Appointments </h2></a>
          

        </div>


        <div className='follow'>
          <div className='apps'>
        <a href="https://www.facebook.com/ananthu.nibi?mibextid=LQQJ4d"><img width="50px" height="40px" src={facebook} alt="" /></a>
        <a href="https://www.youtube.com/"><img width="50px" height="40px" src={youtube} alt="" /></a>
        <a href="https://telegram.org/"><img width="50px" height="40px" src={telegram} alt="" /></a>
        <a href="https://instagram.com/___n_i_b_i__n___?igshid=ZWQyN2ExYTkwZQ=="><img width="50px" height="40px" src={insta} alt="" /></a>


          </div>
          <div className='whats'>
            <img width="100px" height="100px" src={whatsapp} alt="" />
          </div>







        </div>


    </div>
  )
}

export default Footerend