import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactService } from '../../../services/ContactService';

function AddContact() {


    let navigate = () => {

    }

    let [state, setState] = useState({
        loading : false,
        contact: {
            name: '',
            photo: '',
            mobile: '',
            email: '',
            company: '',
            title : '',
            groupId: '',

        },
        groups: [],
        errorMessage:'',

    });

    let updateInput = (event)=> {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            }
        })
    }


    useEffect(async() => {
        try {
            setState({...state, loading: true})
            let response = await ContactService.getGroups();
            setState({
                ...state,
                loading: false,
                groups: response.data,
            })
        }
        catch(error) {
            
        };
    }, []);
    
    let submitForm = async (event) => {
        event.preventDefault();
        try {
            let response = await ContactService.createContact(state.contact);
            if (response){
                navigate('contact/list', {replace: true});
            }
        }
        catch (error) {
            setState({...state, errorMessage: error.message})
            navigate('contact/add', {replace: true})
        }
    }
    let { loading, contact, groups, errorMessage} = state;

    return (
        <div>
            <section className="add-contact p-3">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Add another awesome person to your  contact list.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <form onSubmit={submitForm} action="">
                                    <div className="mb-2">
                                        <input 
                                            required={true}
                                            name='name'
                                            value={contact.name}
                                            onChange={updateInput} 
                                            type="text" className='form-control' placeholder="Name"/>
                                    </div>
                                    <div className="mb-2">
                                        <input 
                                        required={true}
                                        name='photo'
                                        value={contact.photo}
                                        onChange={updateInput} type="text" className='form-control' placeholder="Photo Url"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                        required={true}
                                        name='mobile'
                                        value={contact.mobile}
                                        onChange={updateInput}  
                                        type="number" className='form-control' placeholder="Mobile"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                        required={true}
                                        name='email'
                                        value={contact.email}
                                        onChange={updateInput}  
                                        type="email" className='form-control' placeholder="E-mail"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                        required={true}
                                        name='company'
                                        value={contact.company}
                                        onChange={updateInput}  
                                        type="text" className='form-control' placeholder="Company Name"/>
                                    </div>
                                    <div className="mb-2">
                                        <input
                                        required={true}
                                        name='title'
                                        value={contact.title}
                                        onChange={updateInput}  type="text" className='form-control' placeholder="Title"/>
                                    </div>
                                    <div className="mb-2">
                                        <select
                                        required={true}
                                        name='groupId'
                                        value={contact.groupId}
                                        onChange={updateInput}  
                                        id="" className="form-control">
                                            <option value="">Select a Group</option>
                                            {
                                                groups.length > 0 &&
                                                groups.map(group => {
                                                    return (
                                                        <option key={group.id} value={group.id}>{group.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className='btn btn-success' placeholder="Create"/>
                                        <Link to ={'/contacts/list'} className='btn btn-dark ms-2'  >Cancel</Link>
                                    </div>
                                        
                                    
                                    

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddContact