import React from 'react'
import { Link } from 'react-router-dom'

function ContactList() {
    return (
        <div>
            <section className='contact-search p-3'>
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="column">
                                <p className="h3">Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"></i> New </Link> 
                                </p>
                                <p className="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis labore rem corrupti optio incidunt harum cum eius, voluptas facere impedit?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form action="" className='row'>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className='form-control' placeholder='Search Names' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="submit" className='btn btn-outline-dark' value='Search' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='contact-list'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around ">
                                        <div className="col-md-4">
                                            <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt=""  className='contact-img'/>
                                        </div>
                                        <div className="col-md-7">
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
                                            </ul>
                                            
                                        </div>
                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <Link to ={"/contacts/view/:contactId"} className='btn btn-warning my-1'>
                                                <i className="fa fa-eye"></i>
                                            </Link>
                                            <Link to ={"/contacts/edit/:contactId"} className='btn btn-primary my-1'>
                                                <i className="fa fa-pen"></i>
                                            </Link>
                                            <button  className='btn btn-danger my-1'>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around ">
                                        <div className="col-md-4">
                                            <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt=""  className='contact-img'/>
                                        </div>
                                        <div className="col-md-7">
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
                                            </ul>
                                            
                                        </div>
                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <Link to ={"/contacts/view/:contactId"} className='btn btn-warning my-1'>
                                                <i className="fa fa-eye"></i>
                                            </Link>
                                            <Link to ={"/contacts/edit/:contactId"} className='btn btn-primary my-1'>
                                                <i className="fa fa-pen"></i>
                                            </Link>
                                            <button  className='btn btn-danger my-1'>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>

            </section>
        </div>
    )
}

export default ContactList