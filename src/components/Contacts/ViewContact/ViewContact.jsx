import React from 'react'
import { Link } from 'react-router-dom'

function ViewContact() {
  return (
    <div>
        <section className="view-contact intro p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-warning fw-bold">View Contact</p>
                        <p className="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, unde fuga nobis atque distinctio non corporis iure, quia itaque necessitatibus libero voluptatem facilis provident consequuntur dolores accusantium quam tenetur quo.</p>
                    </div>
                </div>
            </div>
        </section> 
        <section className="view-contact ">
            <div className="container ">
                <div className="row align-items-center ">
                    <div className="col-md-4">
                        <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" className='contact-img' alt="" />
                    </div>
                    <div className="col-md-8">
                        <ul className='list-group'>
                            <li className='list-group-item list-group-item-action'>
                                Name: <span className='fw-bold'> Emeka</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                                Mobile Number: <span className='fw-bold'> 09808848488</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                                Email: <span className='fw-bold'> emeka@yaoo.com</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                                Company: <span className='fw-bold'> emeka@yaoo.com</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                                Title: <span className='fw-bold'> emeka@yaoo.com</span>
                            </li>
                            <li className='list-group-item list-group-item-action'>
                                Group: <span className='fw-bold'> emeka@yaoo.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ViewContact