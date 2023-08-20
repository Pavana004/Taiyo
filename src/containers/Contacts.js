import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import InputCamp from '../components/InputCamp'
import DataCamp from '../components/DataCamp'
import {AiOutlineArrowLeft} from "react-icons/ai"

const Contacts = () => {

    const [show,setShow] = useState(false);
     


    return (
        <div className='flex'>
            <Sidebar />
            <div className='mx-auto w-screen bg-slate-700 h-20 '>
                <div className='w-full h-20 bg-slate-00 text-white font-bold text-center text-base md:text-2xl lg:text-3xl xl:text-3xl mx-auto '>
                    <h6 className='flex w-32 mx-auto my-auto py-5 justify-center align-middle hover:text-gray-500 cursor-pointer'>Contacts</h6>
                </div>

                <div className='w-48 h-10 bg-slate-500 flex justify-center mx-auto my-10 font-bold rounded-sm text-white hover:bg-slate-800 
                hover:font-semibold'>
                    { show === false ? (
                        <button onClick={()=>setShow((pre)=>!pre)}>Create Contact</button> 
                    ) : (
                        <button className='flex my-auto gap-5' onClick={()=>setShow((pre)=>!pre)}><AiOutlineArrowLeft size={30}/><span className=' text-xl  font-bold'>Back</span></button> 
                    )}
                    
                   
                </div>
                {
                    show === false ? <DataCamp/> : <InputCamp/>
                }
                
            </div>
        </div>

    )
}

export default Contacts