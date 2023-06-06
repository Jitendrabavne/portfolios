import React from 'react' 
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import './Navbar.css'
import '../App.css'
function Navbar() {
    // eslint-disable-next-line
    return (
        <>
            <nav className='nav'>
              
                <ul className='nav'  >
                    <li >
                         
                            <img src="favicon1.ico" alt="Trulli" />
                      
                    </li>
                    <li>
                         <AiIcons.AiFillHome /> 
                    </li>
                    <li>
                         <FaIcons.FaEnvelopeOpenText /> 
                    </li>
                    <li>
             <IoIcons.IoMdPeople /> 
                   
                    </li> 
                </ul>
                
            </nav>
        </>
    )
}

export default Navbar