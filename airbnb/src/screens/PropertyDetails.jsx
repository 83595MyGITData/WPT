import Navbar from "../components/navbar"
import {Link, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import Properties from "./Properties"
function PropertyDetails()
{
    const[title,setTitle]=useState('')
    const[contactName,setContactName]=useState('')
    const[contactNumber,setContactNumber]=useState('')
    const[guests,setGuest]=useState('')
    const[bedrooms,setBedRooms]=useState('')
    const[beds,setBeds]=useState('')
    const[address,setAddress]=useState('')
    const[details,setDetails]=useState('')
    const[bathrooms,setBathrooms]=useState('')
    const[rent,setRent]=useState('')
  
    
    return(
        <div>
            <Navbar/>
            <h1 className="page-header">PropertyDetails</h1>

            <div className="row">
            <div className="form">
                <div className=""></div>
                <div className="row mt-3">
                <div className="col">
                        <div className="mb-3">
                            <label htmlFor="Title" className="">Title</label>
                            <input 
                            onChange={(e)=>setTitle(e.target.value)}
                            type="text" className="form-control" />
                        </div>
                </div>
                <div className="col">
                        <div className="mb-3">
                            <label 
                             onChange={(e)=>setContactName(e.target.value)}
                            htmlFor="" className=""> Contact Name </label>
                            <input type="text" className="form-control" />
                        </div>
                </div>

                <div className="col">
                        <div className="mb-3">
                            <label 
                            onChange={(e)=>setContactNumber(e.target.value)}
                            htmlFor="" className="">Contact Number</label>
                            <input type="text" className="form-control" />
                        </div>
                </div>
                </div>

                <div className="row mt-3">
                <div className="col">
                        <div className="mb-3">
                            <label 
                            onChange={(e)=>setGuest(e.target.value)}
                            htmlFor="" className=""> #Guests</label>
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
                        <textArea row={5} className="form-control"></textArea>
                    </div>

                </div>
                <div className="col">
                    <div className="mb-3">
                        <label htmlFor="" className="">Details</label>
                        <textArea row={5} className="form-control"></textArea>
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
                            <input type="text" className="form-control" />
                        </div>
                </div>
                </div>

                <div className="col">
                <Link to = '/properties' className="btn btn-success">Back</Link>  
                </div>

            </div>
            </div>

        </div>
        
        
        
    )
}
export default PropertyDetails