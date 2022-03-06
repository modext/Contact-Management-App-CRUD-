import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-white navbar-expand-sm'>
                <div className="container">
                    <Link to={'/'} className = 'navbar-brand text-primary font-bold'>
                        <i className="fa fa-mobile" /> PHRENDY <span className='text-warning'>The contact manager...</span> </Link>

                </div>
            </nav>
        </div>
    )
}

export default NavBar