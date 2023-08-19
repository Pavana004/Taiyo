import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { deleteContact } from '../redux/contactSlice';





const DataCamp = () => {

  const jsonData = useSelector(store => store.contact);
  const dispatch = useDispatch()

  const handleRemove = (id) => {

    dispatch(deleteContact({ id }));
  }

   const dataRender = () =>{
       return(
        <div className='container m-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 h-96 item-center  overflow-auto '>
        {
          jsonData.map((data) => {
            return (
              <div className=' flex items-center w-full md:w-full lg:w-full xl:w-full justify-evenly '>
                <div className="  gap-1 h-40">
                  <div className='w-60 md:w-full lg:w-full xl:w-full h-20 bg-slate-500 flex text-xs md:text-sm lg:text-base xl:text-base mx-auto py-6 px-6 md:px-6 lg:px-6 xl:px-6   gap-3 font-semibold text-white  ' key={data.id} >
                    <h6  >FirstName:<br />{data.firstname}</h6>
                    <h6>LastName:<br />{data.lastname}</h6>
                    <h6>Stauts:<br />{data.status}</h6>
                  </div>
                  <div className='w-full flex justify-between py-4 font-medium'>
                    <Link to={`edit/${data.id}`}>
                      <button className=' w-24 md:w-32 lg:w-32 xl:w-32 h-10 bg-teal-500 hover:bg-teal-300'>Edit</button>
                    </Link>
                    <button className=' w-24 md:w-32 lg:w-32 xl:w-32 h-10 bg-red-500 hover:bg-red-300' onClick={() => handleRemove(data.id)}>Delete</button>
                  </div>
                </div>
  
              </div>
            )
          })
        }
  
      </div>
       )
   }

  return (
      <div >
        {
          jsonData.length ? dataRender() : <p className='item-center font-bold text-center text-red-700'>No Contact Found Please Add Contact From CreateContact Button</p>
        }
      </div>
  )
}

export default DataCamp