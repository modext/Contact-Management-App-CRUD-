import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';
import Spinner from '../../spinner/Spinner';

function EditContact() {

    let {contactId} = useParams();
    let navigate = useNavigate();

    let [state, setState] = useState({
        loading: false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title: '',
            groupId : '',
        },
        groups: [],
        errorMessage: '',
    });

    useEffect(async() => {
        try {
            setState({...state, loading:true});
            let response = await ContactService.getContact(contactId);
            let groupResponse = await ContactService.getGroups();
            setState({
                ...state,
                loading: false,
                contact: response.data,
                groups: groupResponse.data
            })
        }
        catch(error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message,
            })
        };
    }, [contactId]);

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value,
            }
        })
    }

    let submitForm =  async (event) => {
        event.preventDefault();
        try {
            let response = await ContactService.updateContact(state.contact, contactId);
            if (response){
                navigate('/contacts/list', {replace: true});
            }
        }
        catch (error) {
            setState({...state, errorMessage: error.message})
            navigate(`contacts/edit/${contactId}`, {replace: false})
        }
    }

    let {loading, contact, groups, errorMessage} = state;
    return (
        <div>
            {
                loading ? <Spinner /> : <React.Fragment>
                    <section className="add-contact p-3">
                        <div className="container ">
                            <div className="row">
                                <div className="col">
                                    <p className="h4 text-primary fw-bold">Edit Contact</p>
                                    <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse rem dicta pariatur, consectetur eligendi incidunt iste veniam eius voluptatem!</p>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <form onSubmit={submitForm}>
                                            <div className="mb-2">
                                                <input 
                                                required='true'
                                                value={contact.name}
                                                name='name'
                                                onChange= {updateInput}
                                                type="text" className='form-control' placeholder="Name"/>
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    required='true'
                                                    value={contact.photo}
                                                    name='photo'
                                                    onChange= {updateInput} 
                                                    type="text" className='form-control' placeholder="Photo Url"/>
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    required='true'
                                                    value={contact.mobile}
                                                    name='mobile'
                                                    onChange= {updateInput}
                                                    type="number" className='form-control' placeholder="Mobile"/>
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    required='true'
                                                    value={contact.email}
                                                    name='email'
                                                    onChange= {updateInput} 
                                                    type="email" className='form-control' placeholder="E-mail"/>
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    required='true'
                                                    value={contact.company}
                                                    name='company'
                                                    onChange= {updateInput}
                                                    type="text" className='form-control' placeholder="Company Name"/>
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    required='true'
                                                    value={contact.title}
                                                    name='title'
                                                    onChange= {updateInput} 
                                                    type="text" className='form-control' placeholder="Title"/>
                                            </div>
                                            <div className="mb-2">
                                                <select
                                                    required='true'
                                                    value={contact.groupId}
                                                    name='groupId'
                                                    onChange= {updateInput} 
                                                    className="form-control">
                                                    <option value="">Select a Group</option>
                                                    {
                                                        groups.length > 0 &&
                                                        groups.map(group => {
                                                            return (
                                                                <option key = {group.id} value={group.id}>{group.name} </option>
                                                            )
                                                        })

                                                    }
                                                </select>
                                            </div>
                                            <div className="mb-2">
                                                <input type="submit" className='btn btn-primary' value="Update"/>
                                                <Link to ={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-6">
                                        <img src={contact.photo} className='contact-img' alt="" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            }
            
        </div>
    )
}

export default EditContact