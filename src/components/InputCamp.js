import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';
import swal from "sweetalert2"




const inputData = {
    firstname: "",
    lastname: "",
    status: ""
}

const InputCamp = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(inputData);


    const handleChange = ({ target: { name, value } }) => {

        setInputValue({ ...inputValue, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addContact({
            id: uuidv4(),
            firstname: inputValue.firstname,
            lastname: inputValue.lastname,
            status: inputValue.status
        }));

        setInputValue(inputData);
        swal.fire("create contact successfully");



    }



    return (
        <>
           <div className='text-center text-sm md:text-base lg:text-2xl xl:text-xl font-bold '>
              Create Contact Screen
           </div>
            <div className='w-full lg:w-2/4 xl:w-2/4 h-96   bg-slate-200 mx-auto text-center  font-semibold'>
                <br />
                <div className='flex mx-auto my-10 w-full  justify-center gap-3 text-sm md:text-base lg:text-xl xl:text-xl font-semibold '>
                    <h5 className='my-auto' >First Name :</h5>
                    <span>
                        <input
                            type='text'
                            name='firstname'
                            value={inputValue.firstname}
                            onChange={handleChange}
                            className='shadow appearance-none border rounded w-28 md:w-60 lg:w-60 xl:w-60 h-6 lg:h-10 xl:h-10  text-center mx-auto text-base my-auto text-gray-700  focus:outline-none focus:shadow-outline' />
                    </span>
                </div>
                <div className='flex mx-auto my-10 w-full  justify-center gap-3 text-sm md:text-base  lg:text-xl xl:text-xl font-semibold'>
                    <h5 className='my-auto'>Last Name :</h5>
                    <span>
                        <input
                            type='text'
                            name='lastname'
                            value={inputValue.lastname}
                            onChange={handleChange}
                            className='shadow appearance-none border rounded w-28 md:w-60  lg:w-60 xl:w-60 h-6 lg:h-10 xl:h-10  text-center mx-auto text-base my-auto text-gray-700  focus:outline-none focus:shadow-outline' />
                    </span>
                </div>
                <div className='flex mx-auto my-10 w-full  justify-center gap-3 text-sm md:text-base  lg:text-xl xl:text-xl font-semibold'>
                    <h5 className='my-auto'>Status :</h5>
                    <input
                        type='radio'
                        name='status'
                        value="active"
                        onChange={handleChange} />Active
                    <input
                        type='radio'
                        name='status'
                        value="inactive"
                        onChange={handleChange} />Inactive
                </div>

                <div className='w-32 h-10 bg-slate-500 flex  text-lg justify-center mx-auto my-10 font-bold rounded-sm text-white hover:bg-slate-800 
                hover:font-semibold'>
                    <button onClick={handleSubmit}>Save Contact</button>
                </div>

            </div>
        </>
    )
}

export default InputCamp