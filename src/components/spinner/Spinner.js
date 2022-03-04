import React from 'react'
import SpinnerImg from '../../assets/images/spinner.gif';



let Spinner = () => {
        return (
            <div> 
                <div>
                    <img src={SpinnerImg} alt="" className='d-block m-auto' style={{width:'100px'}} />
                </div>

            </div>
        )
}

export default Spinner; 