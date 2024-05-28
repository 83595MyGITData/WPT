import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from '../components/navbar'
import { useState } from 'react'
import { insertProperty } from '../services/property'
function AddProperty()
{
    const[title,setTitle]=useState('')
    const[contactName,setContactName]=useState('')
    const[contactNumber,setContactNumber]=useState('')
    const[description,setDescription]=useState('')
    const[rent,setRent]=useState('')
    
    
    const navigate = useNavigate()
    const onSave= async ()=>{
        console.log("hello onsave") 
    const result= await insertProperty(title)
    console.log(result)
    if (result['status'] == 'success') {
        console.log("hello success")
        toast('Successfully added a property')
       navigate('/properties')
       console.log()
    }
    else {
        toast.error(result['error'])
      }

    }
    return(
        <div>
            <Navbar/>
            <h1 className="page-header">AddProperty</h1>
            
            <div className="row">
            <div className="form">
                <div className=""></div>
                <div className="row mt-3">
                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="Title" className="">Title</label>
                            <input 
                            onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" />
                        </div>
                </div>
                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className="">Contact Name</label>
                            <input 
                            onChange={(e)=>setContactName(e.target.value)}
                            type="text" className="form-control" />
                        </div>
                </div>

                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className="">Contact Number</label>
                            <input 
                            onChange={(e)=>setContactNumber(e.target.value)}
                                type="text" className="form-control" />
                        </div>
                </div>
                </div>

                <div className="row mt-3">
                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className=""> #Guests</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>

                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className=""> #Bedrooms</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>

                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className=""># Beds</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>
                </div>

                <div className="row mt-3">
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="" className="">Address</label>
                        <textArea 
                         row={5} className="form-control"></textArea>
                    </div>

                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="" className="">Details</label>
                        <textArea 
                        onChange={(e)=>setDescription(e.target.value)}row={5} className="form-control"></textArea>
                    </div>

                </div>
                </div>

                <div className="row mt-3">
                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className=""> #Bathrooms</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>

                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className=""> #Rent</label>
                            <input 
                            onChange={(e)=>setRent(e.target.value)} type="text" className="form-control" />
                        </div>
                </div>
                </div>

                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="" className=""> #Rent</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>


                <div className="col">
                    <button onClick={onSave} className="btn btn-success">Save</button>
                </div>

            </div>
            </div>
        </div>
    )
}
export default AddProperty