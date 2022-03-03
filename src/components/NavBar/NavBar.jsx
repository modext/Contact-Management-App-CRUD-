import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className="container">
                    <Link to={'/'} className = 'navbar-brand'>
                        <i className="fa fa-mobile" /> Contact <span className='text-warning'>Manager</span> </Link>

                </div>
            </nav>
        </div>
    )
}

export default NavBar