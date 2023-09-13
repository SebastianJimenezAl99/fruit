import React from 'react'
import orange from './img/orange.jpg';
import logo from './img/logo.svg';
import "./Header.css";

function Header() {
  return (
    <div className='head'> 
        <section >
            <div className='encabezado'>

                <div className='logo'>
                    <img src={logo} alt=""  />
                </div>

                
                <div className='menu'>
                    
                    <div>
                    <ul className='lista'>
                        <li> about </li>
                        <li> Services </li>
                        <li> Projects </li>
                    </ul>
                    </div>
                    <div>
                    <button> Contact </button>
                    </div>
                </div> 
            </div>

            <div className='tittle'><h1>WE ARE CREATIVE</h1> </div>
            <div> <img src= {orange} alt="" className='orange' /> </div>
                         
        </section>
        
    </div>
  )
}

export default Header