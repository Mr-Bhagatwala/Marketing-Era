import React from 'react'
import ourservices from './ourservices.css'

const Ourservices = () => {
  return (
    <>
    <div className='component'>
      <div className="head">
        <div className="title">Our Services</div>
        <div className="subtitle">
          Save Time Managing your Business With our Best Service
        </div>
      </div>
      <div className='mainbox'>
        <div className='box1 box'>
            <div className='servname'>Email <br/>Marketing</div>
            <div className='servdescription'>Our Email Marketing Services will help you be successful in marketing your products to a targeted audience through email.From collection of emails to building the right strategy.</div>
        </div>
        <div className='box2 box'>
            <div className='servname'>Serach Engine Optimization</div>
            <div className='servdescription'>Our SEO support includes all the strategies you need to bring
            your website’s name an top of Google,Being and other search engines. </div>
        </div>
        <div className='box3 box'>
            <div className='servname'>Content <br/> Marketing</div>
            <div className='servdescription'>Have  a Business but not getting
            results from your digital marketing?
            Want to increase your customer base 
            and grow your business faster?</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Ourservices