import React from 'react';
import './Body3.css';

function Body3() {
  return (
    <div className='slide5'>
      <div className='text9'>Meet Our Team<br /></div>
      <div className='creators'>
        <div className='mem1'>
          <img className='imgpat' src='lead1.jpg' alt='Navadeep Pentela' />
          <h3 className='creatorname'>Navadeep Pentela</h3>
          <h4 className='creatorname'>Creative Director</h4>
        </div>
         <div className='mem2'>
          <img className='imgpat' src='lead2.jpg' alt='Aashish Yanumula' />
          <h3 className='creatorname'>Aashish Yanumula</h3>
          <h4 className='creatorname'>Fashion Designer</h4>
          </div>
          <div className='mem3'>
          <img className='imgpat' src='lead3.jpg' alt='Karthik Ajay' />
          <h3 className='creatorname'>Karthik Ajay</h3>
          <h4 className='creatorname'>Marketing Guru</h4>
        </div>
      </div>
    </div>
  );
}

export default Body3;
